
export const SmallIconicButton = ({ text, onClick, type = "button", Icon }) => {
    return (
        <button className="btn-iconic-sm" type={type} onClick={onClick}>
            {Icon && <img src={Icon} alt="" className="btn-icon-sm" />}
            {text}
        </button>
    );
};