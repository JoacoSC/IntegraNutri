import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ConfirmationMessage } from '../common';
import { startUploadingEnergyRequirements } from '../store/energyRequirements/thunks';
import { LoadingButton } from './components';

export const CustomEnergyRequirementsCalculator = () => {

  const [customWeight, setCustomWeight] = useState('');
  const [customKcalPerKg, setCustomKcalPerKg] = useState('');
  const [customTotalKcal, setCustomTotalKcal] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [attachmentMessage, setAttachmentMessage] = useState({ text: '', type: '' });
  const [isSending, setIsSending] = useState(false);
  const { uid } = useSelector((state) => state.auth);
  const { patients } = useSelector((state) => state.patients);

  const dispatch = useDispatch();

  const calculateCustomRequeriments = () => {
    if (!customWeight || !customKcalPerKg) {
      setCustomTotalKcal('');
      return;
    }
    setCustomTotalKcal((customWeight * customKcalPerKg).toFixed(0));
  };

  const handleAttachTable = async () => {
    setIsSending(true);
    if (!selectedPatient) {
      setAttachmentMessage({ text: 'Ningún paciente seleccionado.', type: 'error' });
      setIsSending(false); // Rehabilita botones
      return;
    }

    const kcalPerKg = customKcalPerKg;
    const totalKcal = customTotalKcal;

    const energyRequirement = { kcalPerKg, totalKcal };
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
      setIsSending(false); // Rehabilita botones
  }
  };

  return (
    
    <div className="calculator-main-container" style={{backgroundColor: '#00BF62'}}>
        <div className="calculator-wrapper">
        <p className="calculator-item-title" style={{color: 'white'}}>Cálculo personalizado de requerimientos energéticos</p>
        <div className="calculator-container" style={{flexDirection: 'column'}}>
            <table style={{borderCollapse: 'collapse', width: '100%', fontWeight: '400', fontSize: '0.8rem'}}>
              <tbody>

                <tr>
                <th style={{ width: '50%', backgroundColor: '#09d170', color: 'white',border: '1px solid #30bb34',padding: '8px' }}>Peso (kg)</th>
                <td style={{borderColor: '#30bb34',padding: '8px'}}><input
                type="number"
                placeholder="Peso (kg)"
                value={customWeight}
                style={{fontFamily: 'Metropolis'}}
                onChange={(e) => setCustomWeight(e.target.value)}
                /></td>
                </tr>
                <tr>
                <th style={{ width: '50%', backgroundColor: '#09d170', color: 'white',border: '1px solid #30bb34',padding: '8px' }}>Calorías por kilo al día</th>
                <td style={{borderColor: '#30bb34',padding: '8px'}}><input
                type="number"
                placeholder="Kcal/kg/día"
                value={customKcalPerKg}
                style={{fontFamily: 'Metropolis'}}
                onChange={(e) => setCustomKcalPerKg(e.target.value)}
                /></td>
                </tr>
                <tr>
                <th style={{ width: '50%', backgroundColor: '#09d170', color: 'white',border: '1px solid #30bb34',padding: '8px' }}>Requerimiento energético</th>
                <td style={{borderColor: '#30bb34',padding: '8px'}}>{customTotalKcal && (
                <p style={{ color: 'green', fontWeight: 'bold', marginTop: '10px' }}>
                {customTotalKcal} Kcal/día
                </p>
            )}</td>
                </tr>
              </tbody>
                
            </table>
        </div>
        <button className="btn-sm-green" style={{margin: '20px auto'}} onClick={calculateCustomRequeriments}>
            Calcular requerimiento energético
        </button>
        <div className='patient-table-attachment-container' style={{paddingTop: '10px'}}>
            <div className='flex-row gap-1'>
                <select className='input-select' onChange={(e) => setSelectedPatient(e.target.value)}>
                <option value="">Seleccionar paciente</option>
                {patients.map((patient) => (
                    <option key={patient.id} value={patient.id}>
                    {patient.displayName}
                    </option>
                ))}
                </select>
                {/* <button className='btn-sm' onClick={handleAttachTable}>Adjuntar al paciente seleccionado</button> */}
                <LoadingButton
                  className='btn-sm-green'
                  text='Adjuntar al paciente seleccionado'
                  onClick={handleAttachTable}
                  disabled={isSending} // Mostrará la animación si `disabled` es `true`
                />
            </div>
            <ConfirmationMessage message={attachmentMessage} />
        </div>
        </div>
    </div>
  )
}
