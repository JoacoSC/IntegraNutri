import { useRef, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { CSSTransition } from "react-transition-group";
import { startDeletePatient } from '../store/patients';
import { DeleteButton } from '../common';

export const ModalDeletePatient = ({ displayName, patientID }) => {

    const [openModal, setOpenModal] = useState(false);

    const form = useRef();

    const dispatch = useDispatch();

    const deletePatient = ( event ) => {
        event.preventDefault();

        setOpenModal(false);

        dispatch( startDeletePatient( patientID ) )
        
        console.log('Paciente eliminado');
    }

    const cancelSubmit = ( event ) => {
        event.preventDefault();

        setOpenModal(false);
        
        console.log('No hice nada');
    }

    return (
        <>
            
            <DeleteButton text="Eliminar" onClick={() => setOpenModal(true)} />

            <CSSTransition
                timeout={300}
                classNames="overlay"
            >
                <Modal
                closeTimeoutMS={500}
                isOpen={ openModal }
                ariaHideApp={false}
                className="modal-delete-patient-container"
                >
                <div className="btn-modal-close" onClick={ () => setOpenModal(false) }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6 6 18M6 6l12 12"/>
                    </svg>
                </div>
                <h1 className="modal-header">
                    Eliminar paciente
                </h1>

                <form ref={form}>
                    <div className="modal-delete-patient-container-form">

                        <p>Está seguro de eliminar al paciente: <b>{ displayName }</b>?</p>

                        <div className="form-btn-group">
                            <button className="btn-modal-alt" type="submit" onClick={ deletePatient }>
                                Eliminar
                            </button>
                            <button className="btn-modal-primary" onClick={ cancelSubmit }>
                                Cancelar
                            </button>
                        </div>
                    </div>
                </form>
                </Modal>
            </CSSTransition>
        </>
    )
}
