import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from "react-transition-group";
import Modal from 'react-modal';
import { format, fromUnixTime } from 'date-fns';
import queryString from "query-string";
import { Link, useLocation } from "react-router-dom";

import { useForm } from '../hooks';
import { startUpdatingCurrentPatientIMC ,startUpdatingCurrentPatientStature, startUpdatingCurrentPatientWeight, updateCurrentPatientIMC, updateCurrentPatientStature, updateCurrentPatientWeight } from '../store/currentPatient';
import './components';

import UpdateValues from '../../assets/imgs/patient/refresh_icon.svg'
import { uploadPatientNewConsultationFromSharePage } from '../store/patients';
import { ModalLogin, ModalPatientRegister } from './';

export const ModalNewConsultationSharePage = ({ consultationSlot }) => {

    // const { ageText, uid, patientID, weight, stature, imc, lastWeight, lastStature} = patientObject;

    const location = useLocation();

    const { uid = '' } = queryString.parse( location.search );

    const { isLogged, isNutritionistStatus, displayName: patientID, registeredPatientUID } = useSelector( state => state.auth );

    const [openModal, setOpenModal] = useState(false);

    const [uploadNewConsultationSuccess, setUploadNewConsultationSuccess] = useState(false)

    const dispatch = useDispatch();

    const registerNextConsultation = () => {

        // console.log('consultationSlot: ', consultationSlot)

        if( isLogged === true ){
            // Registrar el consultationSlot en el nextConsultation del usuario con dispatch( uploadPatientNewConsultation( consultationSlot, patientID ) )
            // console.log('Sesión iniciada, agradecido con el de arriba')
            if( isNutritionistStatus === false ){
                // Registrar
                dispatch( uploadPatientNewConsultationFromSharePage( consultationSlot, patientID, uid ) )
                // console.log('Hora agendada!')
                setUploadNewConsultationSuccess( true )
            }else{
                // No se puede agendar porque el usuario es un nutricionista, ingrese como paciente por favor
            }
        }else{
            // Solicitar Inicio de sesión o Registro
            // console.log('No ha iniciado sesión')
        }
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
    
        // updatePatientValues();

    }

    const startLogin = () => {
        
        // console.log('startLogin')
        setOpenModal(false)
        // const weightFormValidation = weightForm.replace(/,/g, '.')
        // const statureFormValidation = statureForm.replace(/,/g, '.')
        // const newWeight = [ ...weight, { A: weightFormValidation, B: ageText, C: format( new Date(), "dd/MM/yyyy") } ];
        // const newStature = [ ...stature, { A: statureFormValidation, B: ageText, C: format( new Date(), "dd/MM/yyyy") } ];
        // const IMCValue = weightFormValidation / (statureFormValidation/100)**2

        // const newIMC = [ ...imc, { A: IMCValue, B: ageText, C: format( new Date(), "dd/MM/yyyy") } ]

        // dispatch( updateCurrentPatientWeight( newWeight ) );
        // dispatch( startUpdatingCurrentPatientWeight( uid, patientID, newWeight ) );

        // dispatch( updateCurrentPatientStature( newStature ) );
        // dispatch( startUpdatingCurrentPatientStature( uid, patientID, newStature ) );

        // dispatch( updateCurrentPatientIMC( newIMC ) );
        // dispatch( startUpdatingCurrentPatientIMC( uid, patientID, newIMC ) );
    }

    const onCloseModal = ( event ) => {
        
        event.preventDefault();
        setOpenModal(false)
        // console.log('openDropdown',openDropdown)
    }

    return (
        <>
            <div className="calendar-consultation-preview" onClick={ () => setOpenModal( true ) }>{ format( fromUnixTime( consultationSlot ), 'HH:mm') }</div>
            {/* <div className="weight-update-btn" data-tooltip="Actualizar" onClick={() => setOpenModal(true)}>
                Actualizar peso/talla&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
                    <path stroke="#fff" strokeWidth="2" d="m11.667 12.5-3.334 3.333 3.334 3.334"/>
                    <path stroke="#fff" strokeLinecap="round" strokeWidth="2" d="M15.052 7.083A5.834 5.834 0 0 1 10 15.833"/>
                    <path stroke="#fff" strokeWidth="2" d="m8.333 7.5 3.334-3.333L8.333.833"/>
                    <path stroke="#fff" strokeLinecap="round" strokeWidth="2" d="M4.948 12.917A5.833 5.833 0 0 1 10 4.167"/>
                </svg>

            </div> */}
            <CSSTransition
                timeout={300}
                classNames="overlay"
            >
                <Modal
                closeTimeoutMS={500}
                isOpen={ openModal }
                ariaHideApp={false}
                className="modal-new-consultation-container"
                >
                <div className="btn-modal-close" onClick={ () => setOpenModal(false) }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6 6 18M6 6l12 12"/>
                    </svg>
                </div>

                {
                    ( isLogged === true )
                    ?   <>
                            <h1 className="modal-header">
                                Agendar consulta
                            </h1>

                            <form onSubmit={ onSubmit }>
                                <div className="new-consultation-container-form">

                                    {
                                        ( !uploadNewConsultationSuccess )
                                        ?   <div className="new-consultation-form">
                                                <label className="new-consultation-label">
                                                    ¿Está seguro de agendar una consulta para el <b>{ format( fromUnixTime( consultationSlot ), 'dd/MM/yyyy' )}</b> a las <b>{ format( fromUnixTime( consultationSlot ), 'HH:mm' ) + '?' }</b>
                                                </label>
                                            </div>
                                        :   null
                                    }

                                    {
                                        ( uploadNewConsultationSuccess )
                                        ?   <div className="password-change-successful-message">
                                                Consulta agendada correctamente
                                            </div>
                                        :   null
                                    }
                                    {
                                        ( !uploadNewConsultationSuccess )
                                        ?   <div className="new-consultation-btn">
                                                <button className="btn-modal-submit" type="submit" onClick={ registerNextConsultation }>
                                                    Aceptar
                                                </button>
                                                <button className="btn-modal-alt" onClick={ onCloseModal }>
                                                    Cancelar
                                                </button>
                                            </div>
                                        :   null
                                    }
                                </div>
                            </form>
                        </>
                    :   <>
                            <h1 className="modal-header">
                                Iniciar sesión
                            </h1>

                            <form onSubmit={ onSubmit }>
                                <div className="new-consultation-container-form">

                                    {
                                        ( registeredPatientUID === null )
                                        ?   <>
                                                <div className="new-consultation-form">
                                                    <label className="new-consultation-label">
                                                        Por favor inicie sesión o cree una cuenta para agendar una hora. 
                                                    </label>
                                                </div>
                                                
                                                <div className="new-consultation-btn">
                                                    <ModalLogin />
                                                    <ModalPatientRegister/>
                                                </div>
                                            </>
                                        :   <div className="password-change-successful-message">
                                                Cuenta creada correctamente, por favor revise su correo electrónico, active su cuenta y luego inicie sesión para poder agendar una hora.
                                            </div>
                                    }
                                    
                                </div>
                            </form>
                        </>
                }
                </Modal>
            </CSSTransition>
        </>
    )
}
