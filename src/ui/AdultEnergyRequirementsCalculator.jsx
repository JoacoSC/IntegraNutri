// AdultEnergyRequirementsCalculator

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ConfirmationMessage } from '../common';
import { differenceInYears } from 'date-fns';
import { LoadingButton } from './components';
import { startUploadingAdultEnergyRequirements } from '../store/energyRequirements/thunks';

export const AdultEnergyRequirementsCalculator = () => {
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [activityLevel, setActivityLevel] = useState(1.4); // Valor por defecto
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [results, setResults] = useState(null);
    const [calculationMessage, setCalculationMessage] = useState({ text: '', type: '' });
    const [attachmentMessage, setAttachmentMessage] = useState({ text: '', type: '' });
    const [inputValue, setInputValue] = useState(activityLevel); // Estado temporal para el input
    const [isSending, setIsSending] = useState(false);
    const [selectedMethod, setSelectedMethod] = useState('');

    const { uid } = useSelector((state) => state.auth);
    const { patients } = useSelector((state) => state.patients);

    const dispatch = useDispatch();

    const calculateRequirements = () => {

        setCalculationMessage({
            text: "",
            type: "",
        });

        const patient = patients.find((p) => p.id === selectedPatient);

        if (!patient) {
            setCalculationMessage({
                text: "Paciente no encontrado.",
                type: "error",
            });
            return;
        }

        const { weight: patientWeight, stature: patientHeight, gender, unixBirthday } = patient;

        const currentDate = new Date();
        const patientBirthday = new Date(unixBirthday * 1000);
        const age = differenceInYears(currentDate, patientBirthday);

        if (age < 18) {
            setCalculationMessage({
                text: "El paciente debe ser mayor de 18 años.",
                type: "error",
            });
            return;
        }

        const latestWeight = patientWeight ? patientWeight[patientWeight.length - 1]?.A : null;
        const latestHeight = patientHeight ? patientHeight[patientHeight.length - 1]?.A : null;

        if (!latestWeight || !latestHeight) {
            setCalculationMessage({
                text: "Peso o altura no disponibles para el paciente seleccionado.",
                type: "error",
            });
            return;
        }

        const harrisBenedict =
            gender === 'Masculino'
                ? 66.479 + (13.7516 * latestWeight) + (5.0033 * latestHeight) - (6.755 * age)
                : 655.0955 + (9.5634 * latestWeight) + (1.8449 * latestHeight) - (4.6756 * age);

        const mifflin =
            gender === 'Masculino'
                ? (10 * latestWeight) + (6.25 * latestHeight) - (5 * age) + 5
                : (10 * latestWeight) + (6.25 * latestHeight) - (5 * age) - 161;

        let faoWho = 0;
        if (gender === 'Masculino') {
            if (age > 18 && age < 30) {
                faoWho = (15.057 * latestWeight) + 692.2;
            } else if (age >= 30 && age < 60) {
                faoWho = (11.472 * latestWeight) + 873.1;
            } else if (age >= 60) {
                faoWho = (11.711 * latestWeight) + 587.7;
            }
        } else {
            if (age > 18 && age < 30) {
                faoWho = (14.818 * latestWeight) + 486.6;
            } else if (age >= 30 && age < 60) {
                faoWho = (8.126 * latestWeight) + 845.6;
            } else if (age >= 60) {
                faoWho = (9.082 * latestWeight) + 658.5;
            }
        }

        const actualActivityLevel = inputValue || activityLevel; // Usa input o el valor por defecto
        const totalHarrisBenedict = (harrisBenedict * actualActivityLevel).toFixed(0);
        const totalMifflin = (mifflin * actualActivityLevel).toFixed(0);
        const totalFaoWho = (faoWho * actualActivityLevel).toFixed(0);

        const hydrationMinHarrisBenedict = (totalHarrisBenedict * 1).toFixed(0);
        const hydrationMaxHarrisBenedict = (totalHarrisBenedict * 1.2).toFixed(0);
        const hydrationMinMifflin = (totalMifflin * 1).toFixed(0);
        const hydrationMaxMifflin = (totalMifflin * 1.2).toFixed(0);
        const hydrationMinFaoWho = (totalFaoWho * 1).toFixed(0);
        const hydrationMaxFaoWho = (totalFaoWho * 1.2).toFixed(0);

        setAge(age);
        setWeight(latestWeight);
        setHeight(latestHeight);
        setResults({
            harrisBenedict: totalHarrisBenedict,
            mifflin: totalMifflin,
            faoWho: totalFaoWho,
            hydrationMinHarrisBenedict,
            hydrationMaxHarrisBenedict,
            hydrationMinMifflin,
            hydrationMaxMifflin,
            hydrationMinFaoWho,
            hydrationMaxFaoWho,
        });
    };

    const handleAttachTable = async () => {
        setIsSending(true);
        if (!selectedPatient) {
          setAttachmentMessage({ text: 'Ningún paciente seleccionado.', type: 'error' });
          setIsSending(false); // Rehabilita botones
          return;
        }
    
        const patientID = selectedPatient;
        let energyRequirements = {};

        if( selectedMethod === 'Harris-Benedict' ){
            energyRequirements = {
                totalKcal: results.harrisBenedict,
                kcalPerKg: (results.harrisBenedict / weight).toFixed(1),
                method: selectedMethod,
                hydrationMin: results.hydrationMinHarrisBenedict,
                hydrationMax: results.hydrationMaxHarrisBenedict
            }
            
        }
        if( selectedMethod === 'Mifflin-St Jeor' ){
            energyRequirements = {
                totalKcal: results.mifflin,
                kcalPerKg: (results.mifflin / weight).toFixed(1),
                method: selectedMethod,
                hydrationMin: results.hydrationMinMifflin,
                hydrationMax: results.hydrationMaxMifflin
            }

        }
        if( selectedMethod === 'FAO/OMS' ){
            energyRequirements = {
                totalKcal: results.faoWho,
                kcalPerKg: (results.faoWho / weight).toFixed(1),
                method: selectedMethod,
                hydrationMin: results.hydrationMinFaoWho,
                hydrationMax: results.hydrationMaxFaoWho
            }

        }
        // const {} = results;
        // const energyRequirements = ;
    
        // TODO: Ajustar el envío de la evaluación a BD
        try {

          const message = await dispatch(
            startUploadingAdultEnergyRequirements(uid, patientID, energyRequirements)
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
        <div className="calculator-main-container" style={{ backgroundColor: '#03407c' }}>
            <div className="calculator-wrapper">
                <p className="calculator-item-title" style={{ color: 'white' }}>Requerimientos energéticos para población adulta</p>
                <div className="calculator-container" style={{ flexDirection: 'column' }}>
                    <table style={{ borderCollapse: 'collapse', width: '100%', fontWeight: '400', fontSize: '0.8rem' }}>
                        <tbody>
                            <tr>
                                <th colSpan="2" style={{ backgroundColor: '#88ddFF', border: '1px solid #007BFF', padding: '8px' }}>
                                    <div style={{ margin: "15px" }}>
                                        <div className="flex-row gap-1" style={{ margin: '0 10% 0 10%' }}>
                                            <select
                                                className="input-select"
                                                onChange={(e) => setSelectedPatient(e.target.value)}
                                            >
                                                <option value="">Seleccionar paciente</option>
                                                {patients.map((patient) => (
                                                    <option key={patient.id} value={patient.id}>
                                                        {patient.displayName}
                                                    </option>
                                                ))}
                                            </select>
                                            <button className="btn-sm-blue" style={{ marginRight: '0' }} onClick={calculateRequirements}>
                                                Calcular requerimientos
                                            </button>
                                        </div>
                                        <div className="flex-row" style={{ margin: '1rem 10% 0 10%' }}>
                                            <input
                                                type='number'
                                                step='0.05'
                                                className="input-select"
                                                value={inputValue}
                                                style={{ marginRight: 'auto', paddingTop: '0.2rem' }}
                                                placeholder='1.4 - 2.4'
                                                onChange={(e) => setInputValue(Number(e.target.value))}
                                            />
                                        </div>
                                        <ConfirmationMessage message={calculationMessage} />
                                    </div>
                                </th>
                            </tr>
                            <tr>
                            {/* Encabezado dinámico */}
                            <th style={{ width: '50%', backgroundColor: '#00b8FF', color: 'white', borderColor: '#007BFF', padding: '8px' }}>Edad</th>
                            {/* Mostrar la edad con su unidad en la celda */}
                            <td style={{ borderColor: '#007BFF', padding: '8px' }}>
                                {age || ''}
                            </td>
                        </tr>
                        <tr>
                            <th style={{ width: '50%', backgroundColor: '#00bbFF', color: 'white', border: '1px solid #007BFF', padding: '8px' }}>Peso (kg)</th>
                            <td style={{ borderColor: '#007BFF', padding: '8px' }}>
                                {weight || ''}
                            </td>
                        </tr>
                        <tr>
                            <th style={{ width: '50%', backgroundColor: '#00bbFF', color: 'white', border: '1px solid #007BFF', padding: '8px' }}>Altura (cm)</th>
                            <td style={{ borderColor: '#007BFF', padding: '8px' }}>
                                {height || ''}
                            </td>
                        </tr>
                        <tr>
                            <th style={{ width: '50%', backgroundColor: '#00bbFF', color: 'white', border: '1px solid #007BFF', padding: '8px' }}>Nivel de actividad física</th>
                            <td style={{ borderColor: '#007BFF', padding: '8px' }}>
                                {inputValue || activityLevel || ''}
                            </td>
                        </tr>
                    </tbody>
                    </table>
                    <div className='table-spacer' style={{padding: '1rem 0', backgroundColor: '#88ddFF'}}></div>
                    <table style={{ borderCollapse: 'collapse', width: '100%', fontWeight: '400', fontSize: '0.9rem', paddingTop: '20px' }}>
                        <thead>
                            <tr>
                                <th style={{ backgroundColor: '#00bbFF', color: 'white', border: '1px solid #007BFF', padding: '12px', textAlign: 'center' }} colSpan={2}><strong>Requerimientos Energéticos e Hídricos</strong></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Harris-Benedict */}
                            <tr>
                                <td style={{ backgroundColor: '#00bbFF', color: 'white', border: '1px solid #007BFF', padding: '10px', fontWeight: 'bold' }}><strong>Harris-Benedict:</strong></td>
                                <td style={{ border: '1px solid #007BFF', padding: '10px' }}>
                                    {/* Requerimiento energético */}
                                    <div style={{ marginBottom: '10px' }}>
                                        <strong>{results ? '' : 'Esperando datos'}</strong>
                                                <div style={{ fontSize: '0.9rem', color: '#007BFF', fontWeight: 'bold' }}>
                                                    {results ? results.harrisBenedict + ' kcal/día' : ''}
                                                    <span style={{ fontSize: '0.9rem', color: 'gray', fontWeight: 'normal' }}>
                                                        {results ? ` - (${((results.harrisBenedict / weight).toFixed(1))} kcal/kg/día)` : ''}
                                                    </span>
                                                </div>
                                    </div>

                                    {/* Requerimiento hídrico */}
                                    <div style={{ borderTop: '1px solid #007BFF', paddingTop: '10px' }}>
                                        <div style={{ fontSize: '0.9rem', color: '#007BFF', fontWeight: 'bold' }}>
                                        {/* <span style={{ fontWeight: 'bold' }}>
                                        Requerimiento hídrico:  
                                        </span> */}
                                        {results ? ` ${results.hydrationMinHarrisBenedict} - ${results.hydrationMaxHarrisBenedict} ml/día` : ''}
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            {/* Mifflin-St Jeor */}
                            <tr>
                                <td style={{ backgroundColor: '#00bbFF', color: 'white', border: '1px solid #007BFF', padding: '10px', fontWeight: 'bold' }}><strong>Mifflin-St Jeor:</strong></td>
                                <td style={{ border: '1px solid #007BFF', padding: '10px' }}>
                                    {/* Requerimiento energético */}
                                    <div style={{ marginBottom: '10px' }}>
                                        <strong>{results ? '' : 'Esperando datos'}</strong>
                                                <div style={{ fontSize: '0.9rem', color: '#007BFF', fontWeight: 'bold' }}>
                                                    {results ? results.mifflin + ' kcal/día' : ''}
                                                    <span style={{ fontSize: '0.9rem', color: 'gray', fontWeight: 'normal' }}>
                                                        {results ? ` - (${((results.mifflin / weight).toFixed(1))} kcal/kg/día)` : ''}
                                                    </span>
                                                </div>
                                    </div>

                                    {/* Requerimiento hídrico */}
                                    <div style={{ borderTop: '1px solid #007BFF', paddingTop: '10px' }}>
                                        <div style={{ fontSize: '0.9rem', color: '#007BFF', fontWeight: 'bold' }}>
                                        {/* <span style={{ fontWeight: 'bold' }}>
                                        Requerimiento hídrico:  
                                        </span> */}
                                        {results ? ` ${results.hydrationMinMifflin} - ${results.hydrationMaxMifflin} ml/día` : ''}
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            {/* FAO/OMS */}
                            <tr>
                                <td style={{ backgroundColor: '#00bbFF', color: 'white', border: '1px solid #007BFF', padding: '10px', fontWeight: 'bold' }}><strong>FAO/OMS:</strong></td>
                                <td style={{ border: '1px solid #007BFF', padding: '10px' }}>
                                    {/* Requerimiento energético */}
                                    <div style={{ marginBottom: '10px' }}>
                                        <strong>{results ? '' : 'Esperando datos'}</strong>
                                                <div style={{ fontSize: '0.9rem', color: '#007BFF', fontWeight: 'bold' }}>
                                                    {results ? results.faoWho + ' kcal/día' : ''}
                                                    <span style={{ fontSize: '0.9rem', color: 'gray', fontWeight: 'normal' }}>
                                                        {results ? ` - (${((results.faoWho / weight).toFixed(1))} kcal/kg/día)` : ''}
                                                    </span>
                                                </div>
                                    </div>

                                    {/* Requerimiento hídrico */}
                                    <div style={{ borderTop: '1px solid #007BFF', paddingTop: '10px' }}>
                                        <div style={{ fontSize: '0.9rem', color: '#007BFF', fontWeight: 'bold' }}>
                                        {/* <span style={{ fontWeight: 'bold' }}>
                                        Requerimiento hídrico:  
                                        </span> */}
                                        {results ? ` ${results.hydrationMinFaoWho} - ${results.hydrationMaxFaoWho} ml/día` : ''}
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
            </div>
            <div style={{ margin: '2rem auto 0', padding: '1rem', backgroundColor: 'white', border: '1px solid #007BFF', borderRadius: '5px' }}>
                <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Seleccione el método que prefiere:</p>
                <div className="flex-row gap-1" style={{ alignItems: 'center' }}>
                    <label style={{ display: 'flex', alignItems: 'center', marginRight: '1rem' }}>
                        <input
                            type="radio"
                            name="preferredMethod"
                            value="Harris-Benedict"
                            checked={selectedMethod === 'Harris-Benedict'}
                            onChange={(e) => setSelectedMethod(e.target.value)}
                            style={{ marginRight: '0.5rem' }}
                        />
                        Harris-Benedict
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', marginRight: '1rem' }}>
                        <input
                            type="radio"
                            name="preferredMethod"
                            value="Mifflin-St Jeor"
                            checked={selectedMethod === 'Mifflin-St Jeor'}
                            onChange={(e) => setSelectedMethod(e.target.value)}
                            style={{ marginRight: '0.5rem' }}
                        />
                        Mifflin-St Jeor
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', marginRight: '1rem' }}>
                        <input
                            type="radio"
                            name="preferredMethod"
                            value="FAO/OMS"
                            checked={selectedMethod === 'FAO/OMS'}
                            onChange={(e) => setSelectedMethod(e.target.value)}
                            style={{ marginRight: '0.5rem' }}
                        />
                        FAO/OMS
                    </label>
                </div>
                <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#555' }}>
                    Método seleccionado: <strong>{selectedMethod || 'Ninguno seleccionado'}</strong>
                </p>
            </div>

            <div className='patient-table-attachment-container'>
                <div className='flex-row gap-1'>
                    {/* <button className='btn-sm' onClick={handleAttachTable}>Adjuntar al paciente seleccionado</button> */}
                    <LoadingButton
                        className='btn-sm-blue'
                        text='Adjuntar al paciente seleccionado'
                        onClick={handleAttachTable}
                        disabled={isSending} // Mostrará la animación si `disabled` es `true`
                    />
                </div>
                <ConfirmationMessage message={attachmentMessage} />
            </div>
                        
            </div>
        </div>
    );
};



