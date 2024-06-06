import { Link } from "react-router-dom"

export const AuthorizationOptions = () => {

    return (
        <div className="authorization-options">
            <button 
                className="authorization-options__button"
                type = "submit"
            >Вхід
            </button>
            <Link className="authorization-options__button" to="/sign-up">Зареєструватись</Link>
        </div>
    )
}