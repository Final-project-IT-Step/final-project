import { Outlet } from "react-router-dom";
import { useCheckAuthorization } from "../AuthorizationContext/hooks";
import { Header } from "./Header";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";


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