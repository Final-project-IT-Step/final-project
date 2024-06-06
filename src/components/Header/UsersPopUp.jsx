import { useAuthContext } from "../../AuthorizationContext/hooks";
import { PopUpValue } from "./PopUpValue";
import { useInitUsersPopUp } from "./hooks";
import { makeCurrentAvatar } from "./utils";


export const UsersPopUp = () => {
    const { user } = useAuthContext();
    const avatar = makeCurrentAvatar(user?.userName);
    const { popUpHandler, popUp, userSelect, leaveFromAccount } = useInitUsersPopUp(); 

    return (
        <>
            <button className={ `users-area__btn ${ popUp ? 'users-area__btn_active' : ''}` }
                onClick={ popUpHandler }
            >{ avatar }
            </button> 
            { popUp && <PopUpValue data ={{ userSelect, leaveFromAccount, user, popUpHandler }}/>}
        </>
    )
}