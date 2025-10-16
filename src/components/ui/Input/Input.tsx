import type React from 'react';

interface InputProps {
    type: string;
    id: string;
    placeholder: string;
    className: string;
}

const Input: React.FC<Partial<InputProps>> = ({
    type,
    id,
    placeholder,
    className,
}) => {
    return (
        <input
            className={className}
            type={type}
            id={id}
            placeholder={placeholder}
        />
    );
};

export default Input;
