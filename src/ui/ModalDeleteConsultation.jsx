import { useRef, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { CSSTransition } from "react-transition-group";
import { startDeleteConsultation } from '../store/patients';
import { DeleteButton } from '../common';
import { ModalWrapper } from './components';



export const ModalDeleteConsultation = ({ patient = {} }) => {

    const [openModal, setOpenModal] = useState(false);

    const form = useRef();

    const dispatch = useDispatch();

    const deleteConsultation = ( event ) => {
        event.preventDefault();

        setOpenModal(false);

        dispatch( startDeleteConsultation( patient.id ) );
        
        // console.log('Consulta cancelada');
    }

    const cancelSubmit = ( event ) => {
        event.preventDefault();

        setOpenModal(false);
        
        // console.log('No hice nada');
    }

    return (
        <>
            
            <DeleteButton text="Cancelar consulta" onClick={() => setOpenModal(true)} />

            <ModalWrapper
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                title="Eliminar consulta"
                footerButtons={[
                    { text: "Eliminar", onClick: deleteConsultation, className: "btn-modal-action-alt" }
                ]}
            >
                <form ref={form}>
                    <div className="modal-delete-consultation-container-form">

                        <p>Está seguro de eliminar la consulta de: <b>{ patient.displayName }</b>?</p>

                        <div className="form-btn-group">
                            {/* <button className="btn-modal-alt" type="submit" onClick={ deleteConsultation }>
                                Eliminar
                            </button>
                            <button className="btn-modal-primary" onClick={ cancelSubmit }>
                                Volver
                            </button> */}
                        </div>
                    </div>
                </form>

            </ModalWrapper>
        </>
    )
}
