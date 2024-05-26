import { NavLink } from "react-router-dom";
import { menuElements } from "./menuElements";

export const MenuList = () => {
    const isActiveCallback = ({ isActive }) => isActive ? "menu__link menu__link_active" : "menu__link";

    return (
        <ul className="menu__list">
        {
            menuElements.map(element => {
                const { id, title, link } = element
                const curTitle = title.toUpperCase();
                return (
                    <li className="menu__item" key={ id }>
                        <NavLink 
                            to={ link } 
                            className={ isActiveCallback }
                        >{ curTitle }
                        </NavLink>
                    </li>
                )
            })
        }
    </ul>
    )
}