import React from 'react';
import LoginContainer from './LoginContainer';
import LoginImage from './LoginImage'
import './css/LoginPage.css';

const LoginPage: React.FC = () => {
    return (
        <div className="login-page">
            <LoginImage />
            <LoginContainer />
        </div>
    );
};

export default LoginPage;