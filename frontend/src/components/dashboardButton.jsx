import { useNavigate } from "react-router-dom"


const DashBoardButton = () => {
    const navigate = useNavigate()

    return (
        <button onClick={() => navigate('/dashboard/')}>Dashboard Btn</button>
    )
}

export default DashBoardButton