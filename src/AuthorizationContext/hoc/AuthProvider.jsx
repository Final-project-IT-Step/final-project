import { createContext } from "react"
import { useGetCurrentUser } from '../../AuthorizationContext/hooks/useGetCurrentUser'

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const { value } = useGetCurrentUser();

    return (
        <AuthContext.Provider value={ value }>
            { children }
        </AuthContext.Provider>
    )
}