import { useEffect, useRef } from 'react';

export const AutoResizeTextarea = ({ value, onChange, disabled, placeholder = '' }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

    return (
        <textarea
        placeholder={placeholder}
        ref={textareaRef}
        value={value}
        onChange={onChange}
        disabled={disabled}
        style={{
            padding: '8px 10px',
            textAlign: 'justify',
            width: '100%'
            }}
        />
    );
};