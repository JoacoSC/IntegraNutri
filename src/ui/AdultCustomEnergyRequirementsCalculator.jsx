import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ConfirmationMessage } from '../common';
import { startUploadingAdultEnergyRequirements } from '../store/energyRequirements/thunks';
import { LoadingButton, MoleculeDistribution } from './components';
import './components/NewCalculatorStyles.css';


export const AdultCustomEnergyRequirementsCalculator = () => {

  const [customWeight, setCustomWeight] = useState('');
  const [customKcalPerKg, setCustomKcalPerKg] = useState('');
  const [customTotalKcal, setCustomTotalKcal] = useState(0); // Inicializado como número
  const [hydrationMax, setHydrationMax] = useState(0); // Inicializado como número
  const [hydrationMin, setHydrationMin] = useState(0); // Inicializado como número
  const [proteins, setProteins] = useState("");
  const [lipids, setLipids] = useState("");
  const [cho, setCho] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [attachmentMessage, setAttachmentMessage] = useState({ text: '', type: '' });
  const [factorial, setFactorial] = useState('');
  const [isSending, setIsSending] = useState(false);
  const { uid } = useSelector((state) => state.auth);
  const { patients } = useSelector((state) => state.patients);

  const dispatch = useDispatch();

  const calculateCustomRequeriments = () => {
    const weight = parseFloat(customWeight);
    const kcalPerKg = parseFloat(customKcalPerKg);

    if (isNaN(weight) || isNaN(kcalPerKg) || weight <= 0 || kcalPerKg <= 0) {
      setCustomTotalKcal(0);
      setHydrationMin(0);
      setHydrationMax(0);
      setFactorial('');
      return;
    }

    const eta = 1.1; // Efecto térmico de los alimentos
    const totalKcal = weight * kcalPerKg * eta;

    setCustomTotalKcal(totalKcal.toFixed(0));
    setHydrationMin((totalKcal * 1).toFixed(0));
    setHydrationMax((totalKcal * 1.2).toFixed(0));

    if (kcalPerKg < 25) {
      setFactorial('Hipocalórica');
    } else if (kcalPerKg >= 25 && kcalPerKg <= 30) {
      setFactorial('Normocalórica');
    } else {
      setFactorial('Hipercalórica');
    }
  };

  const validateMacros = () => {
    const totalPercentage = Number(proteins) + Number(lipids) + Number(cho);
    return totalPercentage === 100;
  };

  const handleAttachTable = async () => {
    setIsSending(true);
    setAttachmentMessage({ text: '', type: '' }); // Limpia el mensaje de error antes de realizar un nuevo intento
    // console.log('Selected Patient:', selectedPatient);
    
    if (!selectedPatient) {
      setAttachmentMessage({ text: 'Ningún paciente seleccionado.', type: 'error' });
      setIsSending(false); // Rehabilita botones
      return;
    }
  
    if (!validateMacros()) {
      setAttachmentMessage({ text: 'Los porcentajes de proteínas, lípidos y CHO deben sumar 100%.', type: 'error' });
      setIsSending(false); // Rehabilita botones
      return;
    }
  
    const kcalPerKg = customKcalPerKg;
    const totalKcal = customTotalKcal;
    const method = 'factorial';
  
    const energyRequirement = { 
      kcalPerKg: parseFloat(customKcalPerKg), 
      totalKcal: parseFloat(customTotalKcal), 
      hydrationMin: parseFloat(hydrationMin), 
      hydrationMax: parseFloat(hydrationMax), 
      factorial, 
      method, 
      proteins: parseFloat(proteins), 
      lipids: parseFloat(lipids), 
      cho: parseFloat(cho) 
    };
    const patientID = selectedPatient;
  
    try {
      // console.log('Enviando datos:', energyRequirement);
      // console.log('Paciente:', patientID);
      // console.log('Usuario:', uid);
      const message = await dispatch(
        startUploadingAdultEnergyRequirements(uid, patientID, energyRequirement)
      );
      const messageType = message === 'Ocurrió un error.' ? 'error' : 'success';
      setAttachmentMessage({ text: message, type: messageType });
    } catch (error) {
      console.error('Error:', error);
      setAttachmentMessage({ text: 'Error al adjuntar datos al paciente.', type: 'error' });
    } finally {
      setIsSending(false); // Rehabilita botones
    }
  };

  const calculateMacroGrams = (percentage, type) => {
    if (!customTotalKcal || isNaN(percentage) || percentage <= 0) return 0;
    const divisor = type === 'lipids' ? 9 : 4;
    return ((customTotalKcal * (parseFloat(percentage) / 100)) / divisor).toFixed(1);
  };
  
  return (
    
      <div className="new-calculator-wrapper">
        <div className="new-calculator-container">
          <div className="new-calculator-header">
            <h1 className="new-calculator-title">
              Cálculo personalizado de requerimientos energéticos
            </h1>
          </div>
          <div className="new-calculator-section">
            <div className="new-calculator-grid">
              <div className="new-calculator-item">
                <div className="new-calculator-card">
                  <h3 className="new-calculator-card-title">Datos básicos</h3>
                  <div className="new-calculator-form-group">
                    <div>
                      <label className="new-calculator-label">Peso (kg)</label>
                      <input
                        className='new-calculator-input'
                        type="number"
                        placeholder="Peso (kg)"
                        value={customWeight}
                        style={{fontFamily: 'Metropolis', marginBottom: '10px'}}
                        onChange={(e) => setCustomWeight(e.target.value)}
                        />
                    </div>
                    <div>
                      <label className="new-calculator-label">Calorías por kilo al día</label>
                      <input
                        className='new-calculator-input'
                        type="number"
                        placeholder="Kcal/kg/día"
                        value={customKcalPerKg}
                        style={{fontFamily: 'Metropolis'}}
                        onChange={(e) => setCustomKcalPerKg(e.target.value)}
                        />
                    </div>
                  </div>
                </div>

                <div className="new-calculator-results-container">
                  <h3 className="new-calculator-results-title">Resultados</h3>
                  <div className="new-calculator-results-group">
                    <div className="new-calculator-result-card">
                      <div className="new-calculator-result-row">
                        <span className="new-calculator-result-label">
                          Requerimiento energético:
                        </span>
                      </div>
                      <div className="new-calculator-result-value flex-column">
                        {customTotalKcal
                          ? `${customTotalKcal} Kcal/día`
                          : "-"}
                        {factorial && (
                          <span className="new-calculator-diet-type">
                            (Dieta {factorial})
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="new-calculator-result-card">
                      <div className="new-calculator-result-row">
                        <span className="new-calculator-result-label">
                          Requerimiento hídrico:
                        </span>
                      </div>
                      <div className="new-calculator-result-value">
                        {hydrationMin
                          ? `${hydrationMin} - ${hydrationMax} ml/día`
                          : "-"}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="new-calculator-distribution-container">
              <h3 className="new-calculator-distribution-title">
                Distribución de la molécula calórica
              </h3>
              <div className="new-calculator-distribution-group">
                {/* Proteínas */}
                <div className="new-calculator-distribution-card">
                  <div className="new-calculator-distribution-row">
                    <div className="new-calculator-distribution-label">
                      <div
                        className="new-calculator-distribution-dot"
                        style={{ backgroundColor: "#f57c0b" }}></div>
                      <span style={{ fontWeight: 500 }}>Proteínas</span>
                    </div>
                    <div className="new-calculator-distribution-input-container">
                      <input
                        type="number"
                        value={proteins}
                        onChange={(e) => setProteins(e.target.value)}
                        className="new-calculator-distribution-input"
                        placeholder="%"
                      />
                      <span className="new-calculator-distribution-grams">
                        {calculateMacroGrams(proteins, 'proteins')}g
                      </span>
                    </div>
                  </div>
                  <div className="new-calculator-distribution-bar-container">
                    <div
                      className="new-calculator-distribution-bar new-calculator-protein-bar"
                      style={{ width: `${proteins}%` }}
                    ></div>
                  </div>
                </div>

                {/* Lípidos */}
                <div className="new-calculator-distribution-card">
                  <div className="new-calculator-distribution-row">
                    <div className="new-calculator-distribution-label">
                      <div
                        className="new-calculator-distribution-dot"
                        style={{ backgroundColor: "#f5d20b" }}
                      ></div>
                      <span style={{ fontWeight: 500 }}>Lípidos</span>
                    </div>
                    <div className="new-calculator-distribution-input-container">
                      <input
                        type="number"
                        value={lipids}
                        onChange={(e) => setLipids(e.target.value)}
                        className="new-calculator-distribution-input"
                        placeholder="%"
                      />
                      <span className="new-calculator-distribution-grams">
                        {calculateMacroGrams(lipids, 'lipids')}g
                      </span>
                    </div>
                  </div>
                  <div className="new-calculator-distribution-bar-container">
                    <div
                      className="new-calculator-distribution-bar new-calculator-lipid-bar"
                      style={{ width: `${lipids}%` }}
                    ></div>
                  </div>
                </div>

                {/* CHO */}
                <div className="new-calculator-distribution-card">
                  <div className="new-calculator-distribution-row">
                    <div className="new-calculator-distribution-label">
                      <div
                        className="new-calculator-distribution-dot"
                        style={{ backgroundColor: "#EF4444" }}
                      ></div>
                      <span style={{ fontWeight: 500 }}>CHO</span>
                    </div>
                    <div className="new-calculator-distribution-input-container">
                      <input
                        type="number"
                        value={cho}
                        onChange={(e) => setCho(e.target.value)}
                        className="new-calculator-distribution-input"
                        placeholder="%"
                      />
                      <span className="new-calculator-distribution-grams">
                        {calculateMacroGrams(cho, 'cho')}g
                      </span>
                    </div>
                  </div>
                  <div className="new-calculator-distribution-bar-container">
                    <div
                      className="new-calculator-distribution-bar new-calculator-cho-bar"
                      style={{ width: `${cho}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            </div>
            <ConfirmationMessage message={attachmentMessage} />
            <div className="new-calculator-footer-container">
              <select className='input-select' style={{border: 'solid 1px #e4e4e4'}} onChange={(e) => setSelectedPatient(e.target.value)}>
                <option value="">Seleccionar paciente</option>
                {patients.map((patient) => (
                    <option key={patient.id} value={patient.id}>
                    {patient.displayName}
                    </option>
                ))}
              </select>
            <div className="new-calculator-footer-buttons-container">
              <button
                onClick={calculateCustomRequeriments}
                className="btn-sm-blue-secondary"
              >
                Calcular requerimiento
              </button>
              <LoadingButton
                  className='btn-sm-blue'
                  text='Adjuntar al paciente'
                  onClick={handleAttachTable}
                  disabled={isSending} // Mostrará la animación si `disabled` es `true`
                />
            </div>
          </div>

          </div>
        </div>
      </div>
  );
}
