import axiosInstance from "../utils/axios";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {

    const navigate = useNavigate()

    // Log out handler
    const LogoutHandler = async () => {
        const refresh_token = localStorage.getItem('refresh_token')
        try {
            console.log(refresh_token)
            const response = await axiosInstance.post('logout/', {"refresh_token": refresh_token})
            console.log(response.data)
            // remove the json web token
            localStorage.removeItem('access_token')
            localStorage.removeItem('refresh_token')
            navigate('/')
        } catch(error) {
            console.log(error)
        }
    }


    return (
        <button onClick={() => LogoutHandler()}>Log out</button>
    )
}

export default LogoutButton