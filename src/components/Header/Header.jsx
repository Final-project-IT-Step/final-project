import { HeadAnimation } from "../Head/HeadAnimation";
import { Link } from "react-router-dom";
/* import imgHead from '../../img/head.jpg'; */
import { MenuList } from "./MenuList";
import { UsersPopUp } from "./UsersPopUp";
import { useAuthContext } from "../../AuthorizationContext/hooks/useAuthContext";

export const Header = () => {
    const { user } = useAuthContext();

    return (
        <header className="header">
            <HeadAnimation />

            <div className="header-box">
                <nav className="menu">
                    <MenuList />
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

            </div>
        </header>
    );
};
