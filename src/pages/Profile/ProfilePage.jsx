
import { useCheckUser } from "../../components/Profile/hooks/useCheckUser";
import { makeCurrentAvatar } from "../../components/Header/utils/makeCurrentAvatar";
import { useEscortToComponent } from "../../components/Authorization/hooks/useEscortToComponent";
import { ProfileInfoList } from "../../components/Profile/ProfileInfoList";
import { getUsersPrivilage } from "../../components/HomePage/Comments/utils/getUsersPrivilage";
import { useState } from "react";
import { Page404 } from "../Page404";
import { History } from "../../components/Profile/History";
import { useShopContext } from "../../components/Shop/hooks";

export const ProfilePage = () => {
    const { isGuest, currentUser, isLoading, data } = useCheckUser();
    const userName = currentUser?.userName;
    const { orders } = useShopContext();
    const currentPrivilege = getUsersPrivilage(currentUser?.userPrivilege)
    const avatar = makeCurrentAvatar(userName)
    const { destination } = useEscortToComponent(data);
    const [ change, setChange ] = useState(false);
    const changeBtnVal = change ? 'Завершити редагування' : 'Редагувати профіль';

    const changeHandler = () => {
        setChange(prev => !prev)
    }

    if (!currentUser && !isLoading) {
        return (
            <Page404 />
        )
    }   

    return (
        <div className="profile" ref={ destination }>
            <div className="profile-header">
                <div className="profile-avatar" data-privilege = { currentPrivilege }>
                    <span>{ avatar }</span>
                </div>
               <ProfileInfoList
                    change = { change }
                    isGuest={ isGuest } 
                    currentUser={ currentUser }
                />
                { !isGuest && 
                    <button
                        onClick={ changeHandler }
                        className="profile-header__change-btn"
                    >{ changeBtnVal }
                    </button> 
                }
            </div>

            { !isGuest && orders?.length > 0 && <History />}
        </div>
    )
}