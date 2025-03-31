import React from 'react';
import './css/LogoSearchLogin.css';
import { useNavigate } from 'react-router-dom';

const LogoSearchLogin: React.FC = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };
    return (
        <div className="logo-search-login">
            <p>Logo</p>
            <input type="text" placeholder="Search..." className="search-box" />
            <p className="login" onClick={handleLoginClick}>Login / Sign Up</p>
        </div>
    );
};

export default LogoSearchLogin;