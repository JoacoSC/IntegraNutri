import './LoadingButtonStyles.scss';

export const LoadingButton = ({ text, onClick, className, disabled }) => (
    <button className={className} onClick={onClick} disabled={disabled} style={{ position: 'relative' }}>
        {disabled ? (
            <div className="loading-button-animation">
                <div className="loading__dot"></div>
                <div className="loading__dot"></div>
                <div className="loading__dot"></div>
            </div>
        ) : (
            text
        )}
    </button>
);
