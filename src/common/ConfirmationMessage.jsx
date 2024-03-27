export const ConfirmationMessage = ({ message }) => {
    const { text, type } = message;
    const messageClass = type === 'error' ? 'error-message' : 'success-message';
  
    return (
      <div>
        {text && <div className={messageClass}>{text}</div>}
      </div>
    );
  };
  