import { Vignette } from "../components/Vignette";
import AuthPageProvider from "../components/Authorization/context/AuthPageContext"
import { AuthorizationForm, useGetAuthContent } from "../components/Authorization";

export const AuthorizationPage = () => {
    const 
    { 
        setShowPassword, 
        switchTypeHandler, 
        currentType, 
        currentContent, 
        currentTitle 
    } = useGetAuthContent();

    return (
        <AuthPageProvider value = { { setShowPassword, switchTypeHandler, currentType, currentContent, currentTitle } }>
            <div className="authorization-container">
                <Vignette />
                <AuthorizationForm />
            </div>
        </AuthPageProvider>
    )
}