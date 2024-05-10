import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from 'react-modal';
import { useRut } from "react-rut-formatter";
import { CSSTransition } from "react-transition-group";


import { useForm } from "../hooks";
import { startCreatingPatient } from "../store/auth";

import './components';
import { addDays, format, fromUnixTime, getUnixTime, set } from "date-fns";
import { useEffect } from "react";
import { startLoadingMyPatients, uploadPatientNewConsultation } from "../store/patients";
import { isAddingNewConsultation, startLoadingMyJournal } from "../store/journal";
import { regiones } from "../helpers";
import { ComunasSelect } from "./ComunasSelect";
import { ErrorManager } from "./ErrorManager";
import { PatientForm } from "./components";

export const ModalNewConsultation = ({ consultationSlot }) => {

    // console.log('consultationSlot: ', consultationSlot)
    const { uid } = useSelector( state => state.auth );

    const { patients } = useSelector( state => state.patients );

    const [currentPatient, setCurrentPatient] = useState();

    const [isFirstQuery, setIsFirstQuery] = useState(true);

    const [showSpontaneousPatientForm, setShowSpontaneousPatientForm] = useState(true)

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
        address = '',
        phone = '',
        biologicalSex = 'Femenino',
        genderIdentity = '',
        onInputChange
    } = useForm();

    const { isValid, rut, updateRut } = useRut();

    const onNewConsultationSubmit = ( event ) => {
        event.preventDefault();

        // console.log(currentPatient);
        // console.log(currentPatient.id);


        dispatch( uploadPatientNewConsultation( consultationSlot, currentPatient.id ) );
        
        // console.log({ consultationTime, consultationDate });

        // const formattedBirthday = addDays( set( new Date( birthday ), { hours: 0, minutes: 0, seconds: 0, miliseconds: 0} ), 1 );

        // const unixBirthday = getUnixTime( formattedBirthday );

        dispatch( isAddingNewConsultation( false ) )

    }

    const generatePassword = ( length ) => {
        let result           = '';
        let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    const onSpontaneousPatient = ( event ) => {
        event.preventDefault();

        const displayName = name + " " + fatherName + " " + motherName;

        const formattedBirthday = addDays( set( new Date( birthday ), { hours: 0, minutes: 0, seconds: 0, miliseconds: 0} ), 1 );

        const unixBirthday = getUnixTime( formattedBirthday );

        const nextConsultation = consultationSlot.startTime;

        const password = generatePassword( 10 );

        // console.log({ displayName, rut, isValid, unixBirthday, email, regionSeleccionada, comunaSeleccionada, address, phone, biologicalSex, genderIdentity, nextConsultation });

        setRutValidation( isValid )

        if ( isValid ){

            dispatch ( startCreatingPatient({ displayName, rut, unixBirthday, email, password, regionSeleccionada, comunaSeleccionada, address, phone, biologicalSex, genderIdentity, nextConsultation }) )
    
            dispatch ( startLoadingMyPatients( uid ) );
        
            dispatch( isAddingNewConsultation( false ) )
    
            setOpenModal(false)
        }
    }

    const handleSpontaneousPatientForm = ( event ) => {
        event.preventDefault();
        setShowSpontaneousPatientForm(!showSpontaneousPatientForm);
        dispatch( isAddingNewConsultation( true ) )
    }

    const onRutSubmit = ( event ) => {

        event.preventDefault();

        dispatch( isAddingNewConsultation( true ) )

        // console.log(patients);

        // console.log(rut.raw);
        let tempPatient

        patients.forEach(patient => {

            if (patient.rut.raw === rut.raw) {

                tempPatient = patient;
            }
        });

        setCurrentPatient( tempPatient );
        setIsFirstQuery(false);
        
    }
    
    // useEffect(() => {
    //     console.log(currentPatient)
        
    // }, [currentPatient])
    
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

    const patientFormProps = {
        onSubmit: onSpontaneousPatient,
        prefix: 'sp',
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
            
            <div className="empty-consultation" onClick={() => setOpenModal(true)}>
                <div className="empty-consultation-text">
                    Hora disponible
                </div>
            </div>
            <CSSTransition
                timeout={300}
                classNames="overlay"
            >
                <Modal
                closeTimeoutMS={500}
                isOpen={ openModal }
                ariaHideApp={false}
                className="modal-container"
                >
                <div className="btn-modal-close" onClick={ () => setOpenModal(false) }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6 6 18M6 6l12 12"/>
                    </svg>
                </div>
                <h1 className="modal-header">
                    Agendar consulta: { format( fromUnixTime(consultationSlot.startTime), "dd-MM-yyyy HH:mm") }
                </h1>

                <form onSubmit={ onRutSubmit }>
                    <div className="container-new-consultation">

                        <div className="new-consultation-form-group">
                            <div className="form-item input-rut">
                                <label className="input-label">RUT</label>
                                <input className="input-text-style" type="text" name="rut" value={ rut.formatted } onChange={ (e) => updateRut(e.target.value) } disabled={ !showSpontaneousPatientForm }/>
                            </div>
                            <button className="btn-new-consultation" type="submit" disabled={ !showSpontaneousPatientForm }>
                                Consultar
                            </button>
                            <div className="vertical-separator"></div>
                            <button className="btn-new-consultation" onClick={ handleSpontaneousPatientForm }>
                                Agendar paciente espontáneo
                            </button>                            
                        </div>
                    
                    {
                        ( isFirstQuery === true )
                        ? ''
                        :   ( currentPatient !== undefined )
                            ?   <div hidden={ !showSpontaneousPatientForm }>
                                    
                                    <div className="form-item">
                                        <label className="input-label">Nombre</label>
                                        <input className="input-text-style" type="text" name="query_name" value={ currentPatient.displayName } readOnly/>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-item w-50 pr-8">
                                            <label className="input-label">RUT</label>
                                            <input className="input-text-style" type="text" name="query_rut" value={ rut.formatted } readOnly/>
                                        </div>
                                        <div className="form-item w-50 pl-8">
                                            <label className="input-label">Fecha de Nacimiento</label>
                                            <input className="input-text-style" type="text" name="query_birthday" value={ format(fromUnixTime(currentPatient.unixBirthday), "dd/MM/yyyy") } readOnly/>
                                            <span className="input-date-icon"></span>
                                        </div>                
                                    </div>
                                    <div className="form-item">
                                        <label className="input-label">Email</label>
                                        <input className="input-text-style" type="email" name="query_email" value={ currentPatient.email } readOnly/>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-item w-50 pr-8">
                                            <label className="input-label">Región</label>
                                            <input className="input-text-style" type="text" name="query_region" value={ currentPatient.region } readOnly/>
                                        </div>
                                        <div className="form-item w-50 pl-8">
                                            <label className="input-label">Comuna</label>
                                            <input className="input-text-style" type="text" name="query_city" value={ currentPatient.city } readOnly/>
                                        </div>      
                                    </div>
                                    <div className="form-item">
                                        <label className="input-label">Dirección</label>
                                        <input className="input-text-style" type="text" name="query_address" value={ currentPatient.address } readOnly/>
                                    </div>
                                    <div className="form-item phone-code">
                                        <label className="input-label">Teléfono</label>
                                        <input className="input-text-style phone-code-padding" type="text" name="query_phone" value={ currentPatient.phone } readOnly/>
                                    </div>
                                    <div className="form-item">
                                        <label className="input-label">Género</label>
                                        <input className="input-text-style" type="text" name="query_biologicalSex" value={ currentPatient.biologicalSex } readOnly/>
                                    </div>
                                </div>
                            :   <div hidden={ !showSpontaneousPatientForm }>
                                    <div className="form-item">
                                        <label className="input-label">No se encontraron pacientes con ese RUT :(</label>
                                    </div>
                                </div>
                    }
                    </div>
                </form>
                <div hidden={ showSpontaneousPatientForm }>
                    <PatientForm patientFormProps={ patientFormProps }/>
                </div>
                <form onSubmit={ onNewConsultationSubmit } hidden={ !showSpontaneousPatientForm }>
                    <div className="container-new-consultation">

                        {/* <div className="form-group">
                            <div className="form-item input-rut">
                                <label className="input-label">RUT</label>
                                <input className="input-text-style" type="text" name="rut" value={ rut.formatted } onChange={ (e) => updateRut(e.target.value) }/>
                            </div>
                            <button className="btn-new-consultation">
                                Consultar
                            </button>                
                        </div>                       */}
                        
                        <div className="form-btn">
                            <button className="btn-modal-submit" type="submit" onClick={ () => setOpenModal(false) }>
                                Registrar
                                {/* TODO:
                                    Solo falta tomar la hora de consulta y enviarla al paciente en la base de datos
                                 */}
                            </button>
                        </div>
                    </div>
                </form>
                </Modal>
            </CSSTransition>
        </>
    )
}
