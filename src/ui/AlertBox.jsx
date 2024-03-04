
import { useState } from 'react';

import CloseIcon from '../../assets/imgs/journal/close-icon.svg';
import './components';

// Componente AlertBox
export const AlertBox = ({ message, alertClassname }) => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) {
        return null;
    }

    return (
        <div className={`${alertClassname}-box`}>
            <span>{message}</span>
            <button onClick={() => setIsVisible(false)}>
                <img src={ CloseIcon } className="close-icon" />
            </button>
        </div>
    );
};
