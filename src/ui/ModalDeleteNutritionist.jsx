import { useRef, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { CSSTransition } from "react-transition-group";
import { startDeletePatient } from '../store/patients';
import { useForm } from '../hooks';

export const ModalDeleteNutritionist = () => {

    const [openModal, setOpenModal] = useState(false);

    const form = useRef();

    const dispatch = useDispatch();

    const { password, onInputChange } = useForm();

    const deleteAccountSubmit = ( event ) => {
        event.preventDefault();

        dispatch(  )

        // TODO: Continuar con el dispatch para eliminar la cuenta del usuario
        // TODO: Continuar con el dispatch para eliminar la cuenta del usuario
        // TODO: Continuar con el dispatch para eliminar la cuenta del usuario
    }

    const cancelSubmit = ( event ) => {
        event.preventDefault();

        setOpenModal(false);
    }

    return (
        <>
            
            <button className="btn-modal-alt" type="button" onClick={() => setOpenModal(true)}>
                Eliminar
            </button>
            <CSSTransition
                timeout={300}
                classNames="overlay"
            >
                <Modal
                closeTimeoutMS={500}
                isOpen={ openModal }
                ariaHideApp={false}
                className="modal-delete-nutritionist-container"
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
                    <div className="modal-delete-nutritionist-container-form">

                        <p>Por favor, ingrese su contraseña a continuación: </p>

                        <div className="form-item">
                            <label className="input-label">Contraseña</label>
                            <input className="input-text-style" type="password" name="password" onChange={ onInputChange }/>
                        </div>

                        <div className="form-btn-group">
                            <button className="btn-modal-alt" type="submit" onClick={ cancelSubmit }>
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