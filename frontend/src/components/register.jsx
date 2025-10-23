import { useState, useEffect } from "react";
import axiosInstance from "../utils/axios";

const Example = () => {
    const [username, setUsername] = useState("")
    const [password, setpassword] = useState("")
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [email, setEmail] = useState("")

    const RegisterHandler = async (e) => {
        e.preventDefault()
        const data = {
            "username": username,
            "password": password,
            "email": email,
            "first_name": firstName,
            "last_name": lastName
        }

        console.log(data)

        try {
            const res = await axiosInstance.post('user/', data) 
            console.log(res.data)
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div>
            <form onSubmit={RegisterHandler}>
                <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input type="password" placeholder="password" value={password} onChange={(e) => setpassword(e.target.value)}/>
                <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/> 
                <input type="text" placeholder="firstname" value={firstName} onChange={(e) => setfirstName(e.target.value)}/> 
                <input type="text" placeholder="lastname" value={lastName} onChange={(e) => setlastName(e.target.value)}/> 

                <button>submit</button>
            </form>
        </div>
    )
}

export default Example