import { useRef, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { CSSTransition } from "react-transition-group";
import { startDeleteConsultation } from '../store/patients';



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
            
            <button className="btn-delete" type="button" onClick={() => setOpenModal(true)}>
                Cancelar consulta
            </button>
            <CSSTransition
                timeout={300}
                classNames="overlay"
            >
                <Modal
                closeTimeoutMS={500}
                isOpen={ openModal }
                ariaHideApp={false}
                className="modal-delete-consultation-container"
                >
                <div className="btn-modal-close" onClick={ () => setOpenModal(false) }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6 6 18M6 6l12 12"/>
                    </svg>
                </div>
                <h1 className="modal-header">
                    Cancelar consulta
                </h1>

                <form ref={form}>
                    <div className="modal-delete-consultation-container-form">

                        <p>Está seguro de eliminar la consulta de: <b>{ patient.displayName }</b>?</p>

                        <div className="form-btn-group">
                            <button className="btn-modal-alt" type="submit" onClick={ deleteConsultation }>
                                Eliminar
                            </button>
                            <button className="btn-modal-primary" onClick={ cancelSubmit }>
                                Volver
                            </button>
                        </div>
                    </div>
                </form>
                </Modal>
            </CSSTransition>
        </>
    )
}
