import { Navigate, useLocation } from "react-router-dom"
import { useAuthContext } from "../hooks";
import { getUrlAndParams } from "../utils";


export const AuthRequire = ({ children }) => {
    const { pathname } = useLocation();
    const { currentUserId } = useAuthContext();

    const { params } = getUrlAndParams();

    if (!currentUserId) {
        return <Navigate to = '/login' state = {{ from: pathname, searchParams: `?${ params }` }}/>
    }

    return children;
}