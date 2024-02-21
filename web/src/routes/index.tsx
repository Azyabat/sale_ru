import { Auth, HomePage, StoragePage } from "pages";
import { Navigate, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "layouts/DefaultLayout";
import { authPath, homePath, storagePath } from "./urls";

export const RoutesList = () => (
    <Routes>
        <Route path={authPath} element={<Auth />} />
        <Route
            path={homePath}
            element={
                <DefaultLayout>
                    <HomePage />
                </DefaultLayout>
            }
        />
        <Route
            path={storagePath}
            element={
                <DefaultLayout>
                    <StoragePage />
                </DefaultLayout>
            }
        />
        <Route path="*" element={<Navigate to={authPath} />} />
    </Routes>
);
