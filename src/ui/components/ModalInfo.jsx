import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import CloseIcon from '../../../assets/imgs/journal/close-icon.svg';
import { CSSTransition } from "react-transition-group";

export const ModalInfo = () => {

    const customStyles = {
        overlay: {
          backgroundColor: 'transparent'
        }
    };

    // Obtén la suscripción del store
    const subscription = useSelector(state => state.subscription);

    // Inicializa el estado del modal en base a la suscripción
    const [isOpen, setIsOpen] = useState(false);

    // Actualiza el estado del modal cuando cambia la suscripción
    useEffect(() => {
        setIsOpen(!subscription.isActive);
    }, [subscription]);

    return (
        <>
            <CSSTransition
                timeout={300}
                classNames="overlay"
            >
                <Modal
                className={{
                    base: 'modal-info-container',
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
                <div className="modal-info">
                    <span style={{ textAlign: 'center' }}>
                        <p>¡Bienvenido a nuestra aplicación!</p>
                        <p>¿Quieres probar todas nuestras funciones premium? ¡Regístrate ahora y obtén <strong>7 días de prueba gratis</strong>! 🎉</p>
                        <p>¡Esperamos que disfrutes de la experiencia! 😊</p>
                    </span>
                    <button onClick={() => setIsOpen(false)}>
                        <img src={CloseIcon} className="close-icon" alt="Close icon" />
                    </button>
                </div>
                </Modal>
            </CSSTransition>
        </>
    );
};