// AdultEnergyRequirementsCalculator

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ConfirmationMessage } from '../common';
import { differenceInYears } from 'date-fns';

export const AdultEnergyRequirementsCalculator = () => {
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [activityLevel, setActivityLevel] = useState(null);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [results, setResults] = useState(null);
    const [calculationMessage, setCalculationMessage] = useState({ text: '', type: '' }); // Mensaje de cálculo
    const [inputValue, setInputValue] = useState(activityLevel); // Estado temporal para el input
    const { patients } = useSelector((state) => state.patients);

    const handleConfirmActivityLevel = () => {
        setActivityLevel(Number(inputValue)); // Actualizar el nivel de actividad
        calculateRequirements(); // Ejecutar los cálculos
      };

    const calculateRequirements = () => {

        const patient = patients.find((p) => p.id === selectedPatient);

        if (!patient) {
            setCalculationMessage({
                text: "Paciente no encontrado.",
                type: "error",
            });
            return;
        }

        // const { weight, height, age, gender, activityLevel } = patient;
        const { weight: patientWeight, stature: patientHeight, gender, unixBirthday } = patient;

        // Calcular la edad del paciente
        const currentDate = new Date();
        const patientBirthday = new Date(unixBirthday * 1000); // Convertir Unix timestamp a Date
        const age = differenceInYears(currentDate, patientBirthday);

        // Último peso del paciente
        const latestWeight = patientWeight
        ? patientWeight[patientWeight.length - 1]?.A
        : null;

        // Última talla del paciente
        const latestHeight = patientHeight
        ? patientHeight[patientHeight.length - 1]?.A
        : null;

        // Harris-Benedict Equation
        const harrisBenedict =
        gender === 'Masculino'
            ? 66.479 + (13.7516 * latestWeight) + (5.0033 * latestHeight) - (6.755 * age)
            : 655.0955 + (9.5634 * latestWeight) + (1.8449 * latestHeight) - (4.6756 * age);

        // Mifflin-St Jeor Equation
        const mifflin =
        gender === 'Masculino'
            ? (10 * latestWeight) + (6.25 * latestHeight) - (5 * age) + 5
            : (10 * latestWeight) + (6.25 * latestHeight) - (5 * age) - 161;

        // FAO/WHO Method (simplified example)
        let faoWho = 0;
        if(gender === 'Masculino'){
            if(age>18 && age<30){
                faoWho = (15.057 * latestWeight) + 692.2;
            }
            if(age>30 && age<60){
                faoWho = (11.472 * latestWeight) + 873.1;
            }
            if(age>60){
                faoWho = (11.711 * latestWeight) + 587.7;
            }
        }else{
            if(age>18 && age<30){
                faoWho = (14.818 * latestWeight) + 486.6;
            }
            if(age>30 && age<60){
                faoWho = (8.126 * latestWeight) + 845.6;
            }
            if(age>60){
                faoWho = (9.082 * latestWeight) + 658.5;
            }
        }

        // Thermic Effect of Food (TEF, 10% of total)
        const tefHarrisBenedict = harrisBenedict * 0.1;
        const tefMifflin = mifflin * 0.1;
        const tefFaoWho = faoWho * 0.1;

        // Adjusted Results
        const totalHarrisBenedict = harrisBenedict + tefHarrisBenedict;
        const totalMifflin = mifflin + tefMifflin;
        const totalFaoWho = faoWho + tefFaoWho;

        // Hydration Requirement (35-40 mL per kg of weight)
        const hydrationMin = latestWeight * 35;
        const hydrationMax = latestWeight * 40;

        setAge(age);
        setWeight(latestWeight);
        setHeight(latestHeight);
        setCalculationMessage({ text: "", type: "" });

        setResults({
        harrisBenedict: totalHarrisBenedict,
        mifflin: totalMifflin,
        faoWho: totalFaoWho,
        hydrationMin,
        hydrationMax,
        });
    };

  return (
    <div className="calculator-main-container" style={{backgroundColor: '#03407c'}}>
        <div className="calculator-wrapper">
            <p className="calculator-item-title" style={{color: 'white'}}>Requerimientos energéticos para población adulta</p>
            <div className="calculator-container" style={{flexDirection: 'column'}}>
                <table style={{borderCollapse: 'collapse', width: '100%', fontWeight: '400', fontSize: '0.8rem'}}>
                    <tbody>
                        <tr>
                            <th colSpan="2" style={{backgroundColor: '#88ddFF',border: '1px solid #007BFF',padding: '8px'}}>
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
                                        <button className="btn-sm-blue" style={{marginRight: '0'}} onClick={calculateRequirements}>
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
                                            onChange={(e) => setInputValue(e.target.value)} // Actualizar el estado temporal
                                        />
                                        <button
                                            className='btn-sm-blue'
                                            style={{ marginRight: '0' }}
                                            onClick={handleConfirmActivityLevel} // Confirmar al hacer clic
                                        >
                                            Modificar nivel de actividad
                                        </button>
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
                                {activityLevel || ''}
                            </td>
                        </tr>
                        <tr>
                            <th style={{ width: '50%', backgroundColor: '#00bbFF', color: 'white', border: '1px solid #007BFF', padding: '8px' }}><strong>Harris-Benedict:</strong></th>
                            <td style={{ borderColor: '#007BFF', padding: '8px' }}>
                                <p>{results ? results.harrisBenedict.toFixed(2) + ' kcal/día' : ''}</p>
                                <span style={{ color: 'gray' }}>
                                    {results ? ` (${(results.harrisBenedict.toFixed(2) / weight).toFixed(2)} kcal/kg/día)` : ''}
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <th style={{ width: '50%', backgroundColor: '#00bbFF', color: 'white', border: '1px solid #007BFF', padding: '8px' }}><strong>Mifflin-St Jeor:</strong></th>
                            <td style={{ borderColor: '#007BFF', padding: '8px' }}>
                                <p>{results ? results.mifflin.toFixed(2) + ' kcal/día' : ''}</p>
                                <span style={{ color: 'gray' }}>
                                    {results ? ` (${(results.mifflin.toFixed(2) / weight).toFixed(2)} kcal/kg/día)` : ''}
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <th style={{ width: '50%', backgroundColor: '#00bbFF', color: 'white', border: '1px solid #007BFF', padding: '8px' }}><strong>FAO/WHO:</strong></th>
                            <td style={{ borderColor: '#007BFF', padding: '8px' }}>
                                <p>{results ? results.faoWho.toFixed(2) + ' kcal/día' : ''}</p>
                                <span style={{ color: 'gray' }}>
                                    {results ? ` (${(results.faoWho.toFixed(2) / weight).toFixed(2)} kcal/kg/día)` : ''}
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <th style={{ width: '50%', backgroundColor: '#00bbFF', color: 'white', border: '1px solid #007BFF', padding: '8px' }}><strong>Hydration Requirement:</strong></th>
                            <td style={{ borderColor: '#007BFF', padding: '8px' }}>
                                <p>{results ? results.hydrationMin.toFixed(2) + ' - ' + results.hydrationMax.toFixed(2) + ' mL/día' : ''}</p>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
};
