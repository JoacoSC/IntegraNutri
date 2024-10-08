import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from 'react-modal';
import { useRut } from "react-rut-formatter";
import { CSSTransition } from "react-transition-group";


import { useForm } from "../hooks";
import { startCreatingPatient } from "../store/auth";

import './components';
import { addDays, getUnixTime, set } from "date-fns";
import { useEffect } from "react";
import { startLoadingMyPatients } from "../store/patients";
import { regiones } from "../helpers";
import { ComunasSelect, ErrorManager } from "./";
import { ModalWrapper, PatientForm } from "./components";
import AddIcon from '../../assets/imgs/journal/btn-add.svg';
import { IconicButton } from "../common";

export const ModalNewPatient = () => {

    const { uid } = useSelector( state => state.auth );

    const form = useRef();

    const dispatch = useDispatch();

    const [openModal, setOpenModal] = useState(false);

    const [regionSeleccionada, setRegionSeleccionada] = useState('');
    const [comunaSeleccionada, setComunaSeleccionada] = useState('');
    const [rutValidation, setRutValidation] = useState(true)
    const { disableConfirmBtn } = useSelector( state => state.loginHelper );

    const {
        name,
        fatherName,
        motherName,
        birthday,
        email,
        address = '',
        phone = '',
        biologicalSex = 'Femenino',
        genderIdentity = '',
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
        
        // console.log('patient: ', { displayName, rut, unixBirthday, email, password, regionSeleccionada, comunaSeleccionada, address, phone, biologicalSex, genderIdentity, nextConsultation })
        if ( isValid ){
            dispatch ( startCreatingPatient({ displayName, rut, unixBirthday, email, password, regionSeleccionada, comunaSeleccionada, address, phone, biologicalSex, genderIdentity, nextConsultation }) )
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
            
            <IconicButton text="Agregar paciente" onClick={() => setOpenModal(true)} Icon={ AddIcon } />

            <ModalWrapper
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                title="Agregar paciente"
            >

                <PatientForm patientFormProps={ patientFormProps }/>
            </ModalWrapper>
        </>
    )
}
