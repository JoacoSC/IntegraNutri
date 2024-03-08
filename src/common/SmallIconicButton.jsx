
export const SmallIconicButton = ({ text, onClick, type = "button", icon, imgStyle = {} }) => {
    return (
        <button className="btn-iconic-sm" type={type} onClick={onClick}>
            {icon && <img src={icon} alt="" className="btn-icon-sm" style={imgStyle} />}
            {text}
        </button>
    );
};