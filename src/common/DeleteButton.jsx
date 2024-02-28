

export const DeleteButton = ({ text, onClick = () => {} }) => {
    return (
        <button className="btn-delete" type="button" onClick={onClick}>
            {text}
        </button>
    );
};
