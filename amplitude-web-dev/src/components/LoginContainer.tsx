import { useState } from 'react';

import './css/LoginContainer.css';
import { readData, writeData } from '../utils/FirebaseHandler';
import { validateEmail, validatePassword, isInputSQLSafe } from '../utils/utils';
import Button from './Button';
import InputBox from './InputBox';

//PCI-DSS

const LoginContainer: React.FC = () => {

    const [account, setAccount] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('')

    const handleEmailChange = (value: string) => {
        setEmailInput(value);
    }

    const handlePasswordChange = (value: string) => {
        setPasswordInput(value);
    }

    const validateUserInput = () => {
        if (account !== '') { //This Should NEVER happen
            alert('User already logged in');
            return;
        }

        if (!validateEmail(emailInput) || !isInputSQLSafe(emailInput)) {
            alert('Invalid email');
            return false;
        }
        if (!validatePassword(passwordInput) || !isInputSQLSafe(passwordInput)) {
            alert('Invalid password');
            return false;
        }
        return true;
    }

    const handleRegister = () => {
        if (!validateUserInput()) {
            return;
        }

        //FIrebase does not allow '.' in the key, so replace it with '_'
        // Make sure the user doesn't already exist, if they do, alert the user, otherwise write the user to the database
        readData('users').then((data) => {
            if (data) {
                const users = Object.keys(data);
                if (users.includes(emailInput.replace(/\./g, '_'))) {
                    alert('User already exists');
                    return;
                }
            }
            writeData(`users/${emailInput.replace(/\./g, '_')}`, { email: emailInput, password: passwordInput });
            alert('User registered successfully');
            setAccount(emailInput);
            return;
        });
    };

    const handleLogin = () => {
        if (!validateUserInput()) {
            return;
        }

        //FIrebase does not allow '.' in the key, so replace it with '_'
        readData(`users/${emailInput.replace(/\./g, '_')}`).then((data) => {
            if (data) {
                if (data.password === passwordInput) {
                    setAccount(emailInput);
                    return;
                }
            }
            alert('Invalid email or password');
            return;
        });
    };

    return (
        <div className="login-container">
            {account === '' ? (
            <>
                <InputBox placeholder="Enter your email" value={emailInput} onChange={handleEmailChange} />
                <InputBox placeholder="Enter your password" censored={true} value={passwordInput} onChange={handlePasswordChange} />
                <Button name="Register" onclick={handleRegister} />
                <Button name="Login" onclick={handleLogin} />
            </>
            ) : (
            <div className="welcome-message">
                <p>You are logged in as: <b>{account}</b>.</p>
                <Button name="Log Out" onclick={() => setAccount('')} />
            </div>
            )}
        </div>
    );
};

export default LoginContainer;