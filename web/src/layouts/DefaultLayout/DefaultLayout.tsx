import { FC } from "react";
import { Header, SideMenu } from "features";
import { Layout } from "./styled";

export const DefaultLayout: FC<React.PropsWithChildren> = ({ children }) => (
    <>
        <Header />
        <Layout>
            <SideMenu />
            <Layout.Content>{children}</Layout.Content>
        </Layout>
    </>
);
