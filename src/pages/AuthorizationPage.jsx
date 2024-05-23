import { useState } from "react"
import { Vignette } from "../components/Vignette";
import { AuthorizationImage } from "../components/Authorization/AuthorizationImage";

export const AuthorizationPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const switchTypeHandler = () => {
        setShowPassword(prev => !prev)
    }

    const currentType = showPassword ? 'text' : 'password';
    const currentContent = showPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"
    const currentTitle = showPassword ? "Приховати пароль" : "Показати пароль"

    return (
        <div className="authorization-container">
            <Vignette />
            <div className="authorization-form">
                <AuthorizationImage image ={ 'teapot.png' } type= "left"/>
                <AuthorizationImage image ={ 'tea-img2.jpg' } type= "right"/>
                <label className="authorization-form-label">
                    <h4 className="authorization-form-label__title">Ім'я користувача або пошта:</h4>
                    <input type="text" className="authorization-form-label__input"/>
                </label>
                
                <label className="authorization-form-label">
                    <h4 className="authorization-form-label__title">Пароль:</h4>
                    <input type={ currentType } className="authorization-form-label__input"/>
                    <button 
                        className={ `authorization-form-label__switch-btn` } 
                        onClick={ switchTypeHandler }
                        title = { currentTitle }
                    >
                        <i className={ currentContent }></i>
                    </button>
                </label>
            <div className="authorization-options">
                <button className="authorization-options__button">Вхід</button>
                <button className="authorization-options__button">Зареєструватись</button>
            </div>
            </div>
        </div>
    )
}