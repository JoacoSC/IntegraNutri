import { useRef, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { CSSTransition } from "react-transition-group";
import { startDeletePatient } from '../store/patients';
import { ModalDeleteNutritionist } from './ModalDeleteNutritionist';
import { DeleteButton } from '../common';

export const ModalConfirmDeleteNutritionist = () => {

    const [openModal, setOpenModal] = useState(false);

    const form = useRef();

    const dispatch = useDispatch();

    
    const cancelSubmit = ( event ) => {
        event.preventDefault();

        setOpenModal(false);
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
                className="modal-confirm-delete-nutritionist-container"
                >
                <div className="btn-modal-close" onClick={ () => setOpenModal(false) }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6 6 18M6 6l12 12"/>
                    </svg>
                </div>
                <h1 className="modal-header">
                    Eliminar cuenta
                </h1>

                <form ref={form}>
                    <div className="modal-confirm-delete-nutritionist-container-form">

                        <p>¿Está seguro de eliminar su cuenta permanentemente?, esto provocará que se elimine toda la información de su cuenta.</p>
                        <p><b>Esta acción no se puede deshacer.</b></p>

                        <div className="form-btn-group">
                            <ModalDeleteNutritionist/>
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