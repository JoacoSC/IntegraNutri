
export const ModalActionButton = ({ text, className, onClick, type = "button" }) => {
    return (
        <button className={className} type={type} onClick={onClick}>
            {text}
        </button>
    );
};
