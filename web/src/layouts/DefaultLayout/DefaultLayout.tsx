import { FC } from "react";
import { Header, SideMenu } from "features";
import { useLocation } from "react-router";
import { authPath } from "routes/urls";
import { ContentWrapper, Layout } from "./styled";

export const DefaultLayout: FC<React.PropsWithChildren> = ({ children }) => {
    const location = useLocation();
    const isAuthPage = location.pathname === authPath;
    return (
        <>
            {!isAuthPage && <Header />}
            <Layout>
                {!isAuthPage && <SideMenu />}
                <Layout.Content>
                    <ContentWrapper>{children}</ContentWrapper>
                </Layout.Content>
            </Layout>
        </>
    );
};
