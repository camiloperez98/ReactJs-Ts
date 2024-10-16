import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/index";
import { ProductRoute } from "./Routes/ProductRoute";
import { HomeRoute } from "./Routes/HomeRoutes";
import {UserRoute} from "./Routes/UserRoutes";
import { Error404Route } from "./Routes/Error404Routes";


const App = () => {
  return (
    <BrowserRouter>
      <Layout title="E-commerce">
        <div
          className="w-full
                      pt-4 
                      pb-[372px]
                      bg-slate-100
                      "
        >
          <div
            className="pl-[45px] 
                      pr-[45px]"
          ></div>
          <Routes>
            {HomeRoute()} 
            {ProductRoute()}
            {UserRoute()}
            {Error404Route()}
          </Routes>
        </div>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
