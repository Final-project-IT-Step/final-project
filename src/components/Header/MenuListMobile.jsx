import { NavLink } from "react-router-dom";
import { menuElements } from "./data";

export const MenuListMobile = ({ closeMenu }) => {
    const isActiveCallback = ({ isActive }) => isActive ? "menu-mobile__link menu-mobile__link_active" : "menu-mobile__link";

    return (
        <div className="menu-mobile__content">
            <button className="menu-mobile__btn-close" onClick={closeMenu}>
                X
            </button>
            
            <ul className="menu-mobile__list">
                {
                    menuElements.map(element => {
                        const { id, title, link } = element;
                        const curTitle = title.toUpperCase();
                        return (
                            <li className="menu__item-mobile" key={ id }>
                                <NavLink 
                                    to={ link } 
                                    className={ isActiveCallback }
                                    onClick={ closeMenu }
                                >{ curTitle }
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
};