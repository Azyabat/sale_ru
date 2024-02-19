import { Auth, HomePage } from "pages";
import { Navigate, Route, Routes } from "react-router-dom";
import { authPath, homePath } from "./urls";

export const RoutesList = () => (
    <Routes>
        <Route path={authPath} element={<Auth />} />
        <Route path={homePath} element={<HomePage />} />
        <Route path="*" element={<Navigate to={authPath} />} />
    </Routes>
);
