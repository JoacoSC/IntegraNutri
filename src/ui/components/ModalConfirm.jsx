import { useRef, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { CSSTransition } from "react-transition-group";


export const ModalConfirm = ({
    modalHeaderText = '',
    modalBodyText = '',
    modalButton1Text = '',
    modalButton1Class = 'alt',
    modalButton2Text = '',
    modalButton2Class = 'primary',
    openModal,
    setOpenModal,
    onConfirm,
}) => {

    const form = useRef();
    
    const dispatch = useDispatch();
    
    const cancelSubmit = ( event ) => {
    event.preventDefault();
    
    setOpenModal(false);
    }

    const confirmSubmit = ( event ) => {
        event.preventDefault();
        
        onConfirm();
    }
    
    return (
        <>
        
            <CSSTransition
            timeout={300}
            classNames="overlay"
            >
                <Modal
                closeTimeoutMS={500}
                isOpen={ openModal }
                ariaHideApp={false}
                className="modal-confirm"
                >
                    <div className="btn-modal-close" onClick={ () => setOpenModal(false) }>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6 6 18M6 6l12 12"/>
                        </svg>
                    </div>
                    <h1 className="modal-header">
                        { modalHeaderText }
                    </h1>
                    
                    <form ref={form}>
                        <div className="modal-confirm-form">
                        
                            { modalBodyText }
                            
                            <div className="modal-form-btn-group">
                                <button className={`btn-modal-${ modalButton1Class }`} onClick={ confirmSubmit }>
                                    { modalButton1Text }
                                </button>
                                <button className={`btn-modal-${ modalButton2Class }`} onClick={ cancelSubmit }>
                                    { modalButton2Text }
                                </button>
                            </div>
                        </div>
                    </form>
                </Modal>
            </CSSTransition>
        </>
    )
}