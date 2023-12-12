import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from 'react-modal';
import { useRut } from "react-rut-formatter";
import { CSSTransition } from "react-transition-group";
import queryString from "query-string";
import { useLocation } from "react-router-dom";


import { useForm } from "../hooks";
import { startCreatingPatientSharePage } from "../store/auth";

import './components';
import { addDays, getUnixTime, set } from "date-fns";
import { useEffect } from "react";
import { startLoadingMyPatients } from "../store/patients";
import { regiones } from "../helpers";
import { ComunasSelect, ErrorManager } from "./";

export const ModalPatientRegister = () => {

    const location = useLocation();

    const { uid = '' } = queryString.parse( location.search );

    const form = useRef();

    const dispatch = useDispatch();

    const [openModal, setOpenModal] = useState(false);

    const [regionSeleccionada, setRegionSeleccionada] = useState('');
    const [comunaSeleccionada, setComunaSeleccionada] = useState('');
    const [comunas, setComunas] = useState([]);
    const [rutValidation, setRutValidation] = useState(true)
    const { disableConfirmBtn, error, errorCode } = useSelector( state => state.loginHelper );

    const {
        name,
        fatherName,
        motherName,
        birthday,
        email,
        region,
        city,
        address = '',
        phone = '',
        gender = 'Femenino',
        onInputChange
    } = useForm();

    const { isValid, rut, updateRut } = useRut();

    const generatePassword = ( length ) => {
        let result           = '';
        let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    const password = generatePassword( 10 );

    const onSubmit = ( event ) => {
        event.preventDefault();

        const displayName = name + " " + fatherName + " " + motherName;

        const formattedBirthday = addDays( set( new Date( birthday ), { hours: 0, minutes: 0, seconds: 0, miliseconds: 0} ), 1 );

        const unixBirthday = getUnixTime( formattedBirthday );

        const nextConsultation = null;

        setRutValidation( isValid )
        // console.log('isValid: ', isValid)
        // console.log('gender: ', gender)
        if ( isValid ){
            dispatch ( startCreatingPatientSharePage({ uid, displayName, rut, unixBirthday, email, password, regionSeleccionada, comunaSeleccionada, address, phone, gender, nextConsultation }) )
            setOpenModal(false)
            
        }

    }

    const handleRegionSeleccionada = (event) => {
        const region = event.target.value;
        const comunas = regiones.find((r) => r.nombre === region).comunas;
        setRegionSeleccionada(region);
        setComunas(comunas);
        setComunaSeleccionada(comunas[0])
    };

    const handleComunaSeleccionada = (event) => {
        const comuna = event.target.value;
        setComunaSeleccionada(comuna)
        // console.log(`Comuna seleccionada: ${comuna}`);
    };

    return (
        <>
            
            <button className="btn-modal-submit" onClick={ () => setOpenModal(true) }>
                Crear cuenta
            </button>
            <CSSTransition
                timeout={300}
                classNames="overlay"
            >
                <Modal
                closeTimeoutMS={500}
                isOpen={ openModal }
                ariaHideApp={false}
                className="modal-register-container"
                >
                <div className="btn-modal-close" onClick={ () => setOpenModal(false) }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6 6 18M6 6l12 12"/>
                    </svg>
                </div>
                <h1 className="modal-header">
                    Crear cuenta
                </h1>

                <form ref={ form } onSubmit={ onSubmit }>
                    <div className="container-form" onSubmit={ onSubmit }>

                        <div className="form-item">
                            <div className='input-label-container'>
                                <label className="input-label">Nombre</label>
                                <label className="input-label-required">*</label>
                                <label className="input-label-required-text">* Campos obligatorios</label>
                            </div>
                            <input className="input-text-style" type="text" name="name" onChange={ onInputChange } required/>
                        </div>
                        <div className="form-group">
                            <div className="form-item w-50 pr-8">
                                <div className='input-label-container'>
                                    <label className="input-label">Apellido Paterno</label>
                                    <label className="input-label-required">*</label>
                                </div>
                                <input className="input-text-style" type="text" name="fatherName" onChange={ onInputChange } required/>
                            </div>
                            <div className="form-item w-50 pl-8">
                                <div className='input-label-container'>
                                    <label className="input-label">Apellido Materno</label>
                                    <label className="input-label-required">*</label>
                                </div>
                                <input className="input-text-style" type="text" name="motherName" onChange={ onInputChange } required/>
                            </div>                
                        </div>
                        <div className="form-group">
                            <div className="form-item w-50 pr-8">
                                <div className='input-label-container'>
                                    <label className="input-label">RUT</label>
                                    <label className="input-label-required">*</label>
                                </div>
                                <input className="input-text-style" type="text" name="rut" maxLength="12" value={ rut.formatted } onChange={ (e) => updateRut(e.target.value) } required/>
                            </div>
                            <div className="form-item w-50 pl-8">
                                <div className='input-label-container'>
                                    <label className="input-label">Fecha de Nacimiento</label>
                                    <label className="input-label-required">*</label>
                                </div>
                                <input className="input-text-style input-date" type="date" name="birthday" onChange={ onInputChange } required/>
                                <span className="input-date-icon"></span>
                            </div>                
                        </div>
                        <div className="form-item">
                            <div className='input-label-container'>
                                <label className="input-label">Email</label>
                                <label className="input-label-required">*</label>
                            </div>
                            <input className="input-text-style" type="email" name="email" onChange={ onInputChange } required/>
                        </div>
                        <div className="form-group">
                            <div className="form-item w-50 pr-8">
                                <div className='input-label-container'>
                                    <label className="input-label">Región</label>
                                    <label className="input-label-required">*</label>
                                </div>
                                <select className="select-style" name="region" value={regionSeleccionada} onChange={handleRegionSeleccionada} required>
                                    <option value="Seleccione una región">Seleccione una región</option>
                                    {regiones.map((region) => (
                                    <option key={region.nombre} value={region.nombre}>
                                        {region.nombre}
                                    </option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-item w-50 pl-8">
                                <div className='input-label-container'>
                                    <label className="input-label">Comuna</label>
                                    <label className="input-label-required">*</label>
                                </div>
                                {
                                    <ComunasSelect
                                    comunaSeleccionada={comunaSeleccionada}
                                    comunas={comunas}
                                    handleComunaSeleccionada={handleComunaSeleccionada}
                                    />
                                }
                            </div>      
                        </div>
                        <div className="form-item">
                            <label className="input-label">Dirección</label>
                            <input className="input-text-style" type="text" name="address" onChange={ onInputChange }/>
                        </div>
                        <div className="form-item phone-code">
                            <label className="input-label">Teléfono</label>
                            <input className="input-text-style phone-code-padding" type="text" maxLength="8" name="phone" onChange={ onInputChange }/>
                        </div>
                        <div className="form-item">
                            <div className='input-label-container'>
                                <label className="input-label">Género</label>
                                <label className="input-label-required">*</label>
                            </div>
                            <select className="select-style" name="gender" onChange={ onInputChange } required>
                                <option value="Femenino">Femenino</option>
                                <option value="Masculino">Masculino</option>
                            </select>
                        </div>
                        {
                            ( error )
                            ?   <ErrorManager errorCode= { errorCode }/>
                            :   null
                        }
                        {
                            ( !rutValidation )
                            ?   <div className="login-error-message">
                                    El RUT ingresado no es un RUT válido, revíselo e intente nuevamente
                                </div>
                            :   null
                        }
                        <div className="form-btn">
                            <button className="btn-modal-submit" type="submit" disabled={ disableConfirmBtn }>
                                Registrarse
                            </button>
                        </div>
                    </div>
                </form>
                </Modal>
            </CSSTransition>
        </>
    )
}
