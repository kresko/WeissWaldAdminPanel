import { useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    console.log(children);
    const { user } = useContext(AuthContext);
    return user?.loggedIn ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
