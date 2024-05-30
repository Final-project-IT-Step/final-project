import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";

export const useCheckAuthorization = () => {
    const { signOut } = useAuthContext();
    const navigate = useNavigate();

    window.addEventListener('storage', function(e) {  
        if (e.key === 'user' && e.newValue === null) {
            signOut(() => navigate('/login', { replace: true })) 
        }
    });
}