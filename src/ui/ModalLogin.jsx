import { useEffect, useMemo, useState } from 'react';
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
import passwordVisible from "../../assets/imgs/auth/show_password.svg"
import passwordHidden from "../../assets/imgs/auth/hide_password.svg"
import { startLoginWithEmailPassword } from '../store/auth';

export const ModalLogin = () => {

    
    const { status } = useSelector( state => state.auth )

    const [openModal, setOpenModal] = useState(false);

    const [error, setError] = useState(false);
    const [errorCode, setErrorCode] = useState('')
    const [passwordIsVisible, setPasswordIsVisible] = useState(false)
    const [passwordInputType, setPasswordInputType] = useState('password')

    const dispatch = useDispatch();

    const { email, password, onInputChange } = useForm();

    const isAuthenticating = useMemo( () => status === 'checking', [ status ]);


    const startLogin = () => {

        console.log('consultationSlot: ', consultationSlot)

    }

    const onSubmit = async ( event ) => {
        event.preventDefault();

        // console.log({ email, password });
        const result = await dispatch( startLoginWithEmailPassword({ email, password }) ) ;
        
        if( result?.ok === false ){
            // console.log('Codigo de error: ', result.errorCode);
            setErrorCode(result.errorCode)
            setError(true);
        }
        setOpenModal(false)
    }

    const switchPasswordVisibility = () => {
        setPasswordIsVisible( !passwordIsVisible )
        if(passwordIsVisible){
            setPasswordInputType('password')
        }else{
            setPasswordInputType('text')
        }
    }

    const startRegisterNewPatient = ( event ) => {
        
        event.preventDefault();
        console.log('Submit')
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
            <button className="btn-modal-submit" onClick={ () => setOpenModal(true) }>
                Iniciar Sesión
            </button>
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
                className="modal-weight-stature-container"
                >
                <div className="btn-modal-close" onClick={ () => setOpenModal(false) }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6 6 18M6 6l12 12"/>
                    </svg>
                </div>

                <h1 className="modal-header">
                    Iniciar Sesión
                </h1>

                <form onSubmit={ onSubmit }>
                    <div className="weight-stature-container-form">

                        <div className="form-item">
                            <label className="input-label">Email</label>
                            <input className="input-text-style" type="email" name="email" onChange={ onInputChange } required/>
                        </div>
                        <div className="form-item">
                            <label className="input-label">Contraseña</label>
                            <div className='input-password-container'>
                                <input className="input-password-style" type={ passwordInputType } name="password" onChange={ onInputChange } required/>
                                <div className='input-password-visibility-style' onClick={ switchPasswordVisibility }>
                                    {
                                        (passwordIsVisible)
                                        ?   <img src={ passwordHidden }/>
                                        :   <img src={ passwordVisible }/>
                                    }
                                </div>

                            </div>
                        </div>
                        {
                            ( error )
                            ? <div className="login-error-message">
                            {
                                (errorCode === 'auth/wrong-password')
                                ?   'Contraseña incorrecta'
                                :   (errorCode === 'auth/too-many-requests')
                                    ?   'Demasiados intentos fallidos, intente nuevamente más tarde'
                                    :   (errorCode === 'auth/user-not-found')
                                    ?   'Usuario no encontrado, por favor registrese o active su cuenta a través del link enviado a su correo'
                                    :   null
                            }
                            </div>
                            : null
                        }
                        <div className="form-btn">
                            <button
                                className="btn-submit"
                                type="submit"
                                disabled={ isAuthenticating }
                            >
                                Iniciar Sesión
                            </button>
                        </div>
                        <Link to="/auth/passwordReset" className="link-no-decoration">
                            <div className="form-link">
                                    Olvidé mi contraseña
                            </div>
                        </Link>
                    </div>
                </form>
                </Modal>
            </CSSTransition>
        </>
    )
}
