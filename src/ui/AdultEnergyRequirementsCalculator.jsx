// AdultEnergyRequirementsCalculator

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ConfirmationMessage } from '../common';
import { differenceInYears } from 'date-fns';
import { LoadingButton } from './components';
import { startUploadingAdultEnergyRequirements } from '../store/energyRequirements/thunks';
import { Minus, Plus } from "lucide-react";

import styles from './components/AdultEnergyRequirementsCalculatorStyles.module.css';

export const AdultEnergyRequirementsCalculator = () => {
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [activityLevel, setActivityLevel] = useState(1.0); // Valor por defecto
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [results, setResults] = useState({
        harrisBenedict: { geb: 0, get: 0, waterMin: 0, waterMax: 0 },
        mifflin: { geb: 0, get: 0, waterMin: 0, waterMax: 0 },
        fao: { geb: 0, get: 0, waterMin: 0, waterMax: 0 },
    });
    const [proteins, setProteins] = useState(0);
    const [lipids, setLipids] = useState(0);
    const [cho, setCho] = useState(0);
    const [calculationMessage, setCalculationMessage] = useState({ text: '', type: '' });
    const [attachmentMessage, setAttachmentMessage] = useState({ text: '', type: '' });
    const [isSending, setIsSending] = useState(false);
    const [selectedMethod, setSelectedMethod] = useState("harrisBenedict");
    const [getAdjustment, setGetAdjustment] = useState(0);

    const { uid } = useSelector((state) => state.auth);
    const { patients } = useSelector((state) => state.patients);

    const dispatch = useDispatch();

    const methodNames = {
        harrisBenedict: "Harris y Benedict",
        mifflin: "Mifflin - St. Jeor",
        fao: "FAO/OMS"
    };

    const adjustedGet = Number(results[selectedMethod].get) + getAdjustment;

    const customTotalKcal = adjustedGet;

    const kcalPerKg = (adjustedGet / weight).toFixed(2);

    const handlePatientSelection = (patientId) => {
        const patient = patients.find((p) => p.id === patientId);

        if (!patient) {
            setCalculationMessage({
                text: "Paciente no encontrado.",
                type: "error",
            });
            return;
        }

        const { weight: patientWeight, stature: patientHeight, unixBirthday } = patient;

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

        setAge(age);
        setWeight(latestWeight);
        setHeight(latestHeight);
        setSelectedPatient(patientId);
    };

    const calculateRequirements = () => {
        setCalculationMessage({
            text: "",
            type: "",
        });
    
        if (!selectedPatient) {
            setCalculationMessage({
                text: "Ningún paciente seleccionado.",
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
    
        const { gender } = patient;
    
        if (isNaN(weight) || weight <= 0) {
            setCalculationMessage({
                text: "Peso no válido.",
                type: "error",
            });
            return;
        }
    
        if (isNaN(height) || height <= 0) {
            setCalculationMessage({
                text: "Altura no válida.",
                type: "error",
            });
            return;
        }
    
        if (isNaN(activityLevel) || activityLevel < 1.0 || activityLevel > 2.0) {
            setCalculationMessage({
                text: "Nivel de actividad no válido. Debe estar entre 1.0 y 2.0.",
                type: "error",
            });
            return;
        }
    
        if (!validateMacros()) {
            setCalculationMessage({
                text: "La suma de proteínas, lípidos y CHO debe ser 100%.",
                type: "error",
            });
            return;
        }
    
        const harrisBenedict =
            gender === 'Masculino'
                ? 66.479 + (13.7516 * weight) + (5.0033 * height) - (6.755 * age)
                : 655.0955 + (9.5634 * weight) + (1.8449 * height) - (4.6756 * age);
    
        const mifflin =
            gender === 'Masculino'
                ? (10 * weight) + (6.25 * height) - (5 * age) + 5
                : (10 * weight) + (6.25 * height) - (5 * age) - 161;
    
        let faoWho = 0;
        if (gender === 'Masculino') {
            if (age > 18 && age < 30) {
                faoWho = (15.057 * weight) + 692.2;
            } else if (age >= 30 && age < 60) {
                faoWho = (11.472 * weight) + 873.1;
            } else if (age >= 60) {
                faoWho = (11.711 * weight) + 587.7;
            }
        } else {
            if (age > 18 && age < 30) {
                faoWho = (14.818 * weight) + 486.6;
            } else if (age >= 30 && age < 60) {
                faoWho = (8.126 * weight) + 845.6;
            } else if (age >= 60) {
                faoWho = (9.082 * weight) + 658.5;
            }
        }
    
        const actualActivityLevel = activityLevel; // Usa input o el valor por defecto
        const totalHarrisBenedict = harrisBenedict * actualActivityLevel;
        const totalMifflin = mifflin * actualActivityLevel;
        const totalFaoWho = faoWho * actualActivityLevel;
    
        const hydrationMinHarrisBenedict = (totalHarrisBenedict * 1).toFixed(0);
        const hydrationMaxHarrisBenedict = (totalHarrisBenedict * 1.2).toFixed(0);
        const hydrationMinMifflin = (totalMifflin * 1).toFixed(0);
        const hydrationMaxMifflin = (totalMifflin * 1.2).toFixed(0);
        const hydrationMinFaoWho = (totalFaoWho * 1).toFixed(0);
        const hydrationMaxFaoWho = (totalFaoWho * 1.2).toFixed(0);
    
        setResults({
            harrisBenedict: {
                geb: harrisBenedict,
                get: totalHarrisBenedict,
                waterMin: hydrationMinHarrisBenedict,
                waterMax: hydrationMaxHarrisBenedict,
            },
            mifflin: {
                geb: mifflin,
                get: totalMifflin,
                waterMin: hydrationMinMifflin,
                waterMax: hydrationMaxMifflin,
            },
            fao: {
                geb: faoWho,
                get: totalFaoWho,
                waterMin: hydrationMinFaoWho,
                waterMax: hydrationMaxFaoWho,
            },
        });
    };
    
    const handleAttachTable = async () => {
        setIsSending(true);
        setAttachmentMessage({ text: '', type: '' });
    
        if (!selectedPatient) {
            setAttachmentMessage({ text: 'Ningún paciente seleccionado.', type: 'error' });
            setIsSending(false); // Rehabilita botones
            return;
        }
    
        if (!results[selectedMethod]) {
            setAttachmentMessage({ text: 'Método de cálculo no válido.', type: 'error' });
            setIsSending(false); // Rehabilita botones
            return;
        }

        if (!validateMacros()) {
            setAttachmentMessage({ text: 'Los porcentajes de proteínas, lípidos y CHO deben sumar 100%.', type: 'error' });
            setIsSending(false); // Rehabilita botones
            return;
        }
    
        const patientID = selectedPatient;
        let energyRequirements = {};
    
        if (selectedMethod === 'harrisBenedict') {
            energyRequirements = {
                totalKcal: customTotalKcal,
                kcalPerKg: kcalPerKg,
                method: selectedMethod,
                hydrationMin: results.harrisBenedict.waterMin,
                hydrationMax: results.harrisBenedict.waterMax,
                proteins,
                lipids,
                cho
            };
        }
        if (selectedMethod === 'mifflin') {
            energyRequirements = {
                totalKcal: customTotalKcal,
                kcalPerKg: kcalPerKg,
                method: selectedMethod,
                hydrationMin: results.mifflin.waterMin,
                hydrationMax: results.mifflin.waterMax,
                proteins,
                lipids,
                cho
            };
        }
        if (selectedMethod === 'fao') {
            energyRequirements = {
                totalKcal: customTotalKcal,
                kcalPerKg: kcalPerKg,
                method: selectedMethod,
                hydrationMin: results.fao.waterMin,
                hydrationMax: results.fao.waterMax,
                proteins,
                lipids,
                cho
            };
        }
    
        try {
            console.log('energyRequirements: ', energyRequirements)
    
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

    const calculateMacroGrams = (percentage, type) => {
        if (!customTotalKcal || !percentage) return 0;
        const divisor = type === 'lipids' ? 9 : 4;
        return ((customTotalKcal * (parseFloat(percentage) / 100)) / divisor).toFixed(1);
    };

    const validateMacros = () => {
        const totalPercentage = Number(proteins) + Number(lipids) + Number(cho);
        // console.log('Total:', totalPercentage);
        return totalPercentage === 100;
    };

    const handleActivityLevelChange = (value) => {
        const numericValue = Number(value);
        if (numericValue >= 1.4 && numericValue <= 2.4) {
            setActivityLevel(numericValue);
        }
    };
    
    const handleMacroChange = (setter) => (value) => {
        const numericValue = Number(value);
        if (!isNaN(numericValue) && numericValue >= 0) {
            setter(numericValue);
        }
    };
    
    const handleGetAdjustmentChange = (value) => {
        const numericValue = Number(value);
        if (!isNaN(numericValue)) {
            setGetAdjustment(numericValue);
        }
    };

    return (
        <div className="w-full bg-white border-radius-20">
            <div className="w-full bg-064687 text-white text-center px-6 py-6 t-border-radius-20">
                <h1 className="text-2xl font-bold max-w-7xl mx-auto">
                    Calculadora de requerimientos energéticos
                </h1>
            </div>
            <div className="max-w-7xl mx-auto px-6">
                <div className={styles.patientSelectionContainer}>
                    <div className={styles.patientSelectionSpacer}>
                        <div className="bg-f9fafb rounded-xl shadow-sm p-6">
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-lg font-semibold text-blue-900 mb-4">
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
                                <div className="grid grid-cols-2 gap-4 mt-15">
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
                        <div className="bg-f9fafb rounded-xl shadow-sm p-6 mt-15">
                            <h2 className="text-lg font-semibold text-blue-900 mb-4">
                                Nivel de Actividad Física
                            </h2>
                            <div className="flex items-center space-x-4">
                                <input
                                    type="number"
                                    value={activityLevel}
                                    onChange={(e) => handleActivityLevelChange(e.target.value)}
                                    step="0.1"
                                    min="1.4"
                                    max="2.4"
                                    className="new-calculator-input"
                                    style={{ width: "120px" }}
                                />
                                <div className="text-sm text-gray-500">Rango: 1.4 - 2.4</div>
                            </div>
                        </div>
                        <div className="bg-f9fafb rounded-xl shadow-sm p-6 mt-15">
                            <h2 className="text-lg font-semibold text-blue-900 mb-4">
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
                                            onChange={(e) => handleMacroChange(setProteins)(e.target.value)}
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
                                            onChange={(e) => handleMacroChange(setLipids)(e.target.value)}
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
                                            onChange={(e) => handleMacroChange(setCho)(e.target.value)}
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
                        <div className="bg-f9fafb rounded-xl shadow-sm p-6 mt-15">
                            <h2 className="text-lg font-semibold text-blue-900 mb-4">
                                Método de Cálculo
                            </h2>
                            <div className="grid grid-cols-3 gap-4">
                                {Object.entries(results).map(([method, _]) => (
                                    <button
                                        key={method}
                                        onClick={() => setSelectedMethod(method)}
                                        className={` p-4 rounded-lg transition-all ${selectedMethod === method ? "border-2-blue-500 bg-blue-50 text-blue-700" : "bg-f9fafb border-2-gray-200 hover-border-blue-200 hover-bg-blue-50"}`}
                                    >
                                        <div className="font-medium">
                                            {methodNames[method]}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="bg-blue-50 rounded-xl shadow-sm p-6 mt-15">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg font-semibold text-blue-900">
                                Resultados del Cálculo
                            </h2>
                            <div className="text-sm text-blue-600 font-medium">
                                Seleccionado: {methodNames[selectedMethod]}
                            </div>
                        </div>
                            <div className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white rounded-lg p-4">
                                        <p className="text-sm text-blue-700">
                                            Gasto Energético Basal (GEB)
                                        </p>
                                        <p className="text-2xl font-semibold text-blue-900">
                                            {results[selectedMethod].geb.toFixed(2)}
                                            <span className="text-base font-normal text-blue-700 ml-1">
                                                kcal/día
                                            </span>
                                        </p>
                                    </div>
                                    <div className="bg-white rounded-lg p-4">
                                        <p className="text-sm text-blue-700">Requerimiento de Agua</p>
                                        <p className="text-2xl font-semibold text-blue-900">
                                            {results[selectedMethod].waterMin} - {results[selectedMethod].waterMax}
                                            <span className="text-base font-normal text-blue-700 ml-1">
                                                ml/día
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="pt-6">
                                    <div className="bg-white rounded-lg p-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <p className="text-sm font-medium text-blue-700">
                                                Gasto Energético Total (GET)
                                            </p>
                                            <div className="flex items-center space-x-2">
                                                <button
                                                    onClick={() => setGetAdjustment((prev) => prev - 100)}
                                                    className="flex justify-center align-items-center border-none p-1 rounded bg-blue-200 text-blue-700 hover:bg-blue-300"
                                                >
                                                    <Minus size={14} />
                                                </button>
                                                <input
                                                    type="number"
                                                    value={getAdjustment}
                                                    onChange={(e) => handleGetAdjustmentChange(e.target.value)}
                                                    className="new-calculator-input"
                                                    style={{ width: "100px" }}
                                                />
                                                <button
                                                    onClick={() => setGetAdjustment((prev) => prev + 100)}
                                                    className="flex justify-center align-items-center border-none p-1 rounded bg-blue-200 text-blue-700 hover:bg-blue-300"
                                                >
                                                    <Plus size={14} />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex items-baseline space-x-2">
                                            <p className="text-2xl font-semibold text-blue-900">
                                                {adjustedGet.toFixed(2)}
                                            </p>
                                            <p className="text-blue-700">kcal/día</p>
                                            {getAdjustment !== 0 && (
                                                <p className="text-sm text-blue-600">
                                                    (Ajustado desde{" "}
                                                    {results[selectedMethod].get.toFixed(2)})
                                                </p>
                                            )}
                                        </div>
                                        <div className="flex items-baseline space-x-2 mt-1">
                                            <p className="text-lg font-semibold text-blue-900">
                                                {isNaN(kcalPerKg) ? 0 : kcalPerKg}
                                            </p>
                                            <p className="text-sm font-medium text-blue-700">
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
                    className="btn-sm-blue-secondary"
                    >
                    Calcular requerimiento
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

    );
};



