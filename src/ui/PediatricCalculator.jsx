import { useState } from 'react';
import { useSelector } from 'react-redux';
import { format, fromUnixTime, differenceInMonths } from 'date-fns';
import { ConfirmationMessage } from '../common';

export const PediatricCalculator = () => {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [kcalPerKg, setKcalPerKg] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState({ text: '', type: '' });
  const { patients } = useSelector((state) => state.patients);

  const ageOptions = {
    "0-1": { kg: 4.5, kcal: 113 },
    "1-2": { kg: 5.6, kcal: 104 },
    "2-3": { kg: 6.4, kcal: 95 },
    "3-4": { kg: 7.1, kcal: 92 },
    "4-5": { kg: 7.5, kcal: 81 },
    "5-6": { kg: 7.8, kcal: 80 },
    "6-7": { kg: 8.1, kcal: 79 },
    "7-8": { kg: 8.3, kcal: 79 },
    "8-9": { kg: 8.5, kcal: 79 },
    "9-10": { kg: 8.8, kcal: 79 },
    "10-11": { kg: 9.4, kcal: 79 },
    "11-12": { kg: 9.6, kcal: 79 },
  };

  const getLatestWeight = (weights) => {
    if (weights.length > 1) {
      const validWeights = weights.filter((entry) => entry.A);
      if (validWeights.length > 0) {
        const latestEntry = validWeights[validWeights.length - 1];
        return parseFloat(latestEntry.A);
      }
    }
    return null;
  };

  const calculateRequeriments = () => {
    if (!selectedPatient) {
      setConfirmationMessage({ text: 'Por favor, selecciona un paciente.', type: 'error' });
      return;
    }

    const patient = patients.find((p) => p.id === selectedPatient);
    if (!patient) {
      setConfirmationMessage({ text: 'Paciente no encontrado.', type: 'error' });
      return;
    }

    const { unixBirthday, weight: patientWeight } = patient;
    const ageInMonths = differenceInMonths(new Date(), fromUnixTime(unixBirthday));
    const range = Object.keys(ageOptions).find((range) => {
      const [min, max] = range.split("-").map(Number);
      return ageInMonths >= min && ageInMonths < max;
    });

    if (!range) {
      setConfirmationMessage({ text: 'Rango de edad no encontrado.', type: 'error' });
      return;
    }

    const { kcal } = ageOptions[range];
    const latestWeight = getLatestWeight(patientWeight);

    if (!latestWeight) {
      setAge(range);
      setWeight("Desconocido");
      setKcalPerKg(kcal);
      setConfirmationMessage({ text: 'Peso del paciente no registrado.', type: 'error' });
      return;
    }

    const totalKcal = (latestWeight * kcal).toFixed(2);
    setAge(range);
    setWeight(latestWeight);
    setKcalPerKg(kcal);

    setConfirmationMessage({
      text: `Requerimientos energéticos: ${totalKcal} kcal/día`,
      type: 'success',
    });
  };

  return (
    <div className="calculator-main-container">
      <div className="calculator-wrapper">
        <p className="calculator-item-title">Requerimientos energéticos para población infantil</p>
        <div className="calculator-container calculator-container-border-radius">
          <table className="calculator-table">
            <tbody>
              <tr>
                <th colSpan="2">
                  <div style={{ margin: "15px" }}>
                    <div className="flex-row gap-1">
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
                      <button className="btn-sm" onClick={calculateRequeriments}>
                        Calcular requerimientos
                      </button>
                    </div>
                    <ConfirmationMessage message={confirmationMessage} />
                  </div>
                </th>
              </tr>
              <tr>
                <th>Edad (meses)</th>
                <td>{age}</td>
              </tr>
              <tr>
                <th>Peso (kg)</th>
                <td>{weight}</td>
              </tr>
              <tr>
                <th>Kcal/kg</th>
                <td>{kcalPerKg}</td>
              </tr>
              <tr>
                <th>Kcal/día</th>
                <td>{weight && kcalPerKg ? (weight * kcalPerKg).toFixed(2) : ''}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
