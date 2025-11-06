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


axiosInstance.interceptors.response.use(
    (res) => res,
    async (err) => {
        const origReq = err.config;

        // Check if access token expired
        if (err.response?.status === 401 && !origReq._retry) {
            origReq._retry = true;

            const refresh_token = localStorage.getItem("refresh_token");

            try {
                // Get new access token
                const res = await axiosInstance.post("/token/refresh/", {
                    refresh: refresh_token,
                });

                const newAccess = res.data.access;

                // Save new access token
                localStorage.setItem("access_token", newAccess);

                // Update the request header and retry
                origReq.headers.Authorization = `Bearer ${newAccess}`;

                return axiosInstance(origReq);
            } catch (refreshErr) {
                // refresh token also expired → logout
                console.log(refreshErr)
                localStorage.clear();
                window.location.href = "/login";
            }
        }
        return Promise.reject(err);
    }
);


export default axiosInstance