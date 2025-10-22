import axios from "axios";
import { useState, useEffect } from "react";


const Example = () => {
    const [username, setUsername] = useState("")
    const [password, setpassword] = useState("")
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [email, setEmail] = useState("")


    const RegisterHandler = (e) => {
        e.preventDefault()
        const data = {
            "username": username,
            "password": password,
            "firstname": firstName,
            "lastname": lastName,
            "email": email
        }

        axios.post('http://127.0.0.1:8000/api/register/', data)
            .then(res => console.log(res.data))
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <form onSubmit={RegisterHandler}>
                <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input type="password" placeholder="password" value={password} onChange={(e) => setpassword(e.target.value)}/>
                <input type="text" placeholder="firstname" value={firstName} onChange={(e) => setfirstName(e.target.value)}/> 
                <input type="text" placeholder="lastname" value={lastName} onChange={(e) => setlastName(e.target.value)}/> 
                <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/> 

                <button>submit</button>
            </form>

        </div>
    )
}

export default Example