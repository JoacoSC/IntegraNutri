import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ConfirmationMessage } from '../common'
import { LoadingButton } from './components'
import { differenceInYears, format } from 'date-fns'
import { startUploadingHeightEstimation } from '../store/estimations/thunks'
const patients = [
  {
    id: 1,
    name: 'Juan Pérez',
    age: 25,
  },
  {
    id: 2,
    name: 'María López',
    age: 42,
  },
  {
    id: 3,
    name: 'Carlos Rodríguez',
    age: 65,
  },
  {
    id: 4,
    name: 'Ana Martínez',
    age: 78,
  },
]
export const HeightEstimationCalculator = () => {
  
  const dispatch = useDispatch();
  const { patients } = useSelector((state) => state.patients);
  const { uid } = useSelector((state) => state.auth);

  const [selectedPatient, setSelectedPatient] = useState(null);
  const [kneeHeight, setKneeHeight] = useState('');
  const [patientAge, setPatientAge]     = useState(null);
  const [patientSex, setPatientSex]     = useState('');
  const [results, setResults]           = useState({
    youngAdult: { height: null, negDeviation: null, posDeviation: null },
    elderly:    { height: null, negDeviation: null, posDeviation: null },
    samplingDate: null, // <-- Añadido para guardar la fecha
  });
  const [calculationMessage, setCalculationMessage] = useState({ text: '', type: '' });
  const [attachmentMessage,  setAttachmentMessage]  = useState({ text: '', type: '' });
  const [isSending, setIsSending] = useState(false);

  const calculateHeight = () => {
    setCalculationMessage({ text: '', type: '' });

    // console.log(patientAge, patientSex, kneeHeight);

    const kh = parseFloat(kneeHeight);
    const age = patientAge;
    let formula, sd;

    if (patientSex === 'Masculino' && age >= 19 && age <= 59) {
      formula = kh * 1.88 + 71.85;
      sd = 7.94;
    } else if (patientSex === 'Masculino' && age >= 60 && age <= 80) {
      formula = kh * 2.08 + 59.01;
      sd = 7.84;
    } else if (patientSex === 'Femenino' && age >= 19 && age <= 59) {
      formula = kh * 1.86 - age * 0.05 + 70.25;
      sd = 7.20;
    } else if (patientSex === 'Femenino' && age >= 60 && age <= 80) {
      formula = kh * 1.91 - age * 0.17 + 75;
      sd = 8.82;
    } else {
      setCalculationMessage({
        text: 'Edad fuera de rango (19–80) o sexo inválido.',
        type: 'error'
      });
      setResults({
        youngAdult: { height: null, negDeviation: null, posDeviation: null },
        elderly:    { height: null, negDeviation: null, posDeviation: null },
      });
      return;
    }

    const h = Number(formula.toFixed(2));
    // Captura la fecha actual en formato "dd/MM/yyyy"
    const now = new Date();
    const formattedDate = format(now, 'dd/MM/yyyy');

    setResults({
      youngAdult: {
        height: h,
        negDeviation: Number((h - sd)),
        posDeviation: Number((h + sd)),
      },
      elderly: {
        height: h,
        negDeviation: Number((h - sd)),
        posDeviation: Number((h + sd)),
      },
      samplingDate: formattedDate, // <-- Guarda la fecha en el estado
    });
  };
  
  const handlePatientSelection = (patientId) => {
    const patient = patients.find((p) => p.id === patientId);
    if (!patient) {
        setCalculationMessage({
            text: "Paciente no encontrado.",
            type: "error",
        });
        return;
    }
    
    const { gender, unixBirthday } = patient;
    // Edad
    const currentDate = new Date();
    const patientBirthday = new Date(unixBirthday * 1000);
    const age = differenceInYears(currentDate, patientBirthday);
    setPatientAge(age);

    // Sexo biológico
    setPatientSex(gender); // “Masculino” o “Femenino”
    setSelectedPatient(patientId);
  };

  const handleKneeHeightChange = (e) => {
    const value = e.target.value
    setKneeHeight(value ? Number(value) : null)
  }

  const handleAttachTable = async () => {
    setIsSending(true);
    setAttachmentMessage({ text: '', type: '' });

    // if (!selectedPatient) {
    //   setAttachmentMessage({ text: 'Ningún paciente seleccionado.', type: 'error' });
    //   setIsSending(false);
    //   return;
    // }

    // Elegimos según rango de edad
    const key = (patientAge >= 19 && patientAge <= 59) ? 'youngAdult' : 'elderly';
    const { height, negDeviation, posDeviation } = results[key];

    if (height == null) {
      setAttachmentMessage({ text: 'No hay resultado para adjuntar.', type: 'error' });
      setIsSending(false);
      return;
    }

    // Incluye la fecha de muestreo en el payload
    const payload = {
      method: 'heightEstimation',
      estimate: height,
      deviationNeg: negDeviation,
      deviationPos: posDeviation,
      kneeHeight: parseFloat(kneeHeight),
      patientAge,
      patientSex,
      samplingDate: results.samplingDate, // <-- Añadido aquí
    };

    try {
      const msg = await dispatch(
        startUploadingHeightEstimation(uid, selectedPatient, payload)
      );
      setAttachmentMessage({
        text: msg,
        type: msg.toLowerCase().includes('error') ? 'error' : 'success'
      });
    } catch {
      setAttachmentMessage({ text: 'Error al adjuntar datos al paciente.', type: 'error' });
    } finally {
      setIsSending(false);
    }
  };

  // Cuando cambian kneeHeight, patientAge o patientSex, recalculamos
  // useEffect(() => {
  //   if (kneeHeight !== '' && patientAge != null && patientSex) {
  //     calculateHeight();
  //   }
  // }, [kneeHeight, patientAge, patientSex]);

  // useEffect(() => {
  //   if (selectedPatient) {
  //     const patient = patients.find((p) => p.id === selectedPatient)
  //     if (patient) {
  //       setPatientAge(patient.age)
  //     }
  //   } else {
  //     setPatientAge(null)
  //   }
  // }, [selectedPatient])
  
  // useEffect(() => {
  //   if (kneeHeight !== null) {
  //     calculateHeight()
  //   }
  // }, [kneeHeight, patientAge])

  return (
    <div className="w-full max-w-3xl">
      <div className="bg-gradient-to-r bg-064687 text-white text-center px-6 py-6 rounded-tr-2xl">
        <h1 className="text-2xl font-semibold">
          Estimación de altura por altura de rodilla
        </h1>
        {/* <p className="text-blue-100 mt-1 text-sm">
          Calcule la altura estimada basada en medidas de rodilla
        </p> */}
      </div>
      <div className="bg-white shadow-sm rounded-b-lg px-6">
        <div className="pt-6 pl-6 pr-6 pb-0">
          <div className="flex flex-col gap-4 items-center w-full">
            
            <div className="bg-f9fafb rounded-xl shadow-sm p-6 w-full">
                <div className="space-y-6">
                    <div>
                        <h2 className="text-lg font-semibold text-blue-900 mb-4">
                            Selección de Paciente
                        </h2>
                        <select className='input-select w-full' style={{ border: 'solid 1px #e4e4e4', maxWidth: '100%' }} onChange={(e) => handlePatientSelection(e.target.value)}>
                            <option value="">Seleccionar paciente</option>
                            {patients.map((patient) => (
                                <option key={patient.id} value={patient.id}>
                                    {patient.displayName}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className="bg-f9fafb rounded-xl shadow-sm p-6 w-full">
              <h2 className="text-lg font-semibold text-blue-900 mb-4">
                  Altura de rodilla
              </h2>
              <div className="flex items-center space-x-4">
                  <input
                      type="number"
                      id="kneeHeight"
                      value={kneeHeight || ''}
                      onChange={handleKneeHeightChange}
                      placeholder="Ingrese altura en centímetros"
                      className="new-calculator-input"
                  />
                  {/* <div className="text-sm text-gray-500">Rango: 1.4 - 2.4</div> */}
              </div>
          
            </div>
          </div>
          {patientAge !== null && (
            <div className="mt-4 bg-blue-50 p-4 rounded-lg border border-blue-100">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-800">
                    Edad del paciente:{' '}
                    <span className="font-semibold">{patientAge} años</span>
                  </p>
                  <p className="text-xs text-blue-600 mt-0.5">
                    {patientAge >= 19 && patientAge <= 59
                      ? 'Aplicando fórmula para adultos (19-59 años)'
                      : patientAge >= 60 && patientAge <= 80
                        ? 'Aplicando fórmula para adultos mayores (60-80 años)'
                        : 'Edad fuera de los rangos de cálculo (19-80 años)'}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="pt-0 pl-6 pr-6 pb-0">
          <div className="bg-blue-50 rounded-xl shadow-sm p-6 custom-mt-15">

          
            <h2 className="text-lg font-semibold text-blue-900 mb-4">
              Resultados de la estimación
            </h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-blue-700">
                      Adultos (19-59 años)
                  </p>
                  <div className="flex flex-col items-center mb-8">
                    <p className="text-sm text-gray-500 mb-1">Altura estimada</p>
                    <p className="text-3xl font-bold text-blue-800">
                      {results.youngAdult.height !== null
                        ? `${results.youngAdult.height} cm`
                        : '-'}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center mb-2">
                        <div className="h-6 w-6 rounded bg-blue-100 flex items-center justify-center mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-blue-600"
                          >
                            <path d="m5 12 7 7 7-7"></path>
                            <path d="M12 19V5"></path>
                          </svg>
                        </div>
                        <p className="text-sm text-gray-600">
                          Variación inferior
                        </p>
                      </div>
                      <p className="text-xl font-semibold text-blue-800 pl-8">
                        {results.youngAdult.negDeviation !== null
                          ? `${results.youngAdult.negDeviation} cm`
                          : '-'}
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center mb-2">
                        <div className="h-6 w-6 rounded bg-blue-100 flex items-center justify-center mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-blue-600"
                          >
                            <path d="m19 12-7-7-7 7"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                        </div>
                        <p className="text-sm text-gray-600">
                          Variación superior
                        </p>
                      </div>
                      <p className="text-xl font-semibold text-blue-800 pl-8">
                        {results.youngAdult.posDeviation !== null
                          ? `${results.youngAdult.posDeviation} cm`
                          : '-'}
                      </p>
                    </div>
                  </div>
                  {/* <p className="text-2xl font-semibold text-blue-900">
                      {results[selectedMethod].geb.toFixed(2)}
                      <span className="text-base font-normal text-blue-700 custom-ml-1">
                          kcal/día
                      </span>
                  </p> */}
              </div>
              {/* <div className="bg-white rounded-lg border">
                <div className="px-4 py-3 border-b bg-gradient-to-r from-blue-50 to-white">
                  <h3 className="font-medium text-blue-800">
                    Adultos (19-59 años)
                  </h3>
                </div>
                <div className="p-6">
                  <div className="flex flex-col items-center mb-8">
                    <p className="text-sm text-gray-500 mb-1">Altura estimada</p>
                    <p className="text-3xl font-bold text-blue-800">
                      {results.youngAdult.height !== null
                        ? `${results.youngAdult.height} cm`
                        : '-'}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center mb-2">
                        <div className="h-6 w-6 rounded bg-blue-100 flex items-center justify-center mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-blue-600"
                          >
                            <path d="m5 12 7 7 7-7"></path>
                            <path d="M12 19V5"></path>
                          </svg>
                        </div>
                        <p className="text-sm text-gray-600">
                          Variación inferior
                        </p>
                      </div>
                      <p className="text-xl font-semibold text-blue-800 pl-8">
                        {results.youngAdult.negDeviation !== null
                          ? `${results.youngAdult.negDeviation} cm`
                          : '-'}
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center mb-2">
                        <div className="h-6 w-6 rounded bg-blue-100 flex items-center justify-center mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-blue-600"
                          >
                            <path d="m19 12-7-7-7 7"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                        </div>
                        <p className="text-sm text-gray-600">
                          Variación superior
                        </p>
                      </div>
                      <p className="text-xl font-semibold text-blue-800 pl-8">
                        {results.youngAdult.posDeviation !== null
                          ? `${results.youngAdult.posDeviation} cm`
                          : '-'}
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-blue-700">
                    Adultos mayores (60-80 años)
                  </p>
                <div className="p-6">
                  <div className="flex flex-col items-center mb-8">
                    <p className="text-sm text-gray-500 mb-1">Altura estimada</p>
                    <p className="text-3xl font-bold text-blue-800">
                      {results.elderly.height !== null
                        ? `${results.elderly.height} cm`
                        : '-'}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center mb-2">
                        <div className="h-6 w-6 rounded bg-blue-100 flex items-center justify-center mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-blue-600"
                          >
                            <path d="m5 12 7 7 7-7"></path>
                            <path d="M12 19V5"></path>
                          </svg>
                        </div>
                        <p className="text-sm text-gray-600">
                          Variación inferior
                        </p>
                      </div>
                      <p className="text-xl font-semibold text-blue-800 pl-8">
                        {results.elderly.negDeviation !== null
                          ? `${results.elderly.negDeviation} cm`
                          : '-'}
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center mb-2">
                        <div className="h-6 w-6 rounded bg-blue-100 flex items-center justify-center mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-blue-600"
                          >
                            <path d="m19 12-7-7-7 7"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                        </div>
                        <p className="text-sm text-gray-600">
                          Variación superior
                        </p>
                      </div>
                      <p className="text-xl font-semibold text-blue-800 pl-8">
                        {results.elderly.posDeviation !== null
                          ? `${results.elderly.posDeviation} cm`
                          : '-'}
                      </p>
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
                onClick={calculateHeight}
                className="btn-sm-blue-secondary"
                >
                Calcular estimación
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
  )
}
