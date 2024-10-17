import { BrowserRouter, Routes } from "react-router-dom";
import Layout from "./components/Layout/index";
import { ProductRoute } from "./Routes/ProductRoute";
import { HomeRoute } from "./Routes/HomeRoutes";
import {UserRoute} from "./Routes/UserRoutes";
import { Error404Route } from "./Routes/Error404Routes";


const App = () => {
  return (
    <BrowserRouter>
      <Layout title="E-commerce">
          <Routes>
            {HomeRoute()} 
            {ProductRoute()}
            {UserRoute()}
            {Error404Route()}
          </Routes>

      </Layout>
    </BrowserRouter>
  );
};

export default App;
