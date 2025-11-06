import { useNavigate } from "react-router-dom"


const ProfileButton = () => {
    const navigate = useNavigate()

    return (
        <button onClick={() => navigate('/profile/')}>profile button</button>
    )
}

export default ProfileButton