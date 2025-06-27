import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ConfirmationMessage } from '../common';
import { LoadingButton } from './components';
import { differenceInYears, format } from 'date-fns';
import { startUploadingHeightEstimation, startUploadingWeightEstimation } from '../store/estimations/thunks';

export const WeightEstimationCalculator = () => {
  const dispatch = useDispatch();
  const { patients } = useSelector((state) => state.patients);
  const { uid } = useSelector((state) => state.auth);

  const [selectedPatient, setSelectedPatient] = useState(null);
  const [brachial, setBrachial] = useState('');
  const [calf, setCalf] = useState('');
  const [kneeHeight, setKneeHeight] = useState('');
  const [subscapular, setSubscapular] = useState('');
  const [patientSex, setPatientSex] = useState('');
  const [patientAge, setPatientAge] = useState(null);

  const [results, setResults] = useState({
    weight: null,
    negDeviation: null,
    posDeviation: null,
    samplingDate: null,
  });

  const [calculationMessage, setCalculationMessage] = useState({ text: '', type: '' });
  const [attachmentMessage, setAttachmentMessage] = useState({ text: '', type: '' });
  const [isSending, setIsSending] = useState(false);

  const calculateWeight = () => {
    setCalculationMessage({ text: '', type: '' });
    const B = parseFloat(brachial);
    const C = parseFloat(calf);
    const A = parseFloat(kneeHeight);
    const S = parseFloat(subscapular);

    if (isNaN(B) || isNaN(C) || isNaN(A) || isNaN(S)) {
      setCalculationMessage({ text: 'Todos los campos deben estar completos.', type: 'error' });
      return;
    }

    let weight, sd;

    if (patientSex === 'Masculino') {
      weight = (1.73 * B) + (0.98 * C) + (0.37 * S) + (1.16 * A) - 86.69;
      sd = 8.96;
    } else if (patientSex === 'Femenino') {
      weight = (0.98 * B) + (1.27 * C) + (0.4 * S) + (0.87 * A) - 62.35;
      sd = 7.6;
    } else {
      setCalculationMessage({ text: 'Paciente no seleccionado o error con el sexo del paciente.', type: 'error' });
      return;
    }

    const now = new Date();
    const formattedDate = format(now, 'dd/MM/yyyy');

    setResults({
      weight: Number(weight.toFixed(2)),
      negDeviation: Number((weight - sd).toFixed(2)),
      posDeviation: Number((weight + sd).toFixed(2)),
      samplingDate: formattedDate,
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

  const handleAttachTable = async () => {
    setIsSending(true);
    setAttachmentMessage({ text: '', type: '' });

    if (results.weight == null) {
      setAttachmentMessage({ text: 'No hay resultado para adjuntar.', type: 'error' });
      setIsSending(false);
      return;
    }

    const payload = {
      method: 'weightEstimation',
      estimate: results.weight,
      deviationNeg: results.negDeviation,
      deviationPos: results.posDeviation,
      samplingDate: results.samplingDate,
      patientAge,
      patientSex,
      brachial: parseFloat(brachial),
      calf: parseFloat(calf),
      kneeHeight: parseFloat(kneeHeight),
      subscapular: parseFloat(subscapular)
    };

    try {
      const msg = await dispatch(startUploadingWeightEstimation(uid, selectedPatient, payload));
      setAttachmentMessage({
        text: msg,
        type: msg.toLowerCase().includes('error') ? 'error' : 'success',
      });
    } catch {
      setAttachmentMessage({ text: 'Error al adjuntar datos al paciente.', type: 'error' });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="w-full max-w-3xl">
      <div className="bg-gradient-to-r bg-064687 text-white text-center px-6 py-6 rounded-tr-2xl">
        <h1 className="text-2xl font-semibold">Estimación de peso por Chumlea</h1>
      </div>
      <div className="bg-white shadow-sm rounded-b-lg px-6">
        <div className="pt-6">
        <div className="flex flex-col gap-4 items-center w-full">
          <div className="bg-f9fafb rounded-xl shadow-sm p-6 w-full">
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

          <div className="bg-f9fafb rounded-xl shadow-sm p-6 w-full flex lg:flex-col">
            {/* Flexbox 2x2 layout: 2 inputs por fila */}
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 p-2">
                <div className="p-4">
                  <label className="block text-blue-900 text-sm font-semibold mb-2">Altura de rodilla (cm)</label>
                  <input type="number" value={kneeHeight} onChange={(e) => setKneeHeight(e.target.value)} className="new-calculator-input w-full" />
                </div>
              </div>
              <div className="w-full md:w-1/2 p-2">
                <div className="p-4">
                  <label className="block text-blue-900 text-sm font-semibold mb-2">Perímetro braquial (cm)</label>
                  <input type="number" value={brachial} onChange={(e) => setBrachial(e.target.value)} className="new-calculator-input w-full" />
                </div>
              </div>
              </div>
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 p-2">
                <div className="p-4">
                  <label className="block text-blue-900 text-sm font-semibold mb-2">Circunferencia pantorrilla (cm)</label>
                  <input type="number" value={calf} onChange={(e) => setCalf(e.target.value)} className="new-calculator-input w-full" />
                </div>
              </div>
              <div className="w-full md:w-1/2 p-2">
                <div className="p-4">
                  <label className="block text-blue-900 text-sm font-semibold mb-2">Pliegue subescapular (mm)</label>
                  <input type="number" value={subscapular} onChange={(e) => setSubscapular(e.target.value)} className="new-calculator-input w-full" />
                </div>
              </div>
            </div>
          </div>

        </div>
        </div>

        <div className="pt-6">
          <div className="bg-blue-50 rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-blue-900 mb-4">Resultados de la estimación</h2>
              <div className="space-y-8">
                <div className="flex flex-col items-center mb-8">
                  <p className="text-sm text-gray-500 mb-1">Peso estimado</p>
                  <p className="text-3xl font-bold text-blue-800">
                    {results.weight !== null
                      ? `${results.weight.toFixed(1)} kg`
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
                      {results.negDeviation !== null
                        ? `${results.negDeviation.toFixed(1)} kg`
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
                      {results.posDeviation !== null
                        ? `${results.posDeviation.toFixed(1)} kg`
                        : '-'}
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </div>

        <ConfirmationMessage message={attachmentMessage} />
        <ConfirmationMessage message={calculationMessage} />

        <div className="new-calculator-footer-container px-6 py-6">
          <div className="new-calculator-footer-buttons-container">
            <button onClick={calculateWeight} className="btn-sm-blue-secondary">Calcular estimación</button>
            <LoadingButton className='btn-sm-blue' text='Adjuntar al paciente' onClick={handleAttachTable} disabled={isSending} />
          </div>
        </div>
      </div>
    </div>
  );
};
