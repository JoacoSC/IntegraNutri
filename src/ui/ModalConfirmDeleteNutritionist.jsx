import { useRef, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { CSSTransition } from "react-transition-group";
import { startDeletePatient } from '../store/patients';
import { ModalDeleteNutritionist } from './ModalDeleteNutritionist';
import { DeleteButton } from '../common';
import { ModalWrapper } from './components';

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

            <ModalWrapper
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                title="Eliminar cuenta"
            >
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

            </ModalWrapper>
        </>
    )
}