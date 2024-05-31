import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useCheckAuthorization } from "../AuthorizationContext/hooks/useCheckAuthorization";
import { Navigation } from "./Navigation/Navigation";

const Layout = () => {
    useCheckAuthorization();

    return (
        <div className="container">
            <Header />
			
			<Navigation />

            <main className="main">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default Layout;