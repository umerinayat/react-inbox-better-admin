import axios from 'axios';
 
const baseUrl = process.env.REACT_APP_INBOX_BETTER_API_URL;

// axios.defaults.withCredentials = true;


// login
const login = async (loginForm) => {
    try {
        const response = await axios.post(
            `${baseUrl}/login`,
            loginForm
        );
        return response.data.data;
    } catch (e) {
        throw e;
    }
};


export { login };