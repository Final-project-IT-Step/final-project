import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../AuthorizationContext/hooks";
import { HeadAnimation } from "../Head/HeadAnimation";
import { MenuList } from "./MenuList";
import { MenuListMobile } from "./MenuListMobile";
import { UsersPopUp } from "./UsersPopUp";
/* import imgHead from '../../img/head.jpg'; */

export const Header = () => {
    const { user } = useAuthContext();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="header">
            <HeadAnimation />

            <div className="header-box">
                <nav className="menu">
                    <MenuList />
                </nav>

                <nav className={ `menu-mobile ${ menuOpen ? "menu-mobile_open" : "" }` }>
                    <MenuListMobile closeMenu={ closeMenu } />
                </nav>

                <div className="authorization-box">
                    <div className="users-area">
                        { user 
                            ? <UsersPopUp />
                            : <Link
                                className="users-area__link"
                                to={ 'login' }
                            >Вхід</Link> 
                        }
                    </div>
                </div>


                <div className="menu-mobile__icon-box">
                    <i className="fa-solid fa-bars menu-mobile__icon" onClick={ toggleMenu }></i>
                </div>
            </div>
        </header>
    )
};
