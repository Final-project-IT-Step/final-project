import { useEffect, useState } from "react";
import { useGetCurrentUserQuery } from "../../redux/api";

export const useGetCurrentUser = () => {
    const currentUserId = localStorage.getItem('user');
    const { data: currentUserData, isLoading } = useGetCurrentUserQuery(currentUserId);
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (currentUserData && !isLoading) {
            setUser(currentUserData)
        }
    }, [currentUserData, isLoading ])


    const signIn = (newUser, callBack) => {
        setUser(newUser);
        callBack();
    }
    const signOut = (callBack) => {
        setUser(null);
        callBack();
    }
    const value = { user, signIn, signOut, currentUserId, setUser }

    return { value }
}