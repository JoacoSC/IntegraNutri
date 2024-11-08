
export const ModalActionButton = ({ text, className, onClick, type = "button", disabled }) => {
    return (
        <button className={className} type={type} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
};
