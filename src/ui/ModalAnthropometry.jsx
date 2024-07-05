import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from "react-transition-group";
import { useForm } from '../hooks';
import './components';

import HeartIconWhite from '../../assets/imgs/patient/heart_icon_white.svg'
// import { startUpdatingCurrentPatientPresionArterial } from '../store/currentPatient'; // Uncomment if necessary

export const ModalAnthropometry = ({ patientObject }) => {

    const { uid, patientID, stature } = patientObject;
    const { biologicalSex } = useSelector(state => state.currentPatient);

    const [openModal, setOpenModal] = useState(false);
    const [CCMINSALClasificacion, setCCMINSALClasificacion] = useState('Sin clasificación');
    const [CCOMSClasificacion, setCCOMSClasificacion] = useState('Sin clasificación');
    const [ICCResultado, setICCResultado] = useState('Sin resultado');
    const [ICCClasificacion, setICCClasificacion] = useState('Sin clasificación');
    const [ICAResultado, setICAResultado] = useState('Sin resultado');
    const [ICAClasificacion, setICAClasificacion] = useState('Sin clasificación');

    const statureLength = stature?.length;
    const Talla = statureLength > 0 ? stature[statureLength - 1].A : '';

    const {
        CCMINSALMedicion,
        CCOMSMedicion,
        CinturaMedicion,
        CaderaMedicion,
        CinturaMedicionKoch,
        onInputChange
    } = useForm();

    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();

        const submitObject = {
            CCMINSALClasificacion,
            CCOMSClasificacion,
            ICCResultado,
            ICCClasificacion,
            ICAResultado,
            ICAClasificacion,
        };

        console.log(submitObject);

        // TODO: Se puede optimizar el componente agregando una tarjeta al inicio en la que se pueda ingresar directamente los valores de 
        // circunferencia de cintura y de cadera. Luego a partir de esos valores se harían todos los cálculos automáticamente.

        // dispatch(startUpdatingCurrentPatientAnthropometry(uid, patientID, submitObject));
    };

    const onModalClose = () => {
        setOpenModal(false);
    };

    const classifyValue = (value, thresholds) => {
        if (isNaN(value) || value === '') return 'Sin clasificación';
        return value >= thresholds.high ? thresholds.highLabel : thresholds.lowLabel;
    };

    useEffect(() => {
        const thresholds = biologicalSex === 'Masculino' ? { high: 90, highLabel: 'Obesidad abdominal', lowLabel: 'Sin riesgo de obesidad abdominal' } :
            { high: 80, highLabel: 'Obesidad abdominal', lowLabel: 'Sin riesgo de obesidad abdominal' };
        setCCMINSALClasificacion(classifyValue(CCMINSALMedicion, thresholds));
    }, [CCMINSALMedicion, biologicalSex]);

    useEffect(() => {
        const thresholds = biologicalSex === 'Masculino' ? { high: 90, highLabel: 'Riesgo cardiovascular', lowLabel: 'Sin riesgo cardiovascular' } :
            { high: 85, highLabel: 'Riesgo cardiovascular', lowLabel: 'Sin riesgo cardiovascular' };
        setCCOMSClasificacion(classifyValue(CCOMSMedicion, thresholds));
    }, [CCOMSMedicion, biologicalSex]);

    const calculateRatio = (numerator, denominator) => {
        return !isNaN(numerator) && !isNaN(denominator) ? (parseFloat(numerator) / parseFloat(denominator)).toFixed(2) : '';
    };

    useEffect(() => {
        setICCResultado(calculateRatio(CinturaMedicion, CaderaMedicion));
    }, [CinturaMedicion, CaderaMedicion]);

    useEffect(() => {
        const classifyICC = (resultado, sex) => {
            if (sex === 'Masculino') {
                return resultado > 1.00 ? 'Androide' : resultado >= 0.85 ? 'Mixta' : 'Ginecoide';
            } else if (sex === 'Femenino') {
                return resultado > 0.90 ? 'Androide' : resultado >= 0.75 ? 'Mixta' : 'Ginecoide';
            }
            return 'Sin clasificación';
        };
        setICCClasificacion(ICCResultado ? classifyICC(parseFloat(ICCResultado), biologicalSex) : 'Sin clasificación');
    }, [ICCResultado, biologicalSex]);

    useEffect(() => {
        setICAResultado(calculateRatio(CinturaMedicionKoch, Talla));
    }, [CinturaMedicionKoch, Talla]);

    useEffect(() => {
        const classifyICA = (resultado) => {
            return resultado < 0.50 ? 'Mínimo' : resultado < 0.55 ? 'Moderado' : 'Alto';
        };
        setICAClasificacion(ICAResultado ? classifyICA(parseFloat(ICAResultado)) : 'Sin clasificación');
    }, [ICAResultado]);

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
                    <div className="btn-modal-close" onClick={onModalClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6 6 18M6 6l12 12"/>
                        </svg>
                    </div>
                    <h1 className="modal-header">
                        Evaluación Antropométrica
                    </h1>

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

                            <div>
                                <div className='modal-chart-info-container'>
                                    <div className='modal-chart-info'>
                                        <b>Circunferencia de Cintura</b>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="form-item w-50 pr-8">
                                        <label className="input-label">
                                            Medición (cm)
                                        </label>
                                        <input className="input-text-style h-2" type="text" step=".01" name="CCMINSALMedicion" placeholder='80' onChange={onInputChange} />
                                    </div>
                                    <div className="form-item w-50 pr-8">
                                        <label className="input-label">
                                            Clasificación
                                        </label>
                                        <input className="input-text-style h-2" type="text" name="CCMINSALClasificacion" value={CCMINSALClasificacion} readOnly />
                                    </div>
                                </div>
                                <label className="input-label">
                                    Referencia: MINSAL 2014
                                </label>
                            </div>
                            
                            <div>
                                <div className='modal-chart-info-container'>
                                    <div className='modal-chart-info'>
                                        <b>Circunferencia de Cintura</b>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="form-item w-50 pr-8">
                                        <label className="input-label">
                                            Medición (cm)
                                        </label>
                                        <input className="input-text-style h-2" type="text" step=".01" name="CCOMSMedicion" placeholder='80' onChange={onInputChange} />
                                    </div>
                                    <div className="form-item w-50 pr-8">
                                        <label className="input-label">
                                            Clasificación
                                        </label>
                                        <input className="input-text-style h-2" type="text" name="CCOMSClasificacion" value={CCOMSClasificacion} readOnly />
                                    </div>
                                </div>
                                <label className="input-label">
                                    Referencia: OMS 2008
                                </label>
                            </div>
                            
                            <div>
                                <div className='modal-chart-info-container'>
                                    <div className='modal-chart-info'>
                                        <b>Índice Cintura-Cadera</b>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="form-item w-50 pr-8">
                                        <label className="input-label">
                                            Medición de circunferencia de cintura (cm)
                                        </label>
                                        <input className="input-text-style h-2" type="text" step=".01" name="CinturaMedicion" placeholder='80' onChange={onInputChange} />
                                    </div>
                                    <div className="form-item w-50 pr-8">
                                        <label className="input-label">
                                            Medición de circunferencia de cadera (cm)
                                        </label>
                                        <input className="input-text-style h-2" type="text" step=".01" name="CaderaMedicion" placeholder='95' onChange={onInputChange} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-item w-50 pr-8">
                                        <label className="input-label">
                                            Resultado
                                        </label>
                                        <input className="input-text-style h-2" type="text" name="ICCResultado" value={ICCResultado} readOnly />
                                    </div>
                                    <div className="form-item w-50 pr-8">
                                        <label className="input-label">
                                            Clasificación
                                        </label>
                                        <input className="input-text-style h-2" type="text" name="ICCClasificacion" value={ICCClasificacion} readOnly />
                                    </div>
                                </div>
                                <label className="input-label">
                                    Referencia: GIROLAMI 2015
                                </label>
                            </div>
                            
                            <div>
                                <div className='modal-chart-info-container'>
                                    <div className='modal-chart-info'>
                                        <b>Índice Cintura-Altura</b>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="form-item w-50 pr-8">
                                        <label className="input-label">
                                            Medición de circunferencia de cintura (cm)
                                        </label>
                                        <input className="input-text-style h-2" type="text" step=".01" name="CinturaMedicionKoch" placeholder='80' onChange={onInputChange} />
                                    </div>
                                    <div className="form-item w-50 pr-8">
                                        <label className="input-label">
                                            Altura (cm)
                                        </label>
                                        <input className="input-text-style h-2" type="text" step=".01" name="Talla" placeholder='95' value={Talla} readOnly />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-item w-50 pr-8">
                                        <label className="input-label">
                                            Resultado
                                        </label>
                                        <input className="input-text-style h-2" type="text" name="ICAResultado" value={ICAResultado} readOnly />
                                    </div>
                                    <div className="form-item w-50 pr-8">
                                        <label className="input-label">
                                            Clasificación
                                        </label>
                                        <input className="input-text-style h-2" type="text" name="ICAClasificacion" value={ICAClasificacion} readOnly />
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
