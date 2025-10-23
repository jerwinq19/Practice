import axios from "axios";

/*
    so ang ginagawa ng axiosinstance is para di mo na ulit ulitin yung mga 
    mahahabang part so like url so ang gagagwin mo nalagn is 
    -> axiosInstance.post('token', {"username": username, "password": password}) 
    then mag return na siya ng token.
*/


const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default axiosInstance