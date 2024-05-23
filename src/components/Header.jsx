import { NavLink } from "react-router-dom";
import { HeadAnimation } from "./Head/HeadAnimation";

export const Header = () => {
    const isActiveCallback = ({ isActive }) => isActive ? "menu__link menu__link_active" : "menu__link";

    return (
        <header className="header">
            <HeadAnimation />

            <nav className="menu">
                <ul className="menu__list">
                    <li className="menu__item">
                        <NavLink to="/" className={ isActiveCallback }>ГОЛОВНА</NavLink>
                    </li>
                    
                    <li className="menu__item">
                        <NavLink to="/history" className={ isActiveCallback }>ІСТОРІЯ ЧАЮ</NavLink>
                    </li>

                    <li className="menu__item">
                        <NavLink to="/types" className={ isActiveCallback }>ВИДИ ЧАЮ</NavLink>
                    </li>

                    <li className="menu__item">
                        <NavLink to="/ceremony" className={ isActiveCallback }>ЧАЙНА ЦЕРЕМОНІЯ</NavLink>
                    </li>

                    <li className="menu__item">
                        <NavLink to="/wisdom" className={ isActiveCallback }>МУДРІСТЬ ЧАЮ</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
