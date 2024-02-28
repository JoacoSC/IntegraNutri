
export const SmallButton = ({ text, onClick, type = "button" }) => {
    return (
        <button className="btn-sm" type={type} onClick={onClick}>
            {text}
        </button>
    );
};
