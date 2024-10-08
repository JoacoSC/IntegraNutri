import { useState } from 'react';
import Modal from 'react-modal';
import { CSSTransition } from "react-transition-group";

import './components';
import { ModalWrapper } from './components';
import { SmallButton } from '../common';

export const ModalWelcome = () => {

    const [openWelcomeModal, setOpenWelcomeModal] = useState(true);
    const [openModal, setOpenModal] = useState(false);

    const onModalWelcomeOpen = () => {

        setOpenWelcomeModal(true)
    }

    const onModalWelcomeClose = () => {

        setOpenWelcomeModal(false)
    }

    return (
        <>
            {/* <SmallButton text="Test" onClick={() => setOpenModal(true)} /> */}
            <ModalWrapper
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                title="Bienvenido a IntegraNutri! 😀"
            >
                <div className="welcome-modal-img">
                    <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" fill="none" viewBox="0 0 45 45">
                        <path fill="#E32C2C" stroke="#E32C2C" strokeWidth="2" d="m11.796 26.33 9.61 9.027c.325.305.487.457.685.457.198 0 .36-.152.685-.457l9.61-9.028a7.095 7.095 0 0 0 .747-9.52l-.422-.544c-2.683-3.46-8.07-2.88-9.956 1.072a.735.735 0 0 1-1.328 0c-1.886-3.951-7.273-4.532-9.957-1.072l-.422.543a7.096 7.096 0 0 0 .748 9.521Z"/>
                        <path stroke="#FFBCB1" strokeLinecap="round" strokeWidth="2" d="M10.636 25.364c2.864-1.637 3.682-5.728 5.319-5.728 2.454 0 2.045 5.728 5.727 5.728 2.045 0 4.909-3.682 6.954-3.682 2.046 0 3.682 2.454 5.728 1.636"/>
                    </svg>

                </div>
                <div className="welcome-modal-body">
                    <p className="welcome-modal-content">
                        Para comenzar, por favor configura los horarios de tu agenda
                    </p>
                </div>
            </ModalWrapper>
        </>
    )
}
