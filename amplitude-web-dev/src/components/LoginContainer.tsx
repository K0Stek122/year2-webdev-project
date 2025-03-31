import React from 'react';
import './css/LoginContainer.css';

const LoginContainer: React.FC = () => {

    const validateEmail = (email: string) => {
        const re = /\S+@\S+\.\S+/;
        if (email) {
            return re.test(email);
        }
        return false;
    };

    const preventSQLInjection = (input: string) => {
        const re = /^[^'";:()|<>]*$/;
        return re.test(input);
    };

    const handleRegister = () => {
        const emailInput = document.getElementById('email') as HTMLInputElement;
        if (validateEmail(emailInput.value) && preventSQLInjection(emailInput.value)) {
            console.log('Register');
        }
        else {
            alert('Invalid email');
        }
    };

    const handleLogin = () => {
        const emailInput = document.getElementById('email') as HTMLInputElement;
        if (validateEmail(emailInput.value) && preventSQLInjection(emailInput.value)) {
            console.log('Login');
        }
        else {
            alert('Invalid email');
        }
    };

    return (
        <div className="login-container">
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required />
            </div>
            <div className="form-actions">
                <p className="button" onClick={handleRegister}>Register</p>
                <p className="button" onClick={handleLogin}>Login</p>
            </div>
        </div>
    );
};

export default LoginContainer;