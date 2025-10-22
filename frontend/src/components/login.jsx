import axios from "axios";
import { useState, useEffect } from "react";

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const LoginHandler = (e) => {
        e.preventDefault()
        const data = {
            "username": username,
            "password": password
        }

        axios.post('http://127.0.0.1:8000/api/login/', data)
            .then(res => {
                console.log(res.data)
                console.log("it work")
            })
            .catch((error) => {
                console.log(error)
            })
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