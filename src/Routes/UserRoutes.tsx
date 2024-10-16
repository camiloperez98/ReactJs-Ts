import { Route } from "react-router-dom";
import Users from "../page/User";

export function UserRoute() {
    return <Route path="/user" element={<Users />} />;
}   