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

export const ModalNewConsultation = ({ consultationSlot }) => {

    const { uid } = useSelector( state => state.auth );

    const { patients } = useSelector( state => state.patients );

    const [currentPatient, setCurrentPatient] = useState()

    const dispatch = useDispatch();

    const [openModal, setOpenModal] = useState(false);

    const { consultationTime, consultationDate, onInputChange } = useForm();

    const { isValid, rut, updateRut } = useRut();

    const onSubmit = ( event ) => {
        event.preventDefault();

        console.log('first')
        
        // console.log({ consultationTime, consultationDate });

        // const formattedBirthday = addDays( set( new Date( birthday ), { hours: 0, minutes: 0, seconds: 0, miliseconds: 0} ), 1 );

        // const unixBirthday = getUnixTime( formattedBirthday );

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

        console.log(tempPatient)
    }

    

    // console.log( fromUnixTime(consultationSlot) )

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
                    <div className="container-form">

                        <div className="form-group">
                            <div className="form-item input-rut">
                                <label className="input-label">RUT</label>
                                <input className="input-text-style" type="text" name="rut" value={ rut.formatted } onChange={ (e) => updateRut(e.target.value) }/>
                            </div>
                            <button className="btn-new-consultation" type="submit">
                                Consultar
                            </button>                
                        </div>                        
                    </div>
                </form>
                <form>
                    <div className="container-form">

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
                            <button className="btn-modal-submit" type="submit" onClick={ () => setOpenModal(false) } disabled>
                                Registrar
                            </button>
                        </div>
                    </div>
                </form>
                </Modal>
            </CSSTransition>
        </>
    )
}
