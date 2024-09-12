import { useRef, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { CSSTransition } from "react-transition-group";
import { startDeletePatient } from '../store/patients';
import { DeleteButton } from '../common';
import { ModalWrapper } from './components';

export const ModalDeletePatient = ({ displayName, patientID }) => {

    const [openModal, setOpenModal] = useState(false);

    const form = useRef();

    const dispatch = useDispatch();

    const deletePatient = ( event ) => {
        event.preventDefault();

        setOpenModal(false);

        dispatch( startDeletePatient( patientID ) )
        
        // console.log('Paciente eliminado');
    }

    const cancelSubmit = ( event ) => {
        event.preventDefault();

        setOpenModal(false);
        
        // console.log('No hice nada');
    }

    return (
        <>
            
            <DeleteButton text="Eliminar" onClick={() => setOpenModal(true)} />

            <ModalWrapper
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                title="Eliminar paciente"
                footerButtons={[
                    { text: "Eliminar", onClick: deletePatient, className: "btn-modal-action-alt" }
                ]}
            >

                <form ref={form}>
                    <div className="modal-delete-patient-container-form">

                        <p>Está seguro de eliminar al paciente: <b>{ displayName }</b>?</p>

                        <div className="form-btn-group">
                            {/* <button className="btn-modal-alt" type="submit" onClick={ deletePatient }>
                                Eliminar
                            </button>
                            <button className="btn-modal-primary" onClick={ cancelSubmit }>
                                Cancelar
                            </button> */}
                        </div>
                    </div>
                </form>
            </ModalWrapper>
        </>
    )
}
