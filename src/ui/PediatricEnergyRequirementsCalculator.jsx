import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format, fromUnixTime, differenceInMonths, differenceInDays, addMonths, differenceInYears } from 'date-fns';
import { ConfirmationMessage } from '../common';

import RE_H_1A from '../../assets/imgs/patient/requerimientos_energeticos/hombres/menores_1_año.svg';
import RE_M_1A from '../../assets/imgs/patient/requerimientos_energeticos/mujeres/menores_1_año.svg';
import RE_H_18A from '../../assets/imgs/patient/requerimientos_energeticos/hombres/mayores_1_año.svg';
import RE_M_18A from '../../assets/imgs/patient/requerimientos_energeticos/mujeres/mayores_1_año.svg';
import { startUploadingEnergyRequirements } from '../store/energyRequirements/thunks';
import { LoadingButton, ModalWrapper } from './components';
import styles from './components/AdultEnergyRequirementsCalculatorStyles.module.css';
import { Minus, Plus } from "lucide-react";

export const PediatricEnergyRequirementsCalculator = () => {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [kcalPerKg, setKcalPerKg] = useState(0);
  const [totalKcal, setTotalKcal] = useState(0); // Base total kcal/day
  const [proteins, setProteins] = useState(0);
  const [lipids, setLipids] = useState(0);
  const [cho, setCho] = useState(0);
  const [getAdjustment, setGetAdjustment] = useState(0);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [currentImage, setCurrentImage] = useState(RE_H_1A); // Imagen por defecto
  const [calculationMessage, setCalculationMessage] = useState({ text: '', type: '' }); // Mensaje de cálculo
  const [attachmentMessage, setAttachmentMessage] = useState({ text: '', type: '' }); // Mensaje de adjunto
  const [isUnderOneYear, setIsUnderOneYear] = useState(true); // Nuevo estado
  const [idealWeight, setIdealWeight] = useState(null); // Nuevo estado
  const [activityLevel, setActivityLevel] = useState('moderate');
  const [isSending, setIsSending] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [adjustedGet, setAdjustedGet] = useState(0); // Adjusted total kcal/day
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

  const handlePatientSelection = (patientId) => {
      setCalculationMessage({
        text: "",
        type: "",
      });
      
      const patient = patients.find((p) => p.id === patientId);

      if (!patient) {
          setCalculationMessage({
              text: "Paciente no encontrado.",
              type: "error",
          });
          return;
      }

      const { weight: patientWeight, stature: patientHeight, unixBirthday, unixBiologicalBirthday, unixCorrectedBirthday } = patient;

      const currentDate = new Date();
      const patientBirthday = new Date(
        (unixBiologicalBirthday || unixCorrectedBirthday || unixBirthday) * 1000
    );
      const age = differenceInYears(currentDate, patientBirthday);

      if (age > 18) {
          setCalculationMessage({
              text: "El paciente debe ser menor de 18 años.",
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

      setAge(age);
      setWeight(latestWeight);
      setHeight(latestHeight);
      setSelectedPatient(patientId);
    //   console.log("age", age);
    //   console.log("weight", latestWeight);
  };

  const handleImageClick = () => {
    setOpenModal(true);
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
  
  const calculateRequirements = () => {
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
  
    const calculatedTotalKcal = latestWeight * kcal;
    setWeight(latestWeight);
    setKcalPerKg(kcal);
    setTotalKcal(calculatedTotalKcal);
    setAdjustedGet(calculatedTotalKcal + getAdjustment);
    setCalculationMessage({ text: "", type: "" });
  };

  useEffect(() => {
    setAdjustedGet(totalKcal + getAdjustment);
  }, [totalKcal, getAdjustment]);

  const handleAttachTable = async () => {
    setIsSending(true);
    if (!selectedPatient) {
      setAttachmentMessage({ text: 'Ningún paciente seleccionado.', type: 'error' });
      setIsSending(false); // Rehabilita botones
      return;
    }
  
    if (!validateMacros()) {
      setAttachmentMessage({ text: 'La suma de macromoléculas debe ser igual a 100%.', type: 'error' });
      setIsSending(false); // Rehabilita botones
      return;
    }
  
    const energyRequirement = {
      kcalPerKg: isNaN(kcalPerKg) ? 0 : kcalPerKg, // Validación de NaN
      totalKcal: adjustedGet,
      proteins,
      lipids,
      cho,
    };
    const patientID = selectedPatient;
  
    try {
      const message = await dispatch(
        startUploadingEnergyRequirements(uid, patientID, energyRequirement)
      );
      const messageType = message === 'Ocurrió un error.' ? 'error' : 'success';
      setAttachmentMessage({ text: message, type: messageType });
    } catch (error) {
        console.error("Error al adjuntar datos al paciente:", error);
        setAttachmentMessage({ text: 'Error al adjuntar datos al paciente.', type: 'error' });
    } finally {
      setIsSending(false); // Rehabilita botones
  }
  };

  const calculateMacroGrams = (percentage, type) => {
    if (!adjustedGet || isNaN(adjustedGet) || !percentage || percentage < 0) return 0; // Validación mejorada
    const divisor = type === 'lipids' ? 9 : 4;
    return ((adjustedGet * (parseFloat(percentage) / 100)) / divisor).toFixed(1);
  };

  const validateMacros = () => {
      const totalPercentage = Number(proteins) + Number(lipids) + Number(cho);
      // console.log('Total:', totalPercentage);
      return Math.abs(totalPercentage - 100) < 0.01; // Added tolerance
  };

//   console.log("adjustedGet", adjustedGet);

  return (
    <div className="w-full bg-white" style={{borderRadius: '0 18px 18px 0'}}>
            <div className="w-full bg-00bf62 text-white text-center px-6 py-6" style={{borderRadius: '0 18px 0 0'}}>
                <h1 className="text-2xl custom-font-bold max-w-7xl mx-auto">
                    Calculadora de requerimientos energéticos
                </h1>
            </div>
            <div className="max-w-7xl mx-auto px-6">
                <div className={styles.patientSelectionContainer}>
                    <div className={styles.patientSelectionSpacer}>
                        <div className="bg-f9fafb rounded-xl shadow-sm p-6">
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-lg font-semibold text-green-900 mb-4">
                                        Selección de Paciente
                                    </h2>
                                    <select className='input-select' style={{ border: 'solid 1px #e4e4e4', maxWidth: '100%' }} onChange={(e) => handlePatientSelection(e.target.value)}>
                                        <option value="">Seleccionar paciente</option>
                                        {patients.map((patient) => (
                                            <option key={patient.id} value={patient.id}>
                                                {patient.displayName}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="grid grid-cols-2 gap-4 custom-mt-15">
                                    <div className="bg-white rounded-lg p-3">
                                        <p className="new-calculator-label">Peso</p>
                                        <p className="text-lg font-medium">{weight !== '' ? `${weight} kg` : ''}</p>
                                    </div>
                                    <div className="bg-white rounded-lg p-3">
                                        <p className="new-calculator-label">Altura</p>
                                        <p className="text-lg font-medium">{height !== '' ? `${height} cm` : ''}</p>
                                    </div>
                                    <div className="bg-white rounded-lg p-3">
                                        <p className="new-calculator-label">Edad</p>
                                        <p className="text-lg font-medium">{age !== '' ? `${age} años` : ''}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-f9fafb rounded-xl shadow-sm p-6 custom-mt-15">
                            <h2 className="text-lg font-semibold text-green-900 mb-4">
                                Nivel de Actividad Física
                            </h2>
                            <div className="flex items-center space-x-4">
                                <select
                                    value={activityLevel}
                                    onChange={(e) => setActivityLevel(e.target.value)}
                                    className="input-select"
                                    style={{ border: 'solid 1px #e4e4e4', maxWidth: '100%' }}
                                >
                                    <option value="light">Actividad Liviana</option>
                                    <option value="moderate">Actividad Moderada</option>
                                    <option value="intense">Actividad Severa</option>
                                </select>
                            </div>
                        </div>
                        <div className="bg-f9fafb rounded-xl shadow-sm p-6 custom-mt-15">
                            <h2 className="text-lg font-semibold text-green-900 mb-4">
                                Distribución de Macronutrientes
                            </h2>
                            <div className="space-y-4">
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
                    <div className="col-span-7 space-y-6">
                      <div className="bg-f9fafb rounded-xl shadow-sm p-6 custom-mt-15">
                          <h2 className="text-lg font-semibold text-green-900 mb-4">
                              Requerimientos energéticos sugeridos
                          </h2>
                          <img src={currentImage} style={{ cursor: 'zoom-in' }} className="modal-chart" alt="Requerimientos Energéticos" onClick={handleImageClick} />
                      </div>
                      <div className="bg-green-50 rounded-xl shadow-sm p-6 custom-mt-15">
                      <div className="flex items-center justify-between mb-6">
                          <h2 className="text-lg font-semibold text-green-900">
                              Resultados del Cálculo
                          </h2>
                      </div>
                          <div className="space-y-6">
                              <div className="">
                                  <div className="bg-white rounded-lg p-4">
                                      <div className="flex items-center justify-between custom-mb-2">
                                          <p className="text-sm font-medium text-green-700">
                                              Gasto Energético Total (GET)
                                          </p>
                                          <div className="flex items-center space-x-2">
                                              <button
                                                  onClick={() => setGetAdjustment((prev) => prev - 100)}
                                                  className="flex justify-center custom-align-items-center custom-border-none p-1 rounded bg-green-200 text-green-700"
                                              >
                                                  <Minus size={14} />
                                              </button>
                                              <input
                                                  type="number"
                                                  value={getAdjustment}
                                                  onChange={(e) =>
                                                      setGetAdjustment(Number(e.target.value))
                                                  }
                                                  className="new-calculator-input"
                                                  style={{ width: "100px" }}
                                              />
                                              <button
                                                  onClick={() => setGetAdjustment((prev) => prev + 100)}
                                                  className="flex justify-center custom-align-items-center custom-border-none p-1 rounded bg-green-200 text-green-700"
                                              >
                                                  <Plus size={14} />
                                              </button>
                                          </div>
                                      </div>
                                      <div className="flex items-baseline space-x-2">
                                          <p className="text-2xl font-semibold text-green-900">
                                              {adjustedGet}
                                          </p>
                                          <p className="text-green-700">kcal/día</p>
                                          {getAdjustment !== 0 && (
                                              <p className="text-sm text-green-600">
                                                  (Ajustado desde{" "}
                                                  {totalKcal})
                                              </p>
                                          )}
                                      </div>
                                      <div className="flex items-baseline space-x-2 custom-mt-1">
                                          <p className="text-lg font-semibold text-green-900">
                                              {kcalPerKg==='NaN' ? 0 : kcalPerKg}
                                          </p>
                                          <p className="text-sm font-medium text-green-700">
                                              kcal/kg/día
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
            <ConfirmationMessage message={attachmentMessage} />
            <ConfirmationMessage message={calculationMessage} />
                <div
                    className="new-calculator-footer-container px-6 py-6"
                >
                    <div style={{ width: '100%'}}>
                    </div>
                <div className="new-calculator-footer-buttons-container">
                    <button
                    onClick={calculateRequirements}
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
            <ModalWrapper
            isOpen={openModal}
            onClose={() => setOpenModal(false)}
            title="Requerimientos energéticos"
        >
            <img src={currentImage} className="modal-chart" alt="Requerimientos Energéticos" />
        </ModalWrapper>
        </div>
  );
};
