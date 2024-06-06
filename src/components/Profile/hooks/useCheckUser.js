import { useLocation } from "react-router-dom";
import { useAuthContext } from "../../../AuthorizationContext/hooks";
import { useGetCurrentUserByNicknameQuery } from "../../../redux/api";

export const useCheckUser = () => {
    const { currentUserId: userId } = useAuthContext();
    const { pathname } = useLocation()
    const user = pathname.slice(1)
    const { data = [], isLoading } = useGetCurrentUserByNicknameQuery(user)
    const currentUser = data[0];
    const isGuest = userId !== currentUser?.id 

    return { isGuest, currentUser, isLoading, data, userId }
}