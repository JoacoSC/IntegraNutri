
import { useState } from 'react';

import CloseIcon from '../../assets/imgs/journal/close-icon.svg';
import './components';

// Componente AlertBox
export const AlertBox = ({ message, alertClassname }) => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) {
        return null;
    }

    // Reemplaza los saltos de línea con el elemento <br />
    const messageLines = message.split('\n').map((line, index) => <p key={index}>{line}<br /></p>);

    return (
        <div className={`${alertClassname}-box`}>
            <span className="justified-text">{messageLines}</span>
            <button onClick={() => setIsVisible(false)}>
                <img src={ CloseIcon } className="close-icon" />
            </button>
        </div>
    );
};
