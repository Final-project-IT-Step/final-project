import { Link } from "react-router-dom"

export const PopUpValue = ({ data }) => {
    const { user, userSelect, leaveFromAccount, popUpHandler } = data
    
    return (
        <div className="header-pop-up">
            <button
                title = 'Закрити вікно'
                className="header-pop-up__close-btn"
                onClick={ popUpHandler }
            >x</button>
            <ul className="pop-up-menu">
                {userSelect
                    .map(option => (
                    <li className="pop-up-menu-element" key = { option.id }>
                        <Link
                            onClick={ popUpHandler }
                            className="pop-up-menu-element__link"
                            to = { user?.userName }
                        >
                            { option.title }
                        </Link>
                    </li>))}
            </ul>
            <button
                title = 'Вийти зі свого акаунта'
                className="header-pop-up__leave-btn"
                onClick={ leaveFromAccount }
            >Вийти</button>
        </div>
    )
}