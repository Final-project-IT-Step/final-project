import { useNavigate } from "react-router-dom";
import { useGetUsersQuery } from "../../../redux/usersApi";
import { useAuthContext } from "../../../hooks/useAuthContext";

export const useHandleSubmit = () => {

    const { data: users = [] } = useGetUsersQuery();
    const navigate = useNavigate();
    const { signIn } = useAuthContext();

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

        signIn(currentUser.userName, () => navigate('/', { replace: true }))
    }

    return { handleSubmit }
}