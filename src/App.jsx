import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { AuthRequire } from "./AuthorizationContext/hoc";
import { AuthorizationPage, Page404, Shop, TeaCeremony, WisdomTea } from "./pages";
import { HistoryTea } from "./pages/HistoryTea";
import { TypesTea, TypesTeaSinglePage } from "./pages/TypesTea";
import { ProfilePage } from "./pages/Profile";
import { CourierPage, NewPostWarehousePage, OrderPage, PickupPage } from "./pages/OrderPage";
import { SignUpPage } from "./pages/SignUpPage";

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
        <Route path="sign-up" element={ <SignUpPage /> } />

        <Route path=":username" element = { 
          <AuthRequire>
              <ProfilePage />
          </AuthRequire>
          }
        />

        <Route path="order" element = {
          <AuthRequire>
            <OrderPage />
          </AuthRequire>
          }
        >
          <Route path="pickup" element={ <PickupPage /> } />
          <Route path="courier" element={ <CourierPage /> } />
          <Route path="new-post-warehouse" element={ <NewPostWarehousePage /> } />
        </Route>
        <Route path="*" element={ <Page404 /> } />
      </Route>
    </Routes>
  );
}

export default App;

