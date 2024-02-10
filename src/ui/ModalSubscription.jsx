import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import CloseIcon from '../../assets/imgs/journal/close-icon.svg';
import { CSSTransition } from "react-transition-group";

export const ModalSubscription = () => {

    const customStyles = {
        overlay: {
          backgroundColor: 'transparent'
        }
    };

    // Obtén la suscripción del store
    const subscription = useSelector(state => state.subscription);

    // Inicializa el estado del modal en base a la suscripción
    const [isOpen, setIsOpen] = useState(!subscription.isActive && subscription.message !== '');

    // Actualiza el estado del modal cuando cambia la suscripción
    useEffect(() => {
        setIsOpen(!subscription.isActive && subscription.message !== '');
    }, [subscription]);

    return (
        <>
            <CSSTransition
                timeout={300}
                classNames="overlay"
            >
                <Modal
                className={{
                    base: 'modal-subscription-container',
                    afterOpen: 'my_after_open',
                    beforeClose: 'my_before_close'
                    }}
                overlayClassName="overlay-transparent"
                closeTimeoutMS={500}
                ariaHideApp={false}
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                contentLabel="Subscription Modal"
                >
                <div className="modal-alert-box">
                    <span>{subscription.message}</span>
                    <button onClick={() => setIsOpen(false)}>
                        <img src={CloseIcon} className="close-icon" alt="Close icon" />
                    </button>
                </div>
                </Modal>
            </CSSTransition>
        </>
    );
};