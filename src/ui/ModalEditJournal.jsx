import { useState } from "react";
import Modal from 'react-modal';
import { CSSTransition } from "react-transition-group";

import { useForm } from "../hooks";

import './components';

export const ModalEditJournal = () => {

    const [openModal, setOpenModal] = useState(false);

    const { name, onInputChange } = useForm();

    const onSubmit = ( event ) => {
        event.preventDefault();
        console.log({ name });
    }

    return (
        <>
            <button className="btn-edit" type="button" onClick={() => setOpenModal(true)}></button>
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
                    Editar agenda de consultas
                </h1>

                <form onSubmit={ onSubmit }>
                    <div className="container-form" onSubmit={ onSubmit }>

                        <div className="form-item">
                            <label className="input-label"></label>
                            <input className="input-text-style" type="text" name="name" onChange={ onInputChange }/>
                        </div>
                        <div className="form-btn">
                            <button className="btn-modal-submit" type="submit" onClick={ () => setOpenModal(false) }>
                                Registrarse
                            </button>
                        </div>
                    </div>
                </form>
                </Modal>
            </CSSTransition>
        </>
    )
}
