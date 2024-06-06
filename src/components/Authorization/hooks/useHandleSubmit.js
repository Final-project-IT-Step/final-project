import { useLocation, useNavigate } from "react-router-dom";
import { useGetUsersQuery } from "../../../redux/api";
import { useAuthContext } from "../../../AuthorizationContext/hooks";

export const useHandleSubmit = () => {

    const { data: users = [] } = useGetUsersQuery();
    const navigate = useNavigate();
    const { state } = useLocation();
    const { signIn } = useAuthContext();

    const currentPath = state?.from + state?.searchParams || '/'

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const authUserName = form.userNameOrEmail.value
        const authUserPassword = form.userPassword.value

        const currentUserByName = users
        .find( user => user.userName === authUserName && user.password === authUserPassword)
        
        const currentUserByEmail = users
        .find( user => user.email === authUserName && user.password === authUserPassword)

        const currentUser = currentUserByName || currentUserByEmail

        if (!currentUser) {
            return
        }

        signIn(currentUser, () => {
            navigate(currentPath, { replace: true })
            localStorage.setItem('user', currentUser.id)
        })
    }

    return { handleSubmit }
}