import { Route } from "react-router-dom";
import Home from "../page/Home";

export function HomeRoute() {
  return <Route path="/" element={<Home />} />;
}
