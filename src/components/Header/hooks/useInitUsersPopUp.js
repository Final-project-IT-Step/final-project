import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../AuthorizationContext/hooks/useAuthContext";

export const useInitUsersPopUp = () => {
    const { signOut } = useAuthContext();
    const navigate = useNavigate();
    const [ popUp, setPopUp ] = useState(false)

    const popUpHandler = () => {
        setPopUp(prev => !prev);
    }

    const userSelect = [
        { id: '1', title: 'Моя сторінка' }
    ]
    const leaveFromAccount = () => {
        signOut(() => {
            navigate('/', { replace: true })
            localStorage.removeItem('user');
        })
    }

    return { popUpHandler, popUp, userSelect, leaveFromAccount }
}