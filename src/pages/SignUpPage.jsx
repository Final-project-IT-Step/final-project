import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../AuthorizationContext/hooks"
import { SignUpForm } from "../components/SignUp"
import { Vignette } from '../components/Vignette';

export const SignUpPage = () => {

    const { currentUserId } = useAuthContext();
    const navigate=  useNavigate();

    if (currentUserId) {
        navigate('/', { replace: true })
    }

    return (
        <div className="sign-up-page">
            <h1>Сторiнка створення користувача</h1>
            <Vignette />
            <SignUpForm />
        </div>
    )
}