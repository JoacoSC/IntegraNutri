import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format, fromUnixTime, differenceInMonths, differenceInDays, addMonths } from 'date-fns';
import { ConfirmationMessage } from '../common';

import RE_H_1A from '../../assets/imgs/patient/requerimientos_energeticos/hombres/menores_1_año.svg';
import RE_M_1A from '../../assets/imgs/patient/requerimientos_energeticos/mujeres/menores_1_año.svg';
import RE_H_18A from '../../assets/imgs/patient/requerimientos_energeticos/hombres/mayores_1_año.svg';
import RE_M_18A from '../../assets/imgs/patient/requerimientos_energeticos/mujeres/mayores_1_año.svg';
import { startUploadingEnergyRequirements } from '../store/energyRequirements/thunks';
import { LoadingButton } from './components';

export const PediatricEnergyRequirementsCalculator = () => {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [kcalPerKg, setKcalPerKg] = useState('');
  const [totalKcal, setTotalKcal] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [currentImage, setCurrentImage] = useState(RE_H_1A); // Imagen por defecto
  const [calculationMessage, setCalculationMessage] = useState({ text: '', type: '' }); // Mensaje de cálculo
  const [attachmentMessage, setAttachmentMessage] = useState({ text: '', type: '' }); // Mensaje de adjunto
  const [isUnderOneYear, setIsUnderOneYear] = useState(true); // Nuevo estado
  const [idealWeight, setIdealWeight] = useState(null); // Nuevo estado
  const [activityLevel, setActivityLevel] = useState('moderate');
  const [isSending, setIsSending] = useState(false);
  const { uid } = useSelector((state) => state.auth);
  const { patients } = useSelector((state) => state.patients);
  const dispatch = useDispatch();

  const requirementsTable_H1 = {
    // Hombres menores de 1 año, rango en meses
    "0-1": { kg: 4.5, kcal: 113 },
    "1-2": { kg: 5.6, kcal: 104 },
    "2-3": { kg: 6.4, kcal: 95 },
    "3-4": { kg: 7, kcal: 82 },
    "4-5": { kg: 7.5, kcal: 81 },
    "5-6": { kg: 7.9, kcal: 81 },
    "6-7": { kg: 8.3, kcal: 79 },
    "7-8": { kg: 8.6, kcal: 79 },
    "8-9": { kg: 8.9, kcal: 79 },
    "9-10": { kg: 9.2, kcal: 80 },
    "10-11": { kg: 9.4, kcal: 80 },
    "11-12": { kg: 9.6, kcal: 81 },
  };
  const requirementsTable_M1  = {
    // Mujeres menores de 1 año, rango en meses
    "0-1": { kg: 4.2, kcal: 107 },
    "1-2": { kg: 5.1, kcal: 101 },
    "2-3": { kg: 5.8, kcal: 94 },
    "3-4": { kg: 6.4, kcal: 84 },
    "4-5": { kg: 6.9, kcal: 82 },
    "5-6": { kg: 7.3, kcal: 81 },
    "6-7": { kg: 7.6, kcal: 78 },
    "7-8": { kg: 7.9, kcal: 78 },
    "8-9": { kg: 8.2, kcal: 78 },
    "9-10": { kg: 8.5, kcal: 79 },
    "10-11": { kg: 8.7, kcal: 79 },
    "11-12": { kg: 8.9, kcal: 79 },
  };
  const requirementsTable_H18  = {
    // Hombres mayores de 1 año y menores de 18 años, rango en años
    "1-2": { light: '', moderate: 82, intense: '', },
    "2-3": { light: '', moderate: 84, intense: '', },
    "3-4": { light: 68, moderate: 80, intense: 92, },
    "4-5": { light: 65, moderate: 77, intense: 89, },
    "5-6": { light: 63, moderate: 74, intense: 85, },
    "6-7": { light: 62, moderate: 73, intense: 84, },
    "7-8": { light: 60, moderate: 71, intense: 82, },
    "8-9": { light: 59, moderate: 69, intense: 79, },
    "9-10": { light: 56, moderate: 67, intense: 77, },
    "10-11": { light: 55, moderate: 65, intense: 75, },
    "11-12": { light: 53, moderate: 62, intense: 71, },
    "12-13": { light: 51, moderate: 60, intense: 69, },
    "13-14": { light: 49, moderate: 58, intense: 67, },
    "14-15": { light: 46, moderate: 56, intense: 65, },
    "15-16": { light: 45, moderate: 53, intense: 61, },
    "16-17": { light: 44, moderate: 52, intense: 60, },
    "17-18": { light: 43, moderate: 50, intense: 58, },
  };
  const requirementsTable_M18  = {
    // Mujeres mayores de 1 año y menores de 18 años, rango en años
    "1-2": { light: '', moderate: 80, intense: '', },
    "2-3": { light: '', moderate: 81, intense: '', },
    "3-4": { light: 65, moderate: 77, intense: 89, },
    "4-5": { light: 63, moderate: 74, intense: 85, },
    "5-6": { light: 61, moderate: 72, intense: 83, },
    "6-7": { light: 59, moderate: 69, intense: 79, },
    "7-8": { light: 57, moderate: 67, intense: 77, },
    "8-9": { light: 54, moderate: 64, intense: 74, },
    "9-10": { light: 52, moderate: 61, intense: 70, },
    "10-11": { light: 49, moderate: 58, intense: 67, },
    "11-12": { light: 48, moderate: 56, intense: 64, },
    "12-13": { light: 44, moderate: 52, intense: 60, },
    "13-14": { light: 42, moderate: 49, intense: 56, },
    "14-15": { light: 40, moderate: 47, intense: 54, },
    "15-16": { light: 39, moderate: 46, intense: 53, },
    "16-17": { light: 37, moderate: 44, intense: 51, },
    "17-18": { light: 37, moderate: 44, intense: 51, },
  };

  const getTableAndImage = (age, gender, isUnderOneYear) => {
    if (isUnderOneYear) {
      // Menores de 1 año (edad en meses)
      return gender === "Masculino"
        ? { table: requirementsTable_H1, image: RE_H_1A }
        : { table: requirementsTable_M1, image: RE_M_1A };
    } else {
      // Mayores de 1 año (edad en años)
      return gender === "Masculino"
        ? { table: requirementsTable_H18, image: RE_H_18A }
        : { table: requirementsTable_M18, image: RE_M_18A };
    }
  };

  // const getLatestWeight = (weights) => {
  //   if (weights.length > 1) {
  //     const validWeights = weights.filter((entry) => entry.A);
  //     if (validWeights.length > 0) {
  //       const latestEntry = validWeights[validWeights.length - 1];
  //       return parseFloat(latestEntry.A);
  //     }
  //   }
  //   return null;
  // };
  
  const calculateRequeriments = () => {
    if (!selectedPatient) {
      setCalculationMessage({
        text: "Por favor, selecciona un paciente.",
        type: "error",
      });
      return;
    }
  
    const patient = patients.find((p) => p.id === selectedPatient);
    if (!patient) {
      setCalculationMessage({
        text: "Paciente no encontrado.",
        type: "error",
      });
      return;
    }
  
    const { unixBirthday, unixBiologicalBirthday, unixCorrectedBirthday, weight: patientWeight, gender } = patient;
    
    // Determinar la fecha de nacimiento más relevante
    const birthDate = fromUnixTime(
      unixBiologicalBirthday || unixCorrectedBirthday || unixBirthday
    );
    const now = new Date();
  
    // Calcular la edad exacta en meses y días
    const ageInMonths = differenceInMonths(now, birthDate);
    const remainingDays = differenceInDays(now, addMonths(birthDate, ageInMonths));
    const totalAgeInMonths = ageInMonths + remainingDays / 30; // Edad total en meses con precisión
  
    // Determinar si el paciente tiene menos de 1 año
    const underOneYear = totalAgeInMonths < 12;
    setIsUnderOneYear(underOneYear); // Actualizar el estado
  
    // Calcular la edad en años si no es menor de 1 año
    const ageInYears = Math.floor(totalAgeInMonths / 12) + 1;
    // const ageInYears = Math.ceil(totalAgeInMonths / 12) - 1;
  
    // Obtener la tabla y la imagen correspondientes
    const { table, image } = getTableAndImage(
      underOneYear ? totalAgeInMonths : ageInYears,
      gender,
      underOneYear
    );
  
    // Encontrar el rango adecuado en la tabla correspondiente
    const range = Object.keys(table).find((range) => {
      const [min, max] = range.split("-").map(Number);
      const ageToCompare = underOneYear ? totalAgeInMonths : ageInYears;
      return (
        ageToCompare >= min &&
        (max === undefined || ageToCompare <= max) // Incluir el límite superior del rango
      );
    });
  
    // Validación de rango no encontrado
    if (!range) {
      setCalculationMessage({
        text: "No se encontró un rango válido para la edad del paciente.",
        type: "error",
      });
      return;
    }
  
    const data = table[range];
    const kcal = underOneYear ? data.kcal : data[activityLevel];

    // Validación de rango no encontrado
    if (!kcal) {
      setCalculationMessage({
        text: "No hay datos disponibles para el nivel de actividad seleccionado.",
        type: "error",
      });
      return;
    }

    const idealWeight = underOneYear ? data.kg : null; // Peso ideal solo para menores de 1 año
  
    // Último peso del paciente
    const latestWeight = patientWeight
      ? patientWeight[patientWeight.length - 1]?.A
      : null;
  
    setCurrentImage(image); // Actualizar la imagen según la edad y género
  
    if (!latestWeight) {
      setAge(range);
      setWeight("Desconocido");
      setKcalPerKg(kcal);
      setCalculationMessage({
        text: "Peso del paciente no registrado.",
        type: "error",
      });
      return;
    }
  
    setAge(range);
    setWeight(latestWeight);
    setKcalPerKg(kcal);
    setIdealWeight(idealWeight);
    setTotalKcal((latestWeight * kcal).toFixed(0));
    setCalculationMessage({ text: "", type: "" });
  };

  const handleAttachTable = async () => {
    setIsSending(true);
    if (!selectedPatient) {
      setAttachmentMessage({ text: 'Ningún paciente seleccionado.', type: 'error' });
      setIsSending(false); // Rehabilita botones
      return;
    }

    const energyRequirement = { age, weight, kcalPerKg, totalKcal };
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
        <p className="calculator-item-title" style={{color: 'white'}}>Requerimientos energéticos para población infantil</p>
        <div className="calculator-container" style={{flexDirection: 'column'}}>
          <table style={{borderCollapse: 'collapse', width: '100%', fontWeight: '400', fontSize: '0.8rem'}}>
            <tbody>
              <tr>
                <th colSpan="2" style={{backgroundColor: '#cff6d4',border: '1px solid #30bb34',padding: '8px'}}>
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
                      <button className="btn-sm-green" style={{marginRight: '0'}} onClick={calculateRequeriments}>
                        Calcular requerimientos
                      </button>
                    </div>
                      {!isUnderOneYear && (
                        <div className="flex-row" style={{ margin: '1rem 10% 0 10%' }}>
                          <select
                            className="input-select"
                            value={activityLevel}
                            style={{marginRight: 'auto'}}
                            onChange={(e) => setActivityLevel(e.target.value)}
                          >
                            <option value="light">Nivel de actividad ligera</option>
                            <option value="moderate">Nivel de actividad moderada</option>
                            <option value="intense">Nivel de actividad intensa</option>
                          </select>
                          <button className='btn-sm-green' style={{marginRight: '0'}} onClick={calculateRequeriments}>Confirmar nivel de actividad</button>
                        </div>
                      )}
                    <ConfirmationMessage message={calculationMessage} />
                    <div className="modal-chart-container" style={{ width: '90%', maxWidth: '1000px', margin: '30px auto 20px' }}>
                      <img src={currentImage} className="modal-chart" alt="Requerimientos Energéticos" />
                    </div>
                  </div>
                </th>
              </tr>
              <tr>
                {/* Encabezado dinámico */}
                <th style={{ width: '50%', backgroundColor: '#09d170', color: 'white',borderColor: '#30bb34',padding: '8px' }}>Edad</th>
                {/* Mostrar la edad con su unidad en la celda */}
                <td style={{borderColor: '#30bb34',padding: '8px'}}>
                  {age && (
                    <>
                      {age} {isUnderOneYear
                        ? age === 1
                          ? "mes"
                          : "meses"
                        : age === 1
                          ? "año"
                          : "años"}
                    </>
                  )}
                </td>
              </tr>

              <tr>
                <th style={{ width: '50%', backgroundColor: '#09d170', color: 'white',border: '1px solid #30bb34',padding: '8px' }}>Peso (kg)</th>
                <td style={{borderColor: '#30bb34',padding: '8px'}}>
                  {weight ? weight + ' kg' : ''}
                  {isUnderOneYear && idealWeight && (
                    <span style={{ color: 'gray' }}> ({idealWeight} kg ideal)</span>
                  )}
                </td>
              </tr>
              <tr>
                <th style={{ width: '50%', backgroundColor: '#09d170', color: 'white',border: '1px solid #30bb34',padding: '8px' }}>Calorías por kilo al día</th>
                <td style={{borderColor: '#30bb34',padding: '8px'}}>{kcalPerKg ? kcalPerKg + ' Kcal/kg/día' : ''}</td>
              </tr>
              <tr>
                <th style={{ width: '50%', backgroundColor: '#09d170', color: 'white',border: '1px solid #30bb34',padding: '8px' }}>Requerimiento energético</th>
                <td style={{ color: 'green', fontWeight: 'bold',borderColor: '#30bb34',padding: '8px' }}>{totalKcal ? totalKcal + ' Kcal/día' : ''}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='patient-table-attachment-container'>
            <div className='flex-row gap-1'>
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
  );
};
