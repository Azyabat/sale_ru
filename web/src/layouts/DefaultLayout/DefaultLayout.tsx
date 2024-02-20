import { FC } from "react";
import { Header, SideMenu } from "features";
import { ContentWrapper, Layout } from "./styled";

export const DefaultLayout: FC<React.PropsWithChildren> = ({ children }) => (
    <>
        <Header />
        <Layout>
            <SideMenu />
            <Layout.Content>
                <ContentWrapper>{children}</ContentWrapper>
            </Layout.Content>
        </Layout>
    </>
);
