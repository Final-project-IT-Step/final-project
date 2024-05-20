import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TeaCeremony from "./pages/TeaCeremony";
import { HistoryTea, Page404, TypesTea, TypesTeaSinglePage, WisdomTea } from "./pages";
import Layout from "./components/Layout";

const App = () => {

  return (
    <Routes>
      <Route path="/" element={ <Layout /> } >
        <Route index element={ <Home /> } />
        <Route path="history" element={ <HistoryTea /> } />
        <Route path="types/*" element={ <TypesTea /> } >
          <Route path=":id" element={ <TypesTeaSinglePage /> } />
        </Route>
        <Route path="ceremony" element={ <TeaCeremony /> } />
        <Route path="wisdom" element={ <WisdomTea /> } />
        <Route path="*" element={ <Page404 /> } />
      </Route>
    </Routes>
  );
}

export default App;

