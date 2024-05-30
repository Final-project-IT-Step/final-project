import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { HistoryTea, Page404, TypesTea, TypesTeaSinglePage, WisdomTea, TeaCeremony } from "./pages";
import Layout from "./components/Layout";
import { AuthorizationPage } from "./pages/AuthorizationPage";
import { Shop } from "./pages/Shop";
import { AuthRequire } from "./AuthorizationContext/hoc/AuthRequire"
import { ProfilePage } from "./pages/Profile/ProfilePage";

const App = () => {

  return (
    <Routes>
      <Route path="/" element={ <Layout /> } >
        <Route index element={ <Home /> } />
          <Route path="shop" element={ 
            <AuthRequire>
                <Shop /> 
            </AuthRequire>
            } 
          />
        <Route path="history" element={ <HistoryTea /> } />
        <Route path="types/*" element={ <TypesTea /> } >
          <Route path=":id" element={ <TypesTeaSinglePage /> } />
        </Route>
        <Route path="ceremony" element={ <TeaCeremony /> } />
        <Route path="wisdom" element={ <WisdomTea /> } />
        <Route path="login" element={ <AuthorizationPage /> } />
        <Route path="sign-up" element={ <AuthorizationPage /> } />

        <Route path=":username" element = { 
          <AuthRequire>
              <ProfilePage />
          </AuthRequire>
          }
        />
        
        <Route path="*" element={ <Page404 /> } />
      </Route>
    </Routes>
  );
}

export default App;

