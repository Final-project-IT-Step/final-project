import { AuthorizationFormLabel } from "./hoc/AuthorizationFormLabel"
import { AuthorizationImage } from "./AuthorizationImage"
import { AuthorizationOptions } from "./AuthorizationOptions"
import { SwitchButton } from "./SwitchButton"
import { useGetAuthPageContext } from "./hooks/useGetAuthPageContext"
import { useHandleSubmit } from "./hooks/useHandleSubmit"

export const AuthorizationForm = () => {
    const { currentType } = useGetAuthPageContext();
    const { handleSubmit } = useHandleSubmit();

    return (
        <form className="authorization-form" onSubmit={ handleSubmit }>
            <AuthorizationImage image ={ 'teapot.png' } type= "left"/>
            <AuthorizationImage image ={ 'tea-img2.jpg' } type= "right"/>
    
            <AuthorizationFormLabel 
                data = { { title: `Ім'я користувача або пошта:`, type: 'text', formTitle: "userNameOrEmail"} }
            />

            <AuthorizationFormLabel 
                data = { { title: `Пароль:`, type: 'password', formTitle: "userPassword"} }
                currentType = { currentType }
            >
                <SwitchButton />
            </AuthorizationFormLabel >

            <AuthorizationOptions />
        </form>
    )
}