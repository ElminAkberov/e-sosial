import React from 'react';

interface ButtonProps {
    className?: string;
    children: React.ReactNode;
    disabled?: boolean | undefined;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
    className,
    children,
    onClick,
    disabled,
    type = 'button',
}) => {
    return (
        <button
            disabled={disabled}
            className={className}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;
