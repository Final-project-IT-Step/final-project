import { AuthorizationFormLabel } from "./hoc/AuthorizationFormLabel"
import { AuthorizationImage } from "./AuthorizationImage"
import { AuthorizationOptions } from "./AuthorizationOptions"
import { SwitchButton } from "./SwitchButton"
import { useGetAuthPageContext } from "./hooks/useGetAuthPageContext"
import { useHandleSubmit } from "./hooks/useHandleSubmit"
import { useEscortToComponent } from "./hooks/useEscortToComponent"

export const AuthorizationForm = () => {
    const { currentType } = useGetAuthPageContext();
    const { handleSubmit } = useHandleSubmit();
    const { destination } = useEscortToComponent();

    return (
        <form className="authorization-form" onSubmit={ handleSubmit } ref={ destination }>
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