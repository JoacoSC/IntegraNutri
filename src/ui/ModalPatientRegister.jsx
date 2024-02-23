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
import { PatientForm } from "./components";

export const ModalPatientRegister = () => {

    const location = useLocation();

    const { uid = '' } = queryString.parse( location.search );

    const form = useRef();

    const dispatch = useDispatch();

    const [openModal, setOpenModal] = useState(false);

    const [regionSeleccionada, setRegionSeleccionada] = useState('');
    const [comunaSeleccionada, setComunaSeleccionada] = useState('');
    const [rutValidation, setRutValidation] = useState(true)
    const { disableConfirmBtn, error, errorCode } = useSelector( state => state.loginHelper );

    const {
        name,
        fatherName,
        motherName,
        birthday,
        email,
        address = '',
        phone = '',
        biologicalSex = 'Femenino',
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

        if ( isValid ){
            dispatch ( startCreatingPatientSharePage({ uid, displayName, rut, unixBirthday, email, password, regionSeleccionada, comunaSeleccionada, address, phone, biologicalSex, nextConsultation }) )
            setOpenModal(false)
            
        }

    }

    const patientFormProps = {
        onSubmit,
        prefix: '',
        disableConfirmBtn,
        onInputChange,
        rutValidation,
        regionSeleccionada,
        setRegionSeleccionada,
        comunaSeleccionada,
        setComunaSeleccionada,
        rut,
        updateRut,
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

                <PatientForm patientFormProps={ patientFormProps }/>
                </Modal>
            </CSSTransition>
        </>
    )
}
