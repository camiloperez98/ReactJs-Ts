import { Route } from "react-router-dom";
import Error404 from "../page/404/index";

export  function Error404Route() {
    return <Route path="*" element={<Error404 />} />;
}