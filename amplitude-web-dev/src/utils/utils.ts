import { readData, writeData } from './FirebaseHandler';

/**
 * Utility validates given email with regex.
 * @param email - The email to validate.
 * @returns True if the email is valid, false otherwise.
*/
export const validateEmail = (email: string) => {
    if (!email) {
        return false;
    }

    if (!isInputSQLSafe(email)) {
        return false;
    }

    const re = /\S+@\S+\.\S+/;
    if (email) {
        return re.test(email);
    }
    return false;
};

export const validatePassword = (password: string) => {
    if (!password) {
        return false;
    }

    if (!isInputSQLSafe(password)) {
        return false;   
    }

    return true;
}

/**
 * This function checks if the input contains any SQL injection patterns such as ' " ; : ( ) | < >.
 * @param input - The input to validate.
 * @returns True if the input is SQL safe, false otherwise.
 */
export const isInputSQLSafe = (input: string) => {
    const re = /^[^'";:()|<>]*$/;
    return re.test(input);
};

export const userExists = async (email: string) => {
    //FIrebase does not allow '.' in the key, so replace it with '_'
    const emailKey = email.replace(/\./g, '_');
    const data = await readData(`users/${emailKey}`);
    if (data) {
        return true;
    }
    return false;
}