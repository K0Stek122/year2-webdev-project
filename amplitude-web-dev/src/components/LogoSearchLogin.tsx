import React from 'react';
import './css/LogoSearchLogin.css';

const LogoSearchLogin: React.FC = () => {
    return (
        <div className="logo-search-login">
            <p>Logo</p>
            <input type="text" placeholder="Search..." className="search-box" />
        </div>
    );
};

export default LogoSearchLogin;