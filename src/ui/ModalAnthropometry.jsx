import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from "react-transition-group";
import { useForm } from '../hooks';
import './components';

import HeartIconWhite from '../../assets/imgs/patient/heart_icon_white.svg'
import { startUpdatingCurrentPatientAnthropometry } from '../store/currentPatient';
// import { startUpdatingCurrentPatientPresionArterial } from '../store/currentPatient'; // Uncomment if necessary

export const ModalAnthropometry = ({ patientObject }) => {

    const { uid, patientID, stature } = patientObject;
    const { biologicalSex } = useSelector(state => state.currentPatient);

    const [openModal, setOpenModal] = useState(false);
    const [CircunferenciaCintura, setCircunferenciaCintura] = useState('');
    const [CircunferenciaCadera, setCircunferenciaCadera] = useState('');
    const [CCMINSALResult, setCCMINSALResult] = useState('Sin clasificación');
    const [CCMINSALRating, setCCMINSALRating] = useState('Sin clasificación');
    const [CCOMSRating, setCCOMSRating] = useState('Sin clasificación');
    const [ICCResult, setICCResult] = useState('Sin resultado');
    const [ICCRating, setICCRating] = useState('Sin clasificación');
    const [ICAResult, setICAResult] = useState('Sin resultado');
    const [ICARating, setICARating] = useState('Sin clasificación');

    const statureLength = stature?.length;
    const Talla = statureLength > 0 ? stature[statureLength - 1].A : '';

    const {
        InputCircunferenciaCintura,
        InputCircunferenciaCadera,
        onInputChange
    } = useForm();

    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();

        const submitObject = {
            CCMINSALResult,
            CCMINSALRating,
            ICCResult,
            ICCRating,
            ICAResult,
            ICARating,
        };

        console.log(submitObject);

        dispatch(startUpdatingCurrentPatientAnthropometry(uid, patientID, submitObject));
    };

    const onModalClose = () => {
        setOpenModal(false);
    };

    const classifyValue = (value, thresholds) => {
        if (isNaN(value) || value === '') return 'Sin clasificación';
        return value >= thresholds.high ? thresholds.highLabel : thresholds.lowLabel;
    };

    useEffect(() => {
        setCircunferenciaCintura(InputCircunferenciaCintura);
    }, [InputCircunferenciaCintura]);
    
    useEffect(() => {
        setCircunferenciaCadera(InputCircunferenciaCadera);
    }, [InputCircunferenciaCadera]);

    useEffect(() => {
        const thresholds = biologicalSex === 'Masculino' ? { high: 90, highLabel: 'Obesidad abdominal', lowLabel: 'Sin riesgo de obesidad abdominal' } :
            { high: 80, highLabel: 'Obesidad abdominal', lowLabel: 'Sin riesgo de obesidad abdominal' };
        setCCMINSALResult(InputCircunferenciaCintura);
        setCCMINSALRating(classifyValue(InputCircunferenciaCintura, thresholds));
    }, [InputCircunferenciaCintura, biologicalSex]);

    // useEffect(() => {
    //     const thresholds = biologicalSex === 'Masculino' ? { high: 90, highLabel: 'Riesgo cardiovascular', lowLabel: 'Sin riesgo cardiovascular' } :
    //         { high: 85, highLabel: 'Riesgo cardiovascular', lowLabel: 'Sin riesgo cardiovascular' };
    //     setCCOMSRating(classifyValue(InputCircunferenciaCintura, thresholds));
    // }, [InputCircunferenciaCintura, biologicalSex]);

    const calculateRatio = (numerator, denominator) => {
        return !isNaN(numerator) && !isNaN(denominator) ? (parseFloat(numerator) / parseFloat(denominator)).toFixed(2) : '';
    };

    useEffect(() => {
        setICCResult(calculateRatio(InputCircunferenciaCintura, InputCircunferenciaCadera));
    }, [InputCircunferenciaCintura, InputCircunferenciaCadera]);

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
        setICAResult(calculateRatio(InputCircunferenciaCintura, Talla));
    }, [InputCircunferenciaCintura, Talla]);

    useEffect(() => {
        const classifyICA = (resultado) => {
            return resultado < 0.50 ? 'Mínimo' : resultado < 0.55 ? 'Moderado' : 'Alto';
        };
        setICARating(ICAResult ? classifyICA(parseFloat(ICAResult)) : 'Sin clasificación');
    }, [ICAResult]);

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
            <CSSTransition
                timeout={300}
                classNames="overlay"
            >
                <Modal
                    closeTimeoutMS={500}
                    isOpen={openModal}
                    ariaHideApp={false}
                    className="modal-perimetro-cefalico-container"
                >
                    <div className="modal-header">
                        <p>Evaluación Antropométrica</p>
                    </div>
                    <div className="btn-modal-close" onClick={onModalClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24">
                            <path stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6 6 18M6 6l12 12"/>
                        </svg>
                    </div>
                    {/* TODO: Actualizar aspecto de los modal. Disminuir tamaño del header, fijar header y footer, acortar scrollbar al contenido del modal sin header ni footer */}

                    <form onSubmit={onSubmit}>
                        <div className="modal-perimetro-cefalico-container-form" onSubmit={onSubmit}>

                            <div className='modal-chart-info-container'>
                                <div className='modal-chart-info'>
                                    <b>Sexo Biológico: </b>{biologicalSex}
                                </div>
                                <div className='modal-chart-info'>
                                    <b>Estatura: </b>
                                    {Talla + 'cm'}
                                </div>
                            </div>
                            <div className='modal-content-row modal-content-row-background'>
                                <div className='modal-content-row-title'>
                                    <h3>Ingresar medidas antropométricas*</h3>
                                    <h6>*A continuación se realizarán los cálculos automáticamente</h6>
                                </div>
                                <div className="modal-content-row-input">
                                    <label className="input-label">
                                        Circunferencia de <b>cintura</b> (cm)
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="InputCircunferenciaCintura" placeholder='80' onChange={onInputChange} />
                                </div>
                                <div className="modal-content-row-input">
                                    <label className="input-label">
                                        Circunferencia de <b>cadera</b> (cm)
                                    </label>
                                    <input className="input-text-style h-2 text-align-center" type="text" step=".01" name="InputCircunferenciaCadera" placeholder='90' onChange={onInputChange} />
                                </div>

                            </div>

                            <div className='modal-content-row modal-content-row-background'>
                                <div className='modal-content-row-title'>
                                    <b>Circunferencia de Cintura</b>
                                </div>

                                <div className="form-group">
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
                            
                            {/* <div className='modal-content-row modal-content-row-background'>
                                <div className='modal-content-row-title'>
                                    <b>Circunferencia de Cintura</b>
                                </div>

                                <div className="form-group">
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
                                    <b>Índice Cintura-Cadera</b>
                                </div>

                                <div className="form-group">
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
                                <div className="form-group">
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

                                <div className="form-group">
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
                                <div className="form-group">
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
                            
                            <div className="form-btn">
                                <button className="btn-modal-submit" type="submit" onClick={() => setOpenModal(false)}>
                                    Guardar
                                </button>
                            </div>
                        </div>
                    </form>
                </Modal>
            </CSSTransition>
        </>
    );
};
