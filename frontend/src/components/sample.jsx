import { useState, useEffect } from "react";
import axios from "axios";



const Sample = () => {
    const [name, setName] = useState("")
    const [sample, setSample] = useState([])

    // use effect
    useEffect(() => {
        const fetchNiggass = () => {
            axios.get('http://127.0.0.1:8000/api/sample/')
                .then(res => {
                    setSample(res.data)
                })
        }
        fetchNiggass()
    }, [])

    // handle forms
    const HandleForm = (e) => {
        axios.post('http://127.0.0.1:8000/api/sample/', {
            "name": name
        })
            .then(res => console.log(res))
            .catch((err) => console.log(err))
    }


    return (
        <div>
            {sample.map((niggas, key) => (
                <h1 key={key}>{niggas.name}</h1>
            ))}

            <form onSubmit={HandleForm}>
                <label htmlFor="">Nigga name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default Sample 