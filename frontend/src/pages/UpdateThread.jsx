import axiosInstance from "../utils/axios"
import { useState } from "react"

const UpdateThread = () => {
    const [test, setTest] = useState('')


    const testing = async () => {
        const access_token = localStorage.getItem('access_token')

        const res = await axiosInstance.put(`thread/1/`, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            }
        })
        console.log(res.data)
    }

    return (
        <div>UpdateThread</div>
    )
}

export default UpdateThread