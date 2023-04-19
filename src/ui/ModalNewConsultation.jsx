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
import { startLoadingMyJournal } from "../store/journal";
import { regiones } from "../helpers";
import { ComunasSelect } from "./ComunasSelect";

export const ModalNewConsultation = ({ consultationSlot }) => {

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

    const { sp_name, sp_fatherName, sp_motherName, sp_birthday, sp_email, sp_region, sp_city, sp_address, sp_phone, sp_gender, consultationTime, consultationDate, onInputChange } = useForm();

    const { isValid, rut, updateRut } = useRut();

    const onNewConsultationSubmit = ( event ) => {
        event.preventDefault();

        console.log(currentPatient);
        console.log(currentPatient.id);


        dispatch( uploadPatientNewConsultation( consultationSlot, currentPatient.id ) );

        dispatch ( startLoadingMyPatients( uid ) );
        
        // console.log({ consultationTime, consultationDate });

        // const formattedBirthday = addDays( set( new Date( birthday ), { hours: 0, minutes: 0, seconds: 0, miliseconds: 0} ), 1 );

        // const unixBirthday = getUnixTime( formattedBirthday );

    }

    const onSpontaneousPatient = ( event ) => {
        event.preventDefault();

        const generatePassword = ( length ) => {
            let result           = '';
            let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let charactersLength = characters.length;
            for ( let i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }

        const displayName = sp_name + " " + sp_fatherName + " " + sp_motherName;

        // const rawRut = rut.raw;

        const email = sp_email;
        const address = sp_address;
        const phone = sp_phone;
        const gender = sp_gender;

        const formattedBirthday = addDays( set( new Date( sp_birthday ), { hours: 0, minutes: 0, seconds: 0, miliseconds: 0} ), 1 );

        const unixBirthday = getUnixTime( formattedBirthday );

        console.log(fromUnixTime( unixBirthday ))

        const nextConsultation = consultationSlot;

        const password = generatePassword( 10 );

        console.log({ displayName, rut, isValid, unixBirthday, sp_email, regionSeleccionada, comunaSeleccionada, sp_address, sp_phone, sp_gender, nextConsultation });

        dispatch ( startCreatingPatient({ displayName, rut, unixBirthday, email, password, regionSeleccionada, comunaSeleccionada, address, phone, gender, nextConsultation }) )

        dispatch ( startLoadingMyPatients( uid ) );

        // TODO: Agregar el NextConsultation al formulario, mostrarlo por consola, 
        // hacer el registro del paciente y asignarle el NextConsultation
    }

    const handleSpontaneousPatientForm = ( event ) => {
        event.preventDefault();
        setShowSpontaneousPatientForm(!showSpontaneousPatientForm);
    }

    const onRutSubmit = ( event ) => {

        event.preventDefault();

        // console.log(patients);

        // console.log(rut.raw);
        let tempPatient

        patients.forEach(patient => {
            if (patient.rut === rut.raw) {

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
        console.log(`Comuna seleccionada: ${comuna}`);
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
                    Agendar consulta: { format( fromUnixTime(consultationSlot), "dd-MM-yyyy hh:mm") }
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
                                        <input className="input-text-style" type="text" name="name" value={ currentPatient.displayName } readOnly/>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-item w-50 pr-8">
                                            <label className="input-label">RUT</label>
                                            <input className="input-text-style" type="text" name="rut" value={ rut.formatted } readOnly/>
                                        </div>
                                        <div className="form-item w-50 pl-8">
                                            <label className="input-label">Fecha de Nacimiento</label>
                                            <input className="input-text-style" type="text" name="birthday" value={ format(fromUnixTime(currentPatient.unixBirthday), "dd/MM/yyyy") } readOnly/>
                                            <span className="input-date-icon"></span>
                                        </div>                
                                    </div>
                                    <div className="form-item">
                                        <label className="input-label">Email</label>
                                        <input className="input-text-style" type="email" name="email" value={ currentPatient.email } readOnly/>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-item w-50 pr-8">
                                            <label className="input-label">Región</label>
                                            <input className="input-text-style" type="text" name="region" value={ currentPatient.region } readOnly/>
                                        </div>
                                        <div className="form-item w-50 pl-8">
                                            <label className="input-label">Comuna</label>
                                            <input className="input-text-style" type="text" name="city" value={ currentPatient.city } readOnly/>
                                        </div>      
                                    </div>
                                    <div className="form-item">
                                        <label className="input-label">Dirección</label>
                                        <input className="input-text-style" type="text" name="address" value={ currentPatient.address } readOnly/>
                                    </div>
                                    <div className="form-item phone-code">
                                        <label className="input-label">Teléfono</label>
                                        <input className="input-text-style phone-code-padding" type="text" name="phone" value={ currentPatient.phone } readOnly/>
                                    </div>
                                    <div className="form-item">
                                        <label className="input-label">Género</label>
                                        <input className="input-text-style" type="text" name="gender" value={ currentPatient.gender } readOnly/>
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
                <form onSubmit={ onSpontaneousPatient } hidden={ showSpontaneousPatientForm }>
                    <div className="container-form">

                        <div className="form-item">
                            <label className="input-label">Nombre</label>
                            <input className="input-text-style" type="text" name="sp_name" onChange={ onInputChange }/>
                        </div>
                        <div className="form-group">
                            <div className="form-item w-50 pr-8">
                                <label className="input-label">Apellido Paterno</label>
                                <input className="input-text-style" type="text" name="sp_fatherName" onChange={ onInputChange }/>
                            </div>
                            <div className="form-item w-50 pl-8">
                                <label className="input-label">Apellido Materno</label>
                                <input className="input-text-style" type="text" name="sp_motherName" onChange={ onInputChange }/>
                            </div>                
                        </div>
                        <div className="form-group">
                            <div className="form-item w-50 pr-8">
                                <label className="input-label">RUT</label>
                                <input className="input-text-style" type="text" name="rut" value={ rut.formatted } onChange={ (e) => updateRut(e.target.value) }/>
                            </div>
                            <div className="form-item w-50 pl-8">
                                <label className="input-label">Fecha de Nacimiento</label>
                                <input className="input-text-style input-date" type="date" name="sp_birthday" onChange={ onInputChange }/>
                                <span className="input-date-icon"></span>
                            </div>                
                        </div>
                        <div className="form-item">
                            <label className="input-label">Email</label>
                            <input className="input-text-style" type="email" name="sp_email" onChange={ onInputChange }/>
                        </div>
                        <div className="form-group">
                            <div className="form-item w-50 pr-8">
                                <label className="input-label">Región</label>
                                <select className="select-style" name="region" value={regionSeleccionada} onChange={handleRegionSeleccionada}>
                                    <option value="Seleccione una región">Seleccione una región</option>
                                    {regiones.map((region) => (
                                    <option key={region.nombre} value={region.nombre}>
                                        {region.nombre}
                                    </option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-item w-50 pl-8">
                                <label className="input-label">Comuna</label>
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
                            <input className="input-text-style" type="text" name="sp_address" onChange={ onInputChange }/>
                        </div>
                        <div className="form-item phone-code">
                            <label className="input-label">Teléfono</label>
                            <input className="input-text-style phone-code-padding" type="text" maxLength="8" name="sp_phone" onChange={ onInputChange }/>
                        </div>
                        <div className="form-item">
                            <label className="input-label">Género</label>
                            <select className="select-style" name="sp_gender" onChange={ onInputChange }>
                                <option value="Femenino">Femenino</option>
                                <option value="Masculino">Masculino</option>
                                <option value="No binario">No binario</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                        <div className="form-btn">
                            <button className="btn-modal-submit" type="submit" onClick={ () => setOpenModal(false) }>
                                Registrar
                            </button>
                        </div>
                    </div>
                </form>
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
