import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from "react-transition-group";
import { useForm } from '../hooks';
import './components';

// Third-party library imports
import { Chart as ChartJS } from "chart.js/auto";
import { Scatter } from "react-chartjs-2";

import HeartIconWhite from '../../assets/imgs/patient/heart_icon_white.svg'
import { startUpdatingCurrentPatientAnthropometry } from '../store/currentPatient';
import { ModalWrapper } from './components';
// import { startUpdatingCurrentPatientPresionArterial } from '../store/currentPatient'; // Uncomment if necessary

export const ModalAnthropometry = ({ patientObject, commonProps }) => {

    const { uid, patientID, stature, ageText, weight, imc, ageForCalcs } = patientObject;
    const { anthropometryHistory } = commonProps;
    const { biologicalSex } = useSelector(state => state.currentPatient);
    // const biologicalSex = "Femenino";

    const [openModal, setOpenModal] = useState(false);
    const [CircunferenciaCintura, setCircunferenciaCintura] = useState('');
    const [CircunferenciaCadera, setCircunferenciaCadera] = useState('');
    const [SomatocartaX, setSomatocartaX] = useState('');
    const [SomatocartaY, setSomatocartaY] = useState('');
    const [SomatocartaIP, setSomatocartaIP] = useState('');
    const [Endomorfia, setEndomorfia] = useState('');
    const [Mesomorfia, setMesomorfia] = useState('');
    const [Ectomorfia, setEctomorfia] = useState('');
    const [BrazoRelajadoCorregido, setBrazoRelajadoCorregido] = useState('');
    const [MusloCorregido, setMusloCorregido] = useState('');
    const [PiernaCorregido, setPiernaCorregido] = useState('');
    const [MGCarterKG, setMGCarterKG] = useState('');
    const [MGCarterPercent, setMGCarterPercent] = useState('');
    const [MGFaulknerKG, setMGFaulknerKG] = useState('');
    const [MGFaulknerPercent, setMGFaulknerPercent] = useState('');
    const [MMLeeKG, setMMLeeKG] = useState('');
    const [MMLeePercent, setMMLeePercent] = useState('');
    const [MRKG, setMRKG] = useState('');
    const [MRPercent, setMRPercent] = useState('');
    const [MRV2KG, setMRV2KG] = useState('');
    const [MRV2Percent, setMRV2Percent] = useState('');
    const [MOKG, setMOKG] = useState('');
    const [MOPercent, setMOPercent] = useState('');
    const [CCMINSALResult, setCCMINSALResult] = useState('Sin clasificación');
    const [CCMINSALRating, setCCMINSALRating] = useState('Sin clasificación');
    const [CCOMSRating, setCCOMSRating] = useState('Sin clasificación');
    const [ICCResult, setICCResult] = useState('Sin resultado');
    const [ICCRating, setICCRating] = useState('Sin clasificación');
    const [ICAResult, setICAResult] = useState('Sin resultado');
    const [ICARating, setICARating] = useState('Sin clasificación');
    const [options, setOptions] = useState({
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                display: false, // Oculta la leyenda
            },
            title: {
                display: true,
                text: 'Somatocarta',
            },
        },
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                min: -9,
                max: 9,
                ticks: {
                  stepSize: 1,
                },
            },
            y: {
                type: 'linear',
                position: 'left',
                min: -10,
                max: 16,
                ticks: {
                  stepSize: 2,
                },
            },
        },
    });
    const [userData, setUserData] = useState({
        datasets: [{
            label: 'Somatocarta:    ',
            data: [],
            borderColor: '#FF0000',
            backgroundColor: '#FF0000',
        }]
    });

    const statureLength = stature?.length;
    const Talla = statureLength > 0 ? stature[statureLength - 1].A : '';

    const weightLength = weight?.length;
    const Peso = weightLength > 0 ? weight[weightLength - 1].A : '';

    const imcValue = imc.length > 0 && imc[imc.length - 1]?.A !== undefined
    ? imc[imc.length - 1].A.toFixed(2)
    : '';

    const {
        InputEtnia,
        InputPliegueTricipital,
        InputPliegueSubescapular,
        InputPliegueCrestailiaca,
        InputPliegueBicipital,
        InputPliegueSupraespinal,
        InputPliegueAbdominal,
        InputPliegueMuslo,
        InputPlieguePierna,
        InputPerimetroBrazoRelajado,
        InputPerimetroBrazoContraido,
        InputPerimetroPierna,
        InputPerimetroMuslo,
        InputDiametroMuneca,
        InputDiametroHumero,
        InputDiametroFemur,
        InputPerimetroCintura,
        InputPerimetroCadera,
        onInputChange,
        formState
    } = useForm();

    const handleCommaToPointChange = (event) => {
        const { name, value } = event.target;
    
        // Reemplazar comas con puntos
        const formattedValue = value.replace(',', '.');
    
        // Llamar a la función original onInputChange con el valor formateado
        onInputChange({
            target: {
                name,
                value: formattedValue,
            }
        });
    };    

    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();
    
        // Obtener la fecha actual
        const date = new Date();
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const formattedDate = `${day}/${month}/${year}`;
    
        // Convertir las comas en puntos en todos los campos del formState
        const convertedFormState = Object.fromEntries(
            Object.entries(formState).map(([key, value]) => [
                key,
                typeof value === 'string' ? value.replace(',', '.') : value,
            ])
        );
    
        // Crear la nueva evaluación
        const newEvaluation = {
            ...convertedFormState,
            CircunferenciaCintura,
            CircunferenciaCadera,
            SomatocartaX,
            SomatocartaY,
            SomatocartaIP,
            Endomorfia,
            Mesomorfia,
            Ectomorfia,
            BrazoRelajadoCorregido,
            MusloCorregido,
            PiernaCorregido,
            MGCarterKG,
            MGCarterPercent,
            MGFaulknerKG,
            MGFaulknerPercent,
            MMLeeKG,
            MMLeePercent,
            MRKG,
            MRPercent,
            MRV2KG,
            MRV2Percent,
            MOKG,
            MOPercent,
            CCMINSALResult,
            CCMINSALRating,
            CCOMSRating,
            ICCResult,
            ICCRating,
            ICAResult,
            ICARating,
            Fecha: formattedDate,
            Edad: ageText,
        };
    
        // Asegurar que anthropometryHistory sea un array
        const updatedAnthropometryHistory = Array.isArray(anthropometryHistory) 
            ? [...anthropometryHistory, newEvaluation]
            : [newEvaluation];
    
        // Hacer dispatch del array completo con todas las evaluaciones
        dispatch(startUpdatingCurrentPatientAnthropometry(uid, patientID, updatedAnthropometryHistory));

        setOpenModal(false);
    };

    const onModalClose = () => {
        setOpenModal(false);
    };

    const classifyValue = (value, thresholds) => {
        if (isNaN(value) || value === '') return 'Sin clasificación';
        return value >= thresholds.high ? thresholds.highLabel : thresholds.lowLabel;
    };

    const updateChart = () => {
        setUserData({
            datasets: [{
                label: 'Somatocarta: ',
                data: [{ x: SomatocartaX, y: SomatocartaY }],
                borderColor: '#FF0000',
                backgroundColor: '#FF0000',
            }]
        });
    }

    useEffect(() => {
        setCircunferenciaCintura(InputPerimetroCintura);
    }, [InputPerimetroCintura]);
    
    useEffect(() => {
        setCircunferenciaCadera(InputPerimetroCadera);
    }, [InputPerimetroCadera]);

    useEffect(() => {
        const thresholds = biologicalSex === 'Masculino' ? { high: 90, highLabel: 'Obesidad abdominal', lowLabel: 'Sin riesgo de obesidad abdominal' } :
            { high: 80, highLabel: 'Obesidad abdominal', lowLabel: 'Sin riesgo de obesidad abdominal' };
        setCCMINSALResult(InputPerimetroCintura);
        setCCMINSALRating(classifyValue(InputPerimetroCintura, thresholds));
    }, [InputPerimetroCintura, biologicalSex]);

    // useEffect(() => {
    //     const thresholds = biologicalSex === 'Masculino' ? { high: 90, highLabel: 'Riesgo cardiovascular', lowLabel: 'Sin riesgo cardiovascular' } :
    //         { high: 85, highLabel: 'Riesgo cardiovascular', lowLabel: 'Sin riesgo cardiovascular' };
    //     setCCOMSRating(classifyValue(InputPerimetroCintura, thresholds));
    // }, [InputPerimetroCintura, biologicalSex]);

    const calculateRatio = (numerator, denominator) => {
        return !isNaN(numerator) && !isNaN(denominator) ? (parseFloat(numerator) / parseFloat(denominator)).toFixed(2) : '';
    };

    useEffect(() => {
        setICCResult(calculateRatio(InputPerimetroCintura, InputPerimetroCadera));
    }, [InputPerimetroCintura, InputPerimetroCadera]);

    useEffect(() => {
        const classifyICC = (resultado, sex) => {
            if (sex === 'Masculino') {
                return resultado > 1.00 ? 'Androide' : resultado >= 0.85 ? 'Mixta' : 'Ginecoide';
            } else if (sex === 'Femenino') {
                return resultado > 0.90 ? 'Androide' : resultado >= 0.75 ? 'Mixta' : 'Ginecoide';
            }
            return 'Sin clasificación';
        };
        setICCRating(ICCResult ? classifyICC(parseFloat(ICCResult), biologicalSex) : 'Sin clasificación');
    }, [ICCResult, biologicalSex]);

    useEffect(() => {
        setICAResult(calculateRatio(InputPerimetroCintura, Talla));
    }, [InputPerimetroCintura, Talla]);

    useEffect(() => {
        const classifyICA = (resultado) => {
            return resultado < 0.50 ? 'Mínimo' : resultado < 0.55 ? 'Moderado' : 'Alto';
        };
        setICARating(ICAResult ? classifyICA(parseFloat(ICAResult)) : 'Sin clasificación');
    }, [ICAResult]);

    useEffect(() => {
        const calculateIP = (Peso, Talla) => {
            const IP = Talla / Math.pow(Peso, 0.3333);
            return IP.toFixed(2);
        };
    
        const IPResult = calculateIP(Peso, Talla);

        setSomatocartaIP(IPResult); 
    }, [Peso, Talla]);

    useEffect(() => {
        const calculateEndomorfia = (InputPliegueTricipital, InputPliegueSubescapular, InputPliegueSupraespinal, Talla) => {
            // Convertir los valores a números
            const tricepsNum = parseFloat(InputPliegueTricipital);
            const subscapularNum = parseFloat(InputPliegueSubescapular);
            const supraspinaleNum = parseFloat(InputPliegueSupraespinal);
            const statureNum = parseFloat(Talla);

            const sumPliegues = tricepsNum + subscapularNum + supraspinaleNum;
            const ratio = (170.18 / statureNum);
            const endomorfia = -0.7182 
                                + 0.1451 * (sumPliegues * ratio)
                                - 0.00068 * Math.pow(sumPliegues * ratio, 2)
                                + 0.0000014 * Math.pow(sumPliegues * ratio, 3);
            return endomorfia.toFixed(1);
        };
    
        const endomorfiaResult = calculateEndomorfia(InputPliegueTricipital, InputPliegueSubescapular, InputPliegueSupraespinal, Talla);
    
        setEndomorfia(endomorfiaResult);
    }, [InputPliegueTricipital, InputPliegueSubescapular, InputPliegueSupraespinal, Talla]);

    useEffect(() => {
        const calculateMesomorfia = (InputDiametroFemur, InputDiametroHumero, InputPerimetroPierna, InputPerimetroBrazoContraido, InputPlieguePierna, InputPliegueTricipital, Talla) => {
            // Convertir los valores a números
            const femurNum = parseFloat(InputDiametroFemur);
            const humeroNum = parseFloat(InputDiametroHumero);
            const piernaNum = parseFloat(InputPerimetroPierna);
            const brazoContraidoNum = parseFloat(InputPerimetroBrazoContraido);
            const plieguePiernaNum = parseFloat(InputPlieguePierna);
            const tricipitalNum = parseFloat(InputPliegueTricipital);
            const statureNum = parseFloat(Talla);

            const mesomorfia = 0.858 * humeroNum
                                + 0.601 * femurNum
                                + 0.188 * (brazoContraidoNum - (tricipitalNum / 10))
                                + 0.161 * (piernaNum - (plieguePiernaNum / 10))
                                - 0.131 * statureNum
                                + 4.5
            return mesomorfia.toFixed(1);
        };
    
        const mesomorfiaResult = calculateMesomorfia(InputDiametroFemur, InputDiametroHumero, InputPerimetroPierna, InputPerimetroBrazoContraido, InputPlieguePierna, InputPliegueTricipital, Talla);
    
        setMesomorfia(mesomorfiaResult);
    }, [InputDiametroFemur, InputDiametroHumero, InputPerimetroPierna, InputPerimetroBrazoContraido, InputPlieguePierna, InputPliegueTricipital, Talla]);

    useEffect(() => {
        const calculateEctomorfia = (SomatocartaIP) => {
            // Convertir los valores a números
            const somatocartaIPNum = parseFloat(SomatocartaIP);

            let result = 0;

            if( somatocartaIPNum >= 40.75 ){
                result = 0.732 * somatocartaIPNum - 28.58
            }else{
                result = 0.463 * somatocartaIPNum - 17.63
            }

            return result.toFixed(1);
        };
    
        const ectomorfiaResult = calculateEctomorfia(SomatocartaIP);
    
        setEctomorfia(ectomorfiaResult);
    }, [SomatocartaIP]);

    useEffect(() => {
        
        const calculateEctomorfia = (Endomorfia, Ectomorfia) => {

            // Convertir los valores a números
            const endomorfiaNum = parseFloat(Endomorfia);
            const ectomorfiaNum = parseFloat(Ectomorfia);

            const result = ectomorfiaNum - endomorfiaNum;

            return result.toFixed(2);
        };
    
        const somatocartaX = calculateEctomorfia(Endomorfia, Ectomorfia);
    
        setSomatocartaX(somatocartaX);

    }, [Endomorfia, Ectomorfia]);

    useEffect(() => {
        
        const calculateEctomorfia = (Endomorfia, Mesomorfia, Ectomorfia) => {

            // Convertir los valores a números
            const endomorfiaNum = parseFloat(Endomorfia);
            const mesomorfiaNum = parseFloat(Mesomorfia);
            const ectomorfiaNum = parseFloat(Ectomorfia);

            const result = 2 * mesomorfiaNum - (ectomorfiaNum + endomorfiaNum);

            return result.toFixed(2);
        };
    
        const somatocartaY = calculateEctomorfia(Endomorfia, Mesomorfia, Ectomorfia);
    
        setSomatocartaY(somatocartaY);

    }, [Endomorfia, Mesomorfia, Ectomorfia]);

    useEffect(() => {
        
        const calculateBrazoRelajadoCorregido = (InputPerimetroBrazoRelajado, InputPliegueTricipital) => {

            // Convertir los valores a números
            const brazoRelajadoNum = parseFloat(InputPerimetroBrazoRelajado);
            const tricipitalNum = parseFloat(InputPliegueTricipital);

            const result = brazoRelajadoNum - (3.1416*(tricipitalNum/10))

            return result.toFixed(3);
        };
    
        const brazoRelajadoCorregido = calculateBrazoRelajadoCorregido(InputPerimetroBrazoRelajado, InputPliegueTricipital);
    
        setBrazoRelajadoCorregido(brazoRelajadoCorregido);

    }, [InputPerimetroBrazoRelajado, InputPliegueTricipital]);

    useEffect(() => {
        
        const calculateMusloCorregido = (InputPerimetroMuslo, InputPliegueMuslo) => {

            // Convertir los valores a números
            const perimetroMusloNum = parseFloat(InputPerimetroMuslo);
            const pliegueMusloNum = parseFloat(InputPliegueMuslo);

            const result = perimetroMusloNum - (3.1416*(pliegueMusloNum/10))

            return result.toFixed(3);
        };
    
        const musloCorregido = calculateMusloCorregido(InputPerimetroMuslo, InputPliegueMuslo);
    
        setMusloCorregido(musloCorregido);

    }, [InputPerimetroMuslo, InputPliegueMuslo]);

    useEffect(() => {
        
        const calculatePiernaCorregido = (InputPerimetroPierna, InputPlieguePierna) => {

            // Convertir los valores a números
            const perimetroPiernaNum = parseFloat(InputPerimetroPierna);
            const plieguePiernaNum = parseFloat(InputPlieguePierna);

            const result = perimetroPiernaNum - (3.1416*(plieguePiernaNum/10))

            return result.toFixed(3);
        };
    
        const PiernaCorregido = calculatePiernaCorregido(InputPerimetroPierna, InputPlieguePierna);
    
        setPiernaCorregido(PiernaCorregido);

    }, [InputPerimetroPierna, InputPlieguePierna]);

    useEffect(() => {
        
        const calculatePiernaCorregido = (InputPerimetroPierna, InputPlieguePierna) => {

            // Convertir los valores a números
            const perimetroPiernaNum = parseFloat(InputPerimetroPierna);
            const plieguePiernaNum = parseFloat(InputPlieguePierna);

            const result = perimetroPiernaNum - (3.1416*(plieguePiernaNum/10))

            return result.toFixed(3);
        };
    
        const PiernaCorregido = calculatePiernaCorregido(InputPerimetroPierna, InputPlieguePierna);
    
        setPiernaCorregido(PiernaCorregido);

    }, [InputPerimetroPierna, InputPlieguePierna]);

    useEffect(() => {
        const calculateMGCarterPercent = (genero, tricipital, subescapular, supraespinal, abdominal, muslo, pierna) => {

            // Convertir los valores a números
            const tricipitalNum = parseFloat(tricipital);
            const subescapularNum = parseFloat(subescapular);
            const supraespinalNum = parseFloat(supraespinal);
            const abdominalNum = parseFloat(abdominal);
            const musloNum = parseFloat(muslo);
            const piernaNum = parseFloat(pierna);

            const sumaPliegues = tricipitalNum + subescapularNum + supraespinalNum + abdominalNum + musloNum + piernaNum;

            let MGCarterPercent;
            if (genero === 'Femenino') {
                MGCarterPercent = 0.1548 * sumaPliegues + 3.58;
            } else if (genero === 'Masculino') {
                MGCarterPercent = 0.1051 * sumaPliegues + 2.58;
            } else {
                MGCarterPercent = null;
            }

            return MGCarterPercent ? MGCarterPercent.toFixed(2) : '';
        };

        const MGCarterPercent = calculateMGCarterPercent(biologicalSex, InputPliegueTricipital, InputPliegueSubescapular, InputPliegueSupraespinal, InputPliegueAbdominal, InputPliegueMuslo, InputPlieguePierna);

        setMGCarterPercent(MGCarterPercent);
    }, [biologicalSex, InputPliegueTricipital, InputPliegueSubescapular, InputPliegueSupraespinal, InputPliegueAbdominal, InputPliegueMuslo, InputPlieguePierna]);

    useEffect(() => {
        const calculateMGCarterKG = (porcentaje, peso) => {

            // Convertir los valores a números
            const porcentajeNum = parseFloat(porcentaje);
            const pesoNum = parseFloat(peso);

            const MGCarterKG = (porcentajeNum * pesoNum)/100;

            return MGCarterKG ? MGCarterKG.toFixed(2) : '';
        };

        const MGCarterKG = calculateMGCarterKG(MGCarterPercent, Peso);

        setMGCarterKG(MGCarterKG);
    }, [MGCarterPercent, Peso]);

    useEffect(() => {
        
        const calculateMGFaulknerPercent = (genero, tricipital, subescapular, supraespinal, abdominal) => {

            // Convertir los valores a números
            const tricipitalNum = parseFloat(tricipital);
            const subescapularNum = parseFloat(subescapular);
            const supraespinalNum = parseFloat(supraespinal);
            const abdominalNum = parseFloat(abdominal);

            const sumaPliegues = tricipitalNum + subescapularNum + supraespinalNum + abdominalNum;

            let MGFaulknerPercent;
            if (genero === 'Femenino') {
                MGFaulknerPercent = 0.213 * sumaPliegues + 7.9;
            } else if (genero === 'Masculino') {
                MGFaulknerPercent = 0.153 * sumaPliegues + 5.783;
            } else {
                MGFaulknerPercent = null;
            }

            return MGFaulknerPercent ? MGFaulknerPercent.toFixed(2) : '';
        };

        const MGFaulknerPercent = calculateMGFaulknerPercent(biologicalSex, InputPliegueTricipital, InputPliegueSubescapular, InputPliegueSupraespinal, InputPliegueAbdominal);

        setMGFaulknerPercent(MGFaulknerPercent);
    }, [biologicalSex, InputPliegueTricipital, InputPliegueSubescapular, InputPliegueSupraespinal, InputPliegueAbdominal]);

    useEffect(() => {
        const calculateMGFaulknerKG = (porcentaje, peso) => {

            // Convertir los valores a números
            const porcentajeNum = parseFloat(porcentaje);
            const pesoNum = parseFloat(peso);

            const MGFaulknerKG = (porcentajeNum * pesoNum)/100;

            return MGFaulknerKG ? MGFaulknerKG.toFixed(2) : '';
        };

        const MGFaulknerKG = calculateMGFaulknerKG(MGFaulknerPercent, Peso);

        setMGFaulknerKG(MGFaulknerKG);
    }, [MGFaulknerPercent, Peso]);

    useEffect(() => {
        const calculateMMLeePercent = (MMLeeKG, Peso) => {

            // Convertir los valores a números
            const MMLeeKGNum = parseFloat(MMLeeKG);

            const MMLeePercent = (MMLeeKGNum * 100)/Peso;

            return MMLeePercent ? MMLeePercent.toFixed(2) : '';
        };

        const MMLeePercent = calculateMMLeePercent(MMLeeKG, Peso);

        setMMLeePercent(MMLeePercent);
    }, [MMLeeKG, Peso]);

    useEffect(() => {
        const calculateMMLeeKG = (genero,  etnia, edad, talla, brazoRelajado, muslo, pierna) => {

            // Convertir los valores a números
            const brazoRelajadoNum = parseFloat(brazoRelajado);
            const musloNum = parseFloat(muslo);
            const piernaNum = parseFloat(pierna);

            const parte1 = (talla / 100) * (0.00744 * Math.pow(brazoRelajadoNum, 2) + 0.00088 * Math.pow(musloNum, 2) + 0.00441 * Math.pow(piernaNum, 2));
            const parte2 = 2.4 * (genero === "Femenino" ? 0 : (genero === "Masculino" ? 1 : 0));
            const parte3 = 0.048 * edad.y;
            const parte4 = (etnia === "Asiatico" ? -2 : (etnia === "Afroamericano" ? 1.1 : (etnia === "Caucasico" || etnia === "Hispanico" ? 0 : 0)));

            const formulaResult = parte1 + parte2 - parte3 + parte4 + 7.8;

            return formulaResult.toFixed(2);
        };

        const formulaResult = calculateMMLeeKG(biologicalSex, InputEtnia, ageForCalcs, Talla, BrazoRelajadoCorregido, MusloCorregido, PiernaCorregido);

        setMMLeeKG(formulaResult);
    }, [biologicalSex, InputEtnia, ageForCalcs, Talla, BrazoRelajadoCorregido, MusloCorregido, PiernaCorregido]);
    
    useEffect(() => {
        const calculateMRPercent = (MGCarterPercent, MMLeePercent, MOPercent) => {

            // Convertir los valores a números
            const MGCarterPercentNum = parseFloat(MGCarterPercent);
            const MMLeePercentNum = parseFloat(MMLeePercent);
            const MOPercentNum = parseFloat(MOPercent);

            const MRPercent = 100 - MGCarterPercentNum - MMLeePercentNum - MOPercentNum

            return MRPercent ? MRPercent.toFixed(2) : '';
        };

        const MRPercent = calculateMRPercent(MGCarterPercent, MMLeePercent, MOPercent);

        setMRPercent(MRPercent);
    }, [MGCarterPercent, MMLeePercent, MOPercent]);

    useEffect(() => {
        const calculateMRKG = (Peso, MGCarterKG, MMLeeKG, MOKG) => {

            // Convertir los valores a números
            const MGCarterKGNum = parseFloat(MGCarterKG);
            const MMLeeKGNum = parseFloat(MMLeeKG);
            const MOKGNum = parseFloat(MOKG);

            const MRKG = Peso - MGCarterKGNum - MMLeeKGNum - MOKGNum;

            return MRKG ? MRKG.toFixed(2) : '';
        };

        const MRKG = calculateMRKG(Peso, MGCarterKG, MMLeeKG, MOKG);

        setMRKG(MRKG);
    }, [Peso, MGCarterKG, MMLeeKG, MOKG]);

    useEffect(() => {
        const calculateMRV2Percent = (MGFaulknerPercent, MMLeePercent, MOPercent) => {

            // Convertir los valores a números
            const MGFaulknerPercentNum = parseFloat(MGFaulknerPercent);
            const MMLeePercentNum = parseFloat(MMLeePercent);
            const MOPercentNum = parseFloat(MOPercent);

            const MRV2Percent = 100 - MGFaulknerPercentNum - MMLeePercentNum - MOPercentNum

            return MRV2Percent ? MRV2Percent.toFixed(2) : '';
        };

        const MRV2Percent = calculateMRV2Percent(MGFaulknerPercent, MMLeePercent, MOPercent);

        setMRV2Percent(MRV2Percent);
    }, [MGFaulknerPercent, MMLeePercent, MOPercent]);

    useEffect(() => {
        const calculateMRV2KG = (Peso, MGFaulknerKG, MMLeeKG, MOKG) => {

            // Convertir los valores a números
            const MGFaulknerKGNum = parseFloat(MGFaulknerKG);
            const MMLeeKGNum = parseFloat(MMLeeKG);
            const MOKGNum = parseFloat(MOKG);

            const MRV2KG = Peso - MGFaulknerKGNum - MMLeeKGNum - MOKGNum;

            return MRV2KG ? MRV2KG.toFixed(2) : '';
        };

        const MRV2KG = calculateMRV2KG(Peso, MGFaulknerKG, MMLeeKG, MOKG);

        setMRV2KG(MRV2KG);
    }, [Peso, MGFaulknerKG, MMLeeKG, MOKG]);

    useEffect(() => {
        const calculateMOPercent = (MOKG, Peso) => {

            // Convertir los valores a números
            const MOKGNum = parseFloat(MOKG);

            const MOPercent = (MOKGNum * 100)/Peso;

            return MOPercent ? MOPercent.toFixed(2) : '';
        };

        const MOPercent = calculateMOPercent(MOKG, Peso);

        setMOPercent(MOPercent);
    }, [MOKG, Peso]);

    useEffect(() => {
        const calculateMOKG = (talla, muneca, femur) => {

            // Convertir los valores a números
            const munecaNum = parseFloat(muneca);
            const femurNum = parseFloat(femur);

            const formulaResult = 3.02 * Math.pow(((talla / 100) ** 2) * (munecaNum / 100) * (femurNum / 100) * 400, 0.712);

            return formulaResult.toFixed(2);
        };

        const formulaResult = calculateMOKG(Talla, InputDiametroMuneca, InputDiametroFemur);

        setMOKG(formulaResult);
    }, [Talla, InputDiametroMuneca, InputDiametroFemur]);

    useEffect(() => {
        updateChart();
    }, [SomatocartaX, SomatocartaY]);
    
    return (
        <>
            <button onClick={() => setOpenModal(true)} className='dropdown-item-btn'>
                <label className='dropdown-item-img'>
                    <img src={HeartIconWhite} />
                </label>
                <p>
                    Evaluación Antropométrica&nbsp;
                </p>
            </button>

            <ModalWrapper
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                title="Evaluación antropométrica"
                footerButtons={[
                    { text: "Guardar", onClick: onSubmit, className: "btn-modal-action" }
                ]}
            >

                <form onSubmit={onSubmit}>
                    <div className="modal-perimetro-cefalico-container-form" onSubmit={onSubmit}>

                        {/* <div className='modal-chart-info-container'>
                            <div className='modal-chart-info'>
                                <b>Sexo Biológico: </b>{biologicalSex}
                            </div>
                            <div className='modal-chart-info'>
                                <b>Estatura: </b>
                                {Talla + 'cm'}
                            </div>
                        </div> */}
                        <div className='modal-content-row modal-content-row-background'>
                            <div className='modal-content-row-title'>
                                <h3>Datos del paciente</h3>
                            </div>
                            <div className="form-group gap-1">
                                <div className="modal-content-row-input">
                                    <label className="input-label">
                                        Género
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="biologicalSex" value={ biologicalSex } readOnly/>
                                </div>
                                <div className="modal-content-row-input">
                                    <label className="input-label">
                                        Etnia
                                    </label>
                                    <select className="input-text-style h-2 text-align-center" type="text" step=".01" name="InputEtnia" placeholder='80' onChange={onInputChange}>
                                        <option value=''>Seleccione una opción</option>
                                        <option value='Asiatico'>Asiático</option>
                                        <option value='Afroamericano'>Afroamericano</option>
                                        <option value='Caucasico'>Caucásico</option>
                                        <option value='Hispanico'>Hispanico</option>
                                    </select>
                                </div>
                                <div className="modal-content-row-input">
                                    <label className="input-label">
                                        Edad
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="ageText" value={ ageText } readOnly />
                                </div>

                            </div>
                            <div className="form-group gap-1">
                                <div className="modal-content-row-input">
                                    <label className="input-label">
                                        Peso
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="weight" value={ Peso } readOnly />
                                </div>
                                <div className="modal-content-row-input">
                                    <label className="input-label">
                                        Talla
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="stature" value={ stature[stature.length - 1].A } readOnly />
                                </div>
                                <div className="modal-content-row-input">
                                    <label className="input-label">
                                        IMC
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="imc" value={ imcValue } readOnly />
                                </div>
                            </div>

                        </div>
                        <div className='modal-content-row modal-content-row-background'>
                            <div className='modal-content-row-title'>
                                <h3>Ingresar medidas antropométricas*</h3>
                                <h6>*A continuación se realizarán los cálculos automáticamente</h6>
                            </div>
                            <div className='modal-content-row-title'>
                                <h4>Pliegues</h4>
                            </div>
                            <div className="form-group gap-1">
                                <div className="modal-content-row-input">
                                    <label className="input-label">
                                        Tricipital (mm)
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="InputPliegueTricipital" placeholder='80' onChange={handleCommaToPointChange}  />
                                </div>
                                <div className="modal-content-row-input">
                                    <label className="input-label">
                                        Subescapular (mm)
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="InputPliegueSubescapular" placeholder='80' onChange={handleCommaToPointChange}  />
                                </div>
                                <div className="modal-content-row-input">
                                    <label className="input-label">
                                        Crestailiaca (mm)
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="InputPliegueCrestailiaca" placeholder='80' onChange={handleCommaToPointChange}  />
                                </div>
                            </div>
                            <div className="form-group gap-1">
                                <div className="modal-content-row-input">
                                    <label className="input-label">
                                        Bicipital (mm)
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="InputPliegueBicipital" placeholder='90' onChange={handleCommaToPointChange}  />
                                </div>
                                <div className="modal-content-row-input">
                                    <label className="input-label">
                                        Supraespinal (mm)
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="InputPliegueSupraespinal" placeholder='90' onChange={handleCommaToPointChange}  />
                                </div>
                                <div className="modal-content-row-input">
                                    <label className="input-label">
                                        Abdominal (mm)
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="InputPliegueAbdominal" placeholder='90' onChange={handleCommaToPointChange}  />
                                </div>
                            </div>
                            <div className="form-group gap-1">
                                <div className="modal-content-row-input w-50">
                                    <label className="input-label">
                                        Muslo (mm)
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="InputPliegueMuslo" placeholder='90' onChange={handleCommaToPointChange}  />
                                </div>
                                <div className="modal-content-row-input w-50">
                                    <label className="input-label">
                                        Pierna (mm)
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="InputPlieguePierna" placeholder='90' onChange={handleCommaToPointChange}  />
                                </div>
                            </div>

                        </div>

                        <div className='modal-content-row modal-content-row-background'>
                            <div className='modal-content-row-title'>
                                <h4>Perimetros</h4>
                            </div>
                            <div className="form-group gap-1">
                                <div className="modal-content-row-input">
                                    <label className="input-label">
                                        Brazo relajado (cm)
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="InputPerimetroBrazoRelajado" placeholder='90' onChange={handleCommaToPointChange}  />
                                </div>
                                <div className="modal-content-row-input">
                                    <label className="input-label">
                                        Brazo contraído (cm)
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="InputPerimetroBrazoContraido" placeholder='90' onChange={handleCommaToPointChange}  />
                                </div>
                                <div className="modal-content-row-input">
                                    <label className="input-label">
                                        Pierna (cm)
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="InputPerimetroPierna" placeholder='90' onChange={handleCommaToPointChange}  />
                                </div>
                            </div>
                            <div className="form-group gap-1">
                                <div className="modal-content-row-input">
                                    <label className="input-label">
                                        Muslo (cm)
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="InputPerimetroMuslo" placeholder='90' onChange={handleCommaToPointChange}  />
                                </div>
                                <div className="modal-content-row-input">
                                    <label className="input-label">
                                        Cintura (cm)
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="InputPerimetroCintura" placeholder='90' onChange={handleCommaToPointChange}  />
                                </div>
                                <div className="modal-content-row-input">
                                    <label className="input-label">
                                        Cadera (cm)
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="InputPerimetroCadera" placeholder='90' onChange={handleCommaToPointChange}  />
                                </div>
                            </div>
                            
                        </div>
                        
                        {/* <div className='modal-content-row modal-content-row-background'>
                            <div className='modal-content-row-title'>
                                <b>Circunferencia de Cintura</b>
                            </div>

                            <div className="form-group gap-1">
                                <div className="form-item w-50 pr-8">
                                    <label className="input-label">
                                        Medición (cm)
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="CCOMSMedicion" placeholder='80' value={ CircunferenciaCintura } readOnly/>
                                </div>
                                <div className="form-item w-50 pr-8">
                                    <label className="input-label">
                                        Clasificación
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" name="CCOMSRating" value={CCOMSRating} readOnly />
                                </div>
                            </div>
                            <label className="input-label">
                                Referencia: OMS 2008
                            </label>
                        </div> */}
                        
                        <div className='modal-content-row modal-content-row-background'>
                            <div className='modal-content-row-title'>
                                <h4>Diámetros</h4>
                            </div>
                            <div className="form-group gap-1">
                                <div className="modal-content-row-input">
                                    <label className="input-label">
                                        Biestiloideo (cm)
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="InputDiametroMuneca" placeholder='90' onChange={handleCommaToPointChange}  />
                                </div>
                                <div className="modal-content-row-input">
                                    <label className="input-label">
                                        Húmero (cm)
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="InputDiametroHumero" placeholder='90' onChange={handleCommaToPointChange}  />
                                </div>
                                <div className="modal-content-row-input">
                                    <label className="input-label">
                                        Femur (cm)
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="InputDiametroFemur" placeholder='90' onChange={handleCommaToPointChange}  />
                                </div>
                            </div>
                        </div>
                        <div className='modal-content-row modal-content-row-background'>
                            <div className='modal-content-row-title'>
                                <h2>Resultados</h2>
                            </div>
                        </div>

                        <div className='modal-content-row modal-content-row-background'>
                            <div className='modal-content-row-title'>
                                <b>Somatocarta</b>
                            </div>
                            <div className="form-group gap-1">
                                <div className="form-item w-50 pr-8">
                                    <label className="input-label">
                                        IP
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="CCMINSALMedicion" placeholder='80' value={ SomatocartaIP } readOnly />
                                </div>
                                <div className="form-item w-50 pr-8">
                                    <label className="input-label">
                                        X
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="CCMINSALMedicion" placeholder='80' value={ SomatocartaX } readOnly />
                                </div>
                                <div className="form-item w-50 pr-8">
                                    <label className="input-label">
                                        Y
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="CCMINSALMedicion" placeholder='80' value={ SomatocartaY } readOnly />
                                </div>
                            </div>
                            <div className="canvas-anthropometry-container">
                                <div className="canvas-anthropometry">
                                    <Scatter data={userData} options={options} />
                                </div>
                            </div>
                            <div className="form-group gap-1">
                                    
                                <div className="form-item w-50 pr-8">
                                    <label className="input-label">
                                        Endomorfia
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" name="CCMINSALRating" value={ Endomorfia } readOnly />
                                </div>
                                <div className="form-item w-50 pr-8">
                                    <label className="input-label">
                                        Mesomorfia
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" name="CCMINSALRating" value={ Mesomorfia } readOnly />
                                </div>
                                <div className="form-item w-50 pr-8">
                                    <label className="input-label">
                                        Ectomorfia
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" name="CCMINSALRating" value={ Ectomorfia } readOnly />
                                </div>
                            </div>
                        </div>

                        <div className='modal-content-row modal-content-row-background'>
                            <div className='modal-content-row-title'>
                                <b>Perímetros corregidos</b>
                            </div>
                            <div className="form-group gap-1">
                                <div className="form-item w-50 pr-8">
                                    <label className="input-label">
                                        Brazo relajado
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="BrazoRelajadoCorregido" placeholder='80' value={ BrazoRelajadoCorregido } readOnly />
                                </div>
                                <div className="form-item w-50 pr-8">
                                    <label className="input-label">
                                        Muslo
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="MusloCorregido" placeholder='80' value={ MusloCorregido } readOnly />
                                </div>
                                <div className="form-item w-50 pr-8">
                                    <label className="input-label">
                                        Pierna
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="PiernaCorregido" placeholder='80' value={ PiernaCorregido } readOnly />
                                </div>
                            </div>
                        </div>

                        <div className='modal-content-row modal-content-row-background'>
                            <div className='modal-content-row-title'>
                                <b>Composición corporal</b>
                            </div>
                            <div className="form-group gap-1">
                                <label className="input-label w-min-10">
                                    Masa Grasa (Carter)
                                </label>
                                <div className='flex-row flex-end gap-1 w-100'>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="MGCarterKG" placeholder='80' value={ MGCarterKG + ' kg' } readOnly />
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="MGCarterPercent" placeholder='80' value={ MGCarterPercent + ' %' } readOnly />
                                </div>
                            </div>
                            <div className="form-group gap-1">
                                <label className="input-label w-min-10">
                                    Masa Muscular (Lee 2000)
                                </label>
                                <div className='flex-row flex-end gap-1 w-100'>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="MMLeeKG" placeholder='80' value={ MMLeeKG + ' kg' } readOnly />
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="MMLeePercent" placeholder='80' value={ MMLeePercent + ' %' } readOnly />
                                </div>
                            </div>
                            <div className="form-group gap-1">
                                <label className="input-label w-min-10">
                                    Masa Residual
                                </label>
                                <div className='flex-row flex-end gap-1 w-100'>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="MRKG" placeholder='80' value={ MRKG + ' kg' } readOnly />
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="MRPercent" placeholder='80' value={ MRPercent + ' %' } readOnly />
                                </div>
                            </div>
                            <div className="form-group gap-1">
                                <label className="input-label w-min-10">
                                    Masa Ósea
                                </label>
                                <div className='flex-row flex-end gap-1 w-100'>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="MOKG" placeholder='80' value={ MOKG + ' kg' } readOnly />
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="MOPercent" placeholder='80' value={ MOPercent + ' %' } readOnly />
                                </div>
                            </div>
                            <hr></hr>
                            <div className="form-group gap-1">
                                <label className="input-label w-min-10">
                                    Masa Grasa (Faulkner)
                                </label>
                                <div className='flex-row flex-end gap-1 w-100'>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="MGFaulknerKG" placeholder='80' value={ MGFaulknerKG + ' kg' } readOnly />
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="MGFaulknerPercent" placeholder='80' value={ MGFaulknerPercent + ' %' } readOnly />
                                </div>
                            </div>
                            <div className="form-group gap-1">
                                <label className="input-label w-min-10">
                                    Masa Muscular (Lee 2000)
                                </label>
                                <div className='flex-row flex-end gap-1 w-100'>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="MMLeeKG" placeholder='80' value={ MMLeeKG + ' kg' } readOnly />
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="MMLeePercent" placeholder='80' value={ MMLeePercent + ' %' } readOnly />
                                </div>
                            </div>
                            <div className="form-group gap-1">
                                <label className="input-label w-min-10">
                                    Masa Residual
                                </label>
                                <div className='flex-row flex-end gap-1 w-100'>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="MRV2KG" placeholder='80' value={ MRV2KG + ' kg' } readOnly />
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="MRV2Percent" placeholder='80' value={ MRV2Percent + ' %' } readOnly />
                                </div>
                            </div>
                            <div className="form-group gap-1">
                                <label className="input-label w-min-10">
                                    Masa Ósea
                                </label>
                                <div className='flex-row flex-end gap-1 w-100'>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="MOKG" placeholder='80' value={ MOKG + ' kg' } readOnly />
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="MOPercent" placeholder='80' value={ MOPercent + ' %' } readOnly />
                                </div>
                            </div>
                        </div>

                        <div className='modal-content-row modal-content-row-background'>
                            <div className='modal-content-row-title'>
                                <b>Circunferencia de Cintura</b>
                            </div>

                            <div className="form-group gap-1">
                                <div className="form-item w-50 pr-8">
                                    <label className="input-label">
                                        Medición (cm)
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="CCMINSALMedicion" placeholder='80' value={ CircunferenciaCintura } readOnly />
                                </div>
                                <div className="form-item w-50 pr-8">
                                    <label className="input-label">
                                        Clasificación
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" name="CCMINSALRating" value={CCMINSALRating} readOnly />
                                </div>
                            </div>
                            <label className="input-label">
                                Referencia: MINSAL 2014
                            </label>
                        </div>

                        <div className='modal-content-row modal-content-row-background'>
                            <div className='modal-content-row-title'>
                                <b>Índice Cintura-Cadera</b>
                            </div>

                            <div className="form-group gap-1">
                                <div className="form-item w-50 pr-8">
                                    <label className="input-label">
                                        Circunferencia de cintura (cm)
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="CinturaMedicion" placeholder='80' value={ CircunferenciaCintura } readOnly/>
                                </div>
                                <div className="form-item w-50 pr-8">
                                    <label className="input-label">
                                        Circunferencia de cadera (cm)
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="CaderaMedicion" placeholder='95' value={ CircunferenciaCadera } readOnly/>
                                </div>
                            </div>
                            <div className="form-group gap-1">
                                <div className="form-item w-50 pr-8">
                                    <label className="input-label">
                                        Resultado
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" name="ICCResult" value={ICCResult} readOnly />
                                </div>
                                <div className="form-item w-50 pr-8">
                                    <label className="input-label">
                                        Clasificación
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" name="ICCRating" value={ICCRating} readOnly />
                                </div>
                            </div>
                            <label className="input-label">
                                Referencia: GIROLAMI 2015
                            </label>
                        </div>
                        
                        <div className='modal-content-row modal-content-row-background'>
                            <div className='modal-content-row-title'>
                                <b>Índice Cintura-Altura</b>
                            </div>

                            <div className="form-group gap-1">
                                <div className="form-item w-50 pr-8">
                                    <label className="input-label">
                                        Circunferencia de cintura (cm)
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="CinturaMedicionKoch" placeholder='80' value={ CircunferenciaCintura } readOnly/>
                                </div>
                                <div className="form-item w-50 pr-8">
                                    <label className="input-label">
                                        Estatura (cm)
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="Talla" placeholder='95' value={Talla} readOnly />
                                </div>
                            </div>
                            <div className="form-group gap-1">
                                <div className="form-item w-50 pr-8">
                                    <label className="input-label">
                                        Resultado
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" name="ICAResult" value={ICAResult} readOnly />
                                </div>
                                <div className="form-item w-50 pr-8">
                                    <label className="input-label">
                                        Riesgo cardiovascular
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" name="ICARating" value={ICARating} readOnly />
                                </div>
                            </div>
                            <label className="input-label">
                                Referencia: Koch 2008
                            </label>
                        </div>
                        
                    </div>
                </form>
            </ModalWrapper>
            
        </>
    );
};
