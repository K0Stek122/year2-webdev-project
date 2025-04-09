import React from 'react';
import LoginContainer from '../components/LoginContainer';
import LoginImage from '../components/LoginImage';
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