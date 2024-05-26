import { Navigate, useLocation } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext";

export const AuthRequire = ({ children }) => {
    const { pathname } = useLocation();
    const { user } = useAuthContext();

    if (!user) {
        return <Navigate to = '/login' state = {{ from: pathname }}/>
    }

    return children;
}