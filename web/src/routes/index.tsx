import { AnalyticsPage, Auth, HistoryPage, HomePage, StoragePage } from "pages";
import { Navigate, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "layouts/DefaultLayout";
import {
    analyticsPath,
    authPath,
    historyPath,
    homePath,
    storagePath,
} from "./urls";

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
        <Route
            path={historyPath}
            element={
                <DefaultLayout>
                    <HistoryPage />
                </DefaultLayout>
            }
        />
        <Route
            path={analyticsPath}
            element={
                <DefaultLayout>
                    <AnalyticsPage />
                </DefaultLayout>
            }
        />
        <Route path="*" element={<Navigate to={homePath} />} />
    </Routes>
);
