// AdultEnergyRequirementsCalculator

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ConfirmationMessage } from '../common';

export const AdultEnergyRequirementsCalculator = () => {
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [activityLevel, setActivityLevel] = useState(1.7);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [results, setResults] = useState(null);
    const [calculationMessage, setCalculationMessage] = useState({ text: '', type: '' }); // Mensaje de cálculo
    const { patients } = useSelector((state) => state.patients);

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
        const { gender } = patient;

        const weight = 70;
        const height = 175;
        const age = 28;
        const activityLevel = 1.7;

        const omsH18 = (15.057 * weight) + 692.2;
        const omsM18 = (14.818 * weight) + 486.6;
        const omsH30 = (11.472 * weight) + 873.1;
        const omsM30 = (8.126 * weight) + 845.6;
        const omsH60 = (11.711 * weight) + 587.7;
        const omsM60 = (9.082 * weight) + 658.5;

        // Harris-Benedict Equation
        const harrisBenedict =
        gender === 'Masculino'
            ? 66.479 + (13.7516 * weight) + (5.0033 * height) - (6.755 * age)
            : 655.0955 + (9.5634 * weight) + (1.8449 * height) - (4.6756 * age);

        // Mifflin-St Jeor Equation
        const mifflin =
        gender === 'Masculino'
            ? (10 * weight) + (6.25 * height) - (5 * age) + 5
            : (10 * weight) + (6.25 * height) - (5 * age) - 161;

        // FAO/WHO Method (simplified example)
        let faoWho = 0;
        if(gender === 'Masculino'){
            if(age>18 && age<30){
                faoWho = (15.057 * weight) + 692.2;
            }
            if(age>30 && age<60){
                faoWho = (11.472 * weight) + 873.1;
            }
            if(age>60){
                faoWho = (11.711 * weight) + 587.7;
            }
        }else{
            if(age>18 && age<30){
                faoWho = (14.818 * weight) + 486.6;
            }
            if(age>30 && age<60){
                faoWho = (8.126 * weight) + 845.6;
            }
            if(age>60){
                faoWho = (9.082 * weight) + 658.5;
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
        const hydrationMin = weight * 35;
        const hydrationMax = weight * 40;

        setAge(age);
        setWeight(weight);
        setHeight(height);
        setActivityLevel(activityLevel);
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
    <div className="calculator-main-container" style={{backgroundColor: '#003366'}}>
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
                                        <button className="btn-sm" style={{marginRight: '0'}} onClick={calculateRequirements}>
                                            Calcular requerimientos
                                        </button>
                                        <ConfirmationMessage message={calculationMessage} />
                                    </div>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            {/* Encabezado dinámico */}
                            <th style={{ width: '50%', backgroundColor: '#00b8FF', color: 'white',borderColor: '#007BFF',padding: '8px' }}>Edad</th>
                            {/* Mostrar la edad con su unidad en la celda */}
                            <td style={{borderColor: '#007BFF',padding: '8px'}}>
                                {age}
                            </td>
                        </tr>
                        <tr>
                            <th style={{ width: '50%', backgroundColor: '#00bbFF', color: 'white',border: '1px solid #007BFF',padding: '8px' }}>Peso (kg)</th>
                            <td style={{borderColor: '#007BFF',padding: '8px'}}>
                            {weight}
                            </td>
                        </tr>
                        <tr>
                            <th style={{ width: '50%', backgroundColor: '#00bbFF', color: 'white',border: '1px solid #007BFF',padding: '8px' }}>Altura (cm)</th>
                            <td style={{borderColor: '#007BFF',padding: '8px'}}>
                            {height}
                            </td>
                        </tr>
                        <tr>
                            <th style={{ width: '50%', backgroundColor: '#00bbFF', color: 'white',border: '1px solid #007BFF',padding: '8px' }}>Nivel de actividad física</th>
                            <td style={{borderColor: '#007BFF',padding: '8px'}}>
                            {activityLevel}
                            </td>
                        </tr>
                        <tr>
                            <th style={{ width: '50%', backgroundColor: '#00bbFF', color: 'white',border: '1px solid #007BFF',padding: '8px' }}><strong>Harris-Benedict:</strong></th>
                            <td style={{borderColor: '#007BFF',padding: '8px'}}>
                            <p> {results
                                    ?   results.harrisBenedict.toFixed(2)
                                    :   ''
                                } kcal/day</p>
                                <span style={{ color: 'gray' }}> ({
                                    results
                                    ?(results.harrisBenedict.toFixed(2) / weight).toFixed(2)
                                    : ''
                                    } kcal/kg/day)</span>
                                    
                            </td>
                        </tr>
                        <tr>
                            <th style={{ width: '50%', backgroundColor: '#00bbFF', color: 'white',border: '1px solid #007BFF',padding: '8px' }}><strong>Mifflin-St Jeor:</strong></th>
                            <td style={{borderColor: '#007BFF',padding: '8px'}}>
                            <p> {results
                                    ?   results.mifflin.toFixed(2)
                                    :   ''
                                } kcal/day</p>
                                <span style={{ color: 'gray' }}> ({
                                    results
                                    ?(results.mifflin.toFixed(2) / weight).toFixed(2)
                                    : ''
                                    } kcal/kg/day)</span>
                                    
                            </td>
                        </tr>
                        <tr>
                            <th style={{ width: '50%', backgroundColor: '#00bbFF', color: 'white',border: '1px solid #007BFF',padding: '8px' }}><strong>FAO/WHO:</strong></th>
                            <td style={{borderColor: '#007BFF',padding: '8px'}}>
                            <p> {results
                                    ?   results.faoWho.toFixed(2)
                                    :   ''
                                } kcal/day</p>
                                <span style={{ color: 'gray' }}> ({
                                    results
                                    ?(results.faoWho.toFixed(2) / weight).toFixed(2)
                                    : ''
                                    } kcal/kg/day)</span>
                                    
                            </td>
                        </tr>
                        <tr>
                            <th style={{ width: '50%', backgroundColor: '#00bbFF', color: 'white',border: '1px solid #007BFF',padding: '8px' }}><strong>Hydration Requirement:</strong></th>
                            <td style={{borderColor: '#007BFF',padding: '8px'}}>
                            <p> {results
                                    ?   results.hydrationMin.toFixed(2)
                                    :   ''
                                } - {results
                                        ?   results.hydrationMax.toFixed(2)
                                        :   ''
                                    } mL/day</p>
                                    
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
};
