
import { useState } from 'react';

import CloseIcon from '../../assets/imgs/journal/close-icon.svg';
import './components';

// Componente AlertBox
export const AlertBoxJSX = ({ message, alertClassname, setShowConfirmationModal }) => {
    
    return (
        <div className={`${alertClassname}-box-jsx`}>
            <span className="justified-text">
                {/* Renderiza el mensaje en base a si es un array o JSX */}
                {Array.isArray(message)
                    ? message.map((paragraph, index) => <p key={index}>{paragraph}</p>)
                    : message}
            </span>
            <button onClick={() => setShowConfirmationModal(false)}>
                <img src={ CloseIcon } className="close-icon" />
            </button>
        </div>
    );
};
