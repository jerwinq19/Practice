import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("access_token");

    if (!token) {
        // No token → send user to login
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;