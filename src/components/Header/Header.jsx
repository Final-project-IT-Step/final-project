import { HeadAnimation } from "../Head/HeadAnimation";
import { Link, useNavigate } from "react-router-dom";
/* import imgHead from '../../img/head.jpg'; */
import { useAuthContext } from "../../hooks/useAuthContext";
import { MenuList } from "./MenuList";
import { makeCurrentAvatar } from "./utils/makeCurrentAvatar";

export const Header = () => {
    const { user, signOut } = useAuthContext();
    const navigate = useNavigate();
    const avatar = makeCurrentAvatar(user);

    return (
        <header className="header">
            <HeadAnimation />

            <div className="header-box">
                <nav className="menu">
                    <MenuList />
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

            </div>
        </header>
    );
};
