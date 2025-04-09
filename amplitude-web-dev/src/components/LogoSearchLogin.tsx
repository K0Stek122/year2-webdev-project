import React from 'react';
import './css/LogoSearchLogin.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Button from './Button'
import InputBox from './InputBox';

const LogoSearchLogin: React.FC = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (value: string) => {
        setInputValue(value);
    }
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };
    return (
        <div className="logo-search-login">
            <p>Logo</p>
            <InputBox placeholder="Search..." value={inputValue} onChange={handleInputChange} width="50%" />
            <Button name="Login / Sign Up" onclick={handleLoginClick} />
        </div>
    );
};

export default LogoSearchLogin;