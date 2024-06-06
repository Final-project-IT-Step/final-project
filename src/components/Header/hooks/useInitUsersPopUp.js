import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../AuthorizationContext/hooks";
import { useShopContext } from "../../Shop/hooks";

export const useInitUsersPopUp = () => {
    const { signOut, user } = useAuthContext();
    const { cart = [] } = useShopContext();
    const navigate = useNavigate();
    const [ popUp, setPopUp ] = useState(false)
    const currentOrderLink = cart.length ? '/order/pickup' : '/order'

    const popUpHandler = () => {
        setPopUp(prev => !prev);
    }

    const userSelect = [
        { id: '1', title: 'Моя сторінка', link: `/${user?.userName}` },
        { id: '2', title: 'Замовлення', link: currentOrderLink }
    ]
    const leaveFromAccount = () => {
        signOut(() => {
            navigate('/', { replace: true })
            localStorage.removeItem('user');
        })
    }

    return { popUpHandler, popUp, userSelect, leaveFromAccount }
}