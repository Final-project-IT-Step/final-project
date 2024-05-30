import React, { useState } from "react";
import { HeadAnimation } from "../Head/HeadAnimation";
import { Link, useNavigate } from "react-router-dom";
/* import imgHead from '../../img/head.jpg'; */
import { useAuthContext } from "../../hooks/useAuthContext";
import { MenuList } from "./MenuList";
import { makeCurrentAvatar } from "./utils/makeCurrentAvatar";
import { MenuListMobile } from "./MenuListMobile";

export const Header = () => {
    const { user, signOut } = useAuthContext();
    const navigate = useNavigate();
    const avatar = makeCurrentAvatar(user);
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
                    { user 
                        ? <span 
                            onClick={ () => signOut(() => navigate('/', { replace: true })) }
                        >{ avatar }
                        </span> 
                        : <Link to={ 'login' }>Вхід</Link> 
                    }
                </div>

                <div className="menu-mobile__icon-box">
                    <i className="fa-solid fa-bars menu-mobile__icon" onClick={ toggleMenu }></i>
                </div>
            </div>
        </header>
    );
};
