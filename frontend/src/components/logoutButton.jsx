import axiosInstance from "../utils/axios";
import { useNavigate } from "react-router-dom";

const LogoutButton = ({ toast }) => {

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
            toast.success('Logged out successfully!');
            setTimeout(() => navigate('/'), 1000);
        } catch(error) {
            toast.error('Failed to log out. Please try again.');
            console.log(error)
        }
    }


    return (
        <div className=" p-5 sticky bottom-0 lg:left-0 border-t-2 border-gray-300 shadow-xl bg-white flex justify-center items-center">
            <button onClick={() => LogoutHandler()} className=" z-10 -mt-13 lg:mt-0 lg:-mr-13 hover:scale-125  transition-all bg-white border border-gray-700 shadow-xl text-sm w-15 h-15 flex justify-center items-center rounded-full"><img src="./logout.png" alt="" className="w-10 h-10"/></button>
        </div>
    )
}
export default LogoutButton