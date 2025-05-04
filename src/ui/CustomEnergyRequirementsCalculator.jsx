import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ConfirmationMessage } from '../common';
import { startUploadingEnergyRequirements } from '../store/energyRequirements/thunks';
import { LoadingButton } from './components';
import styles from './components/AdultEnergyRequirementsCalculatorStyles.module.css';

export const CustomEnergyRequirementsCalculator = () => {
  const [customWeight, setCustomWeight] = useState('');
  const [customKcalPerKg, setCustomKcalPerKg] = useState('');
  const [customTotalKcal, setCustomTotalKcal] = useState(0);
  const [proteins, setProteins] = useState(0);
  const [lipids, setLipids] = useState(0);
  const [cho, setCho] = useState(0);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [attachmentMessage, setAttachmentMessage] = useState({ text: '', type: '' });
  const [isSending, setIsSending] = useState(false);
  const { uid } = useSelector((state) => state.auth);
  const { patients } = useSelector((state) => state.patients);
  const dispatch = useDispatch();

  const calculateCustomRequeriments = () => {
    const weight = parseFloat(customWeight);
    const kcalPerKg = parseFloat(customKcalPerKg);

    if (isNaN(weight) || isNaN(kcalPerKg) || weight <= 0 || kcalPerKg <= 0) {
      setCustomTotalKcal(0);
      return;
    }
    setCustomTotalKcal(weight * kcalPerKg);
  };

  const calculateMacroGrams = (percentage, type) => {
    const totalKcal = parseFloat(customTotalKcal);
    const macroPercentage = parseFloat(percentage);

    if (isNaN(totalKcal) || isNaN(macroPercentage) || totalKcal <= 0 || macroPercentage <= 0) return 0;

    const divisor = type === 'lipids' ? 9 : 4;
    return ((totalKcal * (macroPercentage / 100)) / divisor).toFixed(1);
  };

  const validateMacros = () => {
    const totalPercentage = parseFloat(proteins) + parseFloat(lipids) + parseFloat(cho);
    return !isNaN(totalPercentage) && Math.abs(totalPercentage - 100) < 0.01; // Allow small tolerance
  };

  const handleAttachTable = async () => {
    setIsSending(true);

    if (!selectedPatient) {
      setAttachmentMessage({ text: 'Ningún paciente seleccionado.', type: 'error' });
      setIsSending(false);
      return;
    }

    if (!validateMacros()) {
      setAttachmentMessage({ text: 'La suma de macromoléculas debe ser igual a 100%.', type: 'error' });
      setIsSending(false);
      return;
    }

    const energyRequirement = {
      kcalPerKg: parseFloat(customKcalPerKg),
      totalKcal: parseFloat(customTotalKcal),
      proteins: parseFloat(proteins),
      lipids: parseFloat(lipids),
      cho: parseFloat(cho),
    };
    const patientID = selectedPatient;

    try {
      const message = await dispatch(
        startUploadingEnergyRequirements(uid, patientID, energyRequirement)
      );
      const messageType = message === 'Ocurrió un error.' ? 'error' : 'success';
      setAttachmentMessage({ text: message, type: messageType });
    } catch (error) {
      setAttachmentMessage({ text: 'Error al adjuntar datos al paciente.', type: 'error' });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="new-calculator-wrapper">
            <div className="new-calculator-container">
              <div className="w-full bg-00bf62 text-white text-center px-6 py-6">
                <h1 className="new-calculator-title">
                  Cálculo personalizado de requerimientos energéticos
                </h1>
              </div>
              <div className="new-calculator-section">
                <div className="new-calculator-grid">
                  <div className="new-calculator-item">
                    <div className="new-calculator-card">
                      <h3 className="text-lg font-semibold text-green-900 mb-4">Datos básicos</h3>
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
                      <h3 className="text-lg font-semibold text-green-900 mb-4">Resultados</h3>
                      <div className="new-calculator-results-group">
                        <div className="new-calculator-result-card">
                          <div className="new-calculator-result-row">
                            <span className="new-calculator-result-label">
                              Requerimiento energético:
                            </span>
                          </div>
                          <div className="new-calculator-result-value custom-flex-column">
                            {customTotalKcal
                              ? `${customTotalKcal} Kcal/día`
                              : "-"}
                          </div>
                        </div>
                        
                      </div>
                    </div>
    
                  </div>
                  <div className="new-calculator-distribution-container">
                  <h3 className="text-lg font-semibold text-green-900 mb-4">
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
                  <select
                    className="input-select"
                    style={{ border: 'solid 1px #e4e4e4', fontFamily: 'Metropolis' }}
                    onChange={(e) => setSelectedPatient(e.target.value)}
                  >
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
                    className="btn-sm-green-secondary"
                  >
                    Calcular requerimiento
                  </button>
                  <LoadingButton
                      className='btn-sm-green'
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
};
