import React from 'react';

import './css/LoginContainer.css';
import { getDatabase, connectDatabaseEmulator, ref, set, get, child } from "firebase/database";
import { initializeApp } from 'firebase/app';
import { readData, writeData } from '../FirebaseHandler';

const LoginContainer: React.FC = () => {

    const getFirebaseDatabase = () => {
        const app = initializeApp({
            projectId: 'amplitude-6d655',
        });

        connectDatabaseEmulator(getDatabase(app), 'localhost', 9000);
        return getDatabase(app);
    }

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
        const passwordInput = document.getElementById('password') as HTMLInputElement;
        if (!emailInput || !passwordInput) {
            alert('Email or password input is missing');
            return;
        }
        if (!validateEmail(emailInput.value) || !preventSQLInjection(emailInput.value)) {
            alert('Invalid email');
            return;
        }

        if (!passwordInput || !preventSQLInjection(passwordInput.value)) {
            alert('Invalid password');
            return;
        }

        //FIrebase does not allow '.' in the key, so replace it with '_'

        // Make sure the user doesn't already exist, if they do, alert the user, otherwise write the user to the database
        readData('users').then((data) => {
            if (data) {
                const users = Object.keys(data);
                if (users.includes(emailInput.value)) {
                    alert('User already exists');
                    return;
                }
            }
            writeData(`users/${emailInput.value.replace(/\./g, '_')}`, { email: emailInput.value, password: passwordInput.value });
            alert('User registered successfully');
            return;
        });
    };

    const handleLogin = () => {
        const emailInput = document.getElementById('email') as HTMLInputElement;
        const passwordInput = document.getElementById('password') as HTMLInputElement;
        if (!emailInput || !passwordInput) {
            alert('Email or password input is missing');
            return;
        }
        if (!validateEmail(emailInput.value) || !preventSQLInjection(emailInput.value)) {
            alert('Invalid email');
            return;
        }
        if (!passwordInput || !preventSQLInjection(passwordInput.value)) {
            alert('Invalid password');
            return;
        }

        //FIrebase does not allow '.' in the key, so replace it with '_'
        readData(`users/${emailInput.value.replace(/\./g, '_')}`).then((data) => {
            if (data) {
                if (data.password === passwordInput.value) {
                    alert('User logged in successfully');
                    return;
                }
            }
            alert('Invalid email or password');
            return;
        });
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