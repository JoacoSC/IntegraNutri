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

export const ModalNewConsultation = () => {

    const { uid } = useSelector( state => state.auth );

    const form = useRef();

    const dispatch = useDispatch();

    const [openModal, setOpenModal] = useState(false);

    const { consultationTime, consultationDate, onInputChange } = useForm();

    const onSubmit = ( event ) => {
        event.preventDefault();
        
        console.log({ consultationTime, consultationDate });

        // const formattedBirthday = addDays( set( new Date( birthday ), { hours: 0, minutes: 0, seconds: 0, miliseconds: 0} ), 1 );

        // const unixBirthday = getUnixTime( formattedBirthday );

    }

    return (
        <>
            
            <button className="btn-new-consultation" type="button" onClick={() => setOpenModal(true)}>
                Agendar una hora
            </button>
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
                    Agendar una hora
                </h1>

                <form ref={form} onSubmit={ onSubmit }>
                    <div className="container-form" onSubmit={ onSubmit }>

                        <div className="form-group">
                            <div className="form-item w-50 pr-8">
                                <label className="input-label">Fecha de la consulta</label>
                                <input className="input-text-style input-date" type="date" name="consultationDate" onChange={ onInputChange }/>
                                <span className="input-date-icon"></span>
                            </div>
                            <div className="form-item w-50 pl-8">
                                <label className="input-label">Hora de la consulta</label>
                                <select className="select-style" name="consultationTime" onChange={ onInputChange }>
                                    <option value="8:00">8:00</option>
                                    <option value="9:00">9:00</option>
                                    <option value="10:00">10:00</option>
                                    <option value="11:00">11:00</option>
                                    <option value="12:00">12:00</option>
                                    <option value="13:00">13:00</option>
                                    <option value="14:00">14:00</option>
                                    <option value="15:00">15:00</option>
                                    <option value="16:00">16:00</option>
                                    <option value="17:00">17:00</option>
                                    <option value="18:00">18:00</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="form-btn">
                            <button className="btn-modal-submit" type="submit" onClick={ () => setOpenModal(false) }>
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
