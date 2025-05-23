import React from 'react';
import './css/Button.css';

type ButtonProps = {
    name: string;
    onclick?: () => void;
    width?: string;
    height?: string;
    margin?: string;
};

const Button: React.FC<ButtonProps> = (ButtonProps) => {
    const buttonStyle = {
        width: ButtonProps.width || '10em',
        height: ButtonProps.height || '2em',
        margin: ButtonProps.margin || 'auto',
    };
    return (
        <p 
            className='button' 
            onClick={ButtonProps.onclick} 
            style={buttonStyle}
        >
            {ButtonProps.name}
        </p>
    );
}

export default Button;