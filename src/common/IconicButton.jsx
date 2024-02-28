
export const IconicButton = ({ text, onClick, type = "button", Icon }) => {
    return (
        <button className="btn-iconic" type={type} onClick={onClick}>
            {Icon && <img src={Icon} alt="" className="btn-icon" />}
            {text}
        </button>
    );
};
