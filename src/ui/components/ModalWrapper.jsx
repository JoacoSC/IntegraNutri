import Modal from 'react-modal';
import { CSSTransition } from "react-transition-group";
import { SmallButton } from '../../common';
import { ModalActionButton } from './ModalActionButton';

export const ModalWrapper = ({ isOpen, onClose, title, children, footerButtons }) => {
    return (
        <CSSTransition
            in={isOpen}
            timeout={300}
            classNames="overlay"
            unmountOnExit
        >
            <Modal
                closeTimeoutMS={500}
                isOpen={isOpen}
                onRequestClose={onClose}
                ariaHideApp={false}
                className="modal-container"
                // overlayClassName="modal-overlay"
            >
                
                {title && <div className="modal-header">
                    <h1>
                        {title}
                    </h1>
                    <div className="btn-modal-close" onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6 6 18M6 6l12 12" />
                        </svg>
                    </div>
                </div>}
                
                <div className="modal-content">
                    {children}
                </div>

                {/* Espacio opcional en el pie del modal */}
                {footerButtons && (
                    <div className="modal-footer">
                        

                        
                        <ModalActionButton 
                            className="btn-modal-cancel"
                            text="Cancelar"
                            onClick={onClose}
                        />
                        {footerButtons.map((button, index) => (
                            <ModalActionButton
                                key={index}
                                className={button.className}
                                text={button.text}
                                onClick={button.onClick}
                            />
                        ))}
                    </div>
                )}
            </Modal>
        </CSSTransition>
    );
};
