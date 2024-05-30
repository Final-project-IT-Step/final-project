import { useLocation } from "react-router-dom";
import { useGetCurrentUserByNicknameQuery } from "../../../redux";
import { useAuthContext } from "../../../AuthorizationContext/hooks/useAuthContext";

export const useCheckUser = () => {
    const { currentUserId: userId } = useAuthContext();
    const { pathname } = useLocation()
    const { data = [], isLoading } = useGetCurrentUserByNicknameQuery(pathname.slice(1))
    const currentUser = data[0];
    const isGuest = userId !== currentUser?.id 

    return { isGuest, currentUser, isLoading, data }
}