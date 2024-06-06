import { useContext } from "react"
import { AuthContext } from "../hoc";

export const useAuthContext = () => {
    return useContext(AuthContext);
}