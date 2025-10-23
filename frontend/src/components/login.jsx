import { useState, useEffect } from "react";
import axiosInstance from "../utils/axios";
const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const LoginHandler = async (e) => {
        e.preventDefault()

        const data = {
            "username": username,
            "password": password
        }
        try{
            const res = await axiosInstance.post('token/', data)
            // store the jwt access and refresh token to the local storage
            localStorage.setItem('access_token', res.data.access)
            localStorage.setItem('refresh_token', res.data.refresh)
        }
        catch(error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form onSubmit={LoginHandler}>
                <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button>submit</button>
            </form>
        </div>
    )
}

export default Login