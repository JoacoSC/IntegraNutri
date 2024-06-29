import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from "react-transition-group";
import { useForm } from '../hooks';
import './components';

import PA_A from '../../assets/imgs/patient/imgs_presion_arterial/presion_arterial_adultos.svg'

import HeartIconWhite from '../../assets/imgs/patient/heart_icon_white.svg'
import { startUpdatingCurrentPatientPresionArterial } from '../store/currentPatient';

export const ModalPresionArterialAdultos = ({ patientObject }) => {

    const { uid, patientID, ageText, ageForCalcs, stature } = patientObject;

    const { biologicalSex } = useSelector( state => state.currentPatient )

    const [openModal, setOpenModal] = useState(false);

    const statureLength = stature?.length;
    
    const { 
        PAMedicion,
        clasificacion,
        onInputChange
    } = useForm();

    const dispatch = useDispatch();

    const onSubmit = ( event ) => {
        event.preventDefault();

        let PAClasificacion = '';

        if( clasificacion === 'normal' ){
            PAClasificacion = 'Normal'
        }else if( clasificacion === 'elevada' ){
            PAClasificacion = 'Presión Arterial Elevada'
        }else if( clasificacion === 'ht_nivel1' ){
            PAClasificacion = 'Hipertensión Etapa 1'
        }else if( clasificacion === 'ht_nivel2' ){
            PAClasificacion = 'Hipertensión Etapa 2'
        }else if( clasificacion === 'crisis' ){
            PAClasificacion = 'Crisis de hipertensión'
        }else{
            PAClasificacion = ''
        }

        const presionArterial = {
            PAMedicion,
            PAClasificacion
        }

        dispatch( startUpdatingCurrentPatientPresionArterial( uid, patientID, presionArterial ) )

    }

    const onModalClose = () => {
        setOpenModal(false)
    }

    return (
        <>
            <button onClick={ () => setOpenModal(true) } className='dropdown-item-btn'>
                <label className='dropdown-item-img'>
                    <img src={ HeartIconWhite }/>
                </label>
                <p>
                    Evaluación de presión arterial&nbsp;
                </p>
            </button>
            <CSSTransition
                timeout={300}
                classNames="overlay"
            >
                <Modal
                closeTimeoutMS={500}
                isOpen={ openModal }
                ariaHideApp={false}
                className="modal-perimetro-cefalico-container"
                >
                <div className="btn-modal-close" onClick={ () => onModalClose() }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6 6 18M6 6l12 12"/>
                    </svg>
                </div>
                <h1 className="modal-header">
                    Evaluación de presión arterial
                </h1>

                <form onSubmit={ onSubmit }>
                    <div className="modal-perimetro-cefalico-container-form" onSubmit={ onSubmit }>

                        <div className="form-group">
                            <div className="form-item w-50 pr-8">
                                <label className="input-label">
                                    Medición
                                </label>
                                    <input className="input-text-style h-2" type="text" step=".01" name="PAMedicion" placeholder='120/80' onChange={ onInputChange }/>
                            </div>
                            <div className="form-item w-50 pr-8">
                                <label className="input-label">
                                Clasificación
                                </label>
                                    <select className="input-text-style h-2" name="clasificacion" onChange={ onInputChange }>
                                        <option>Seleccione una opción</option>
                                        <option value='normal'>Presión arterial normal</option>
                                        <option value='elevada'>Presión arterial elevada</option>
                                        <option value='ht_nivel1'>Hipertensión nivel 1</option>
                                        <option value='ht_nivel2'>Hipertensión nivel 2</option>
                                        <option value='crisis'>Crisis de hipertensión</option>
                                    </select>
                            </div>   
                        </div>
                        <div className='modal-chart-info-container'>
                            <div className='modal-chart-info'>
                                <b>Edad: </b>{ ageText }
                            </div>
                            <div className='modal-chart-info'>
                                <b>Estatura: </b>
                                {   (statureLength > 0)
                                    ? stature[statureLength - 1].A + ' cm'
                                    : ''
                                }
                            </div>
                        </div>
                        <div className="modal-chart-container">
                            <img src={ PA_A } className='modal-chart'/>
                        </div>
                        
                        <div className="form-btn">
                            <button className="btn-modal-submit" type="submit" onClick={ () => setOpenModal(false) }>
                                Guardar
                            </button>
                        </div>
                    </div>
                </form>
                </Modal>
            </CSSTransition>
        </>
    )
}
