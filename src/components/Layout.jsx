import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Navigation } from "./Navigation";

const Layout = () => {
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