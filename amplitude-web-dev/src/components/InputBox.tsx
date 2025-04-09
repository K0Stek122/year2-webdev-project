import React from 'react';
import './css/inputBox.css';

type InputBoxProps = {
    placeholder?: string;
    censored?: boolean;
    width?: string;
    height?: string;
    margin?: string;
    value: string;
    onChange: (value: string) => void;
};

const InputBox: React.FC<InputBoxProps> = (InputBoxProps) => {
    const inputBoxStyle = {
        width: InputBoxProps.width || '15em',
        height: InputBoxProps.height || '2em',
        margin: InputBoxProps.margin || 'auto',
    }
    return (
        <input
            type={InputBoxProps.censored ? 'password' : 'text'}
            placeholder={InputBoxProps.placeholder ? InputBoxProps.placeholder : ''}
            className="input-box"
            style={inputBoxStyle}
            value={InputBoxProps.value}
            onChange={(e) => InputBoxProps.onChange(e.target.value)} // Update the value on change
        />
    );
}

export default InputBox;