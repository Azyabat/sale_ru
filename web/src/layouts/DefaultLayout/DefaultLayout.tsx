import { FC } from "react";
import { Header, SideMenu } from "features";
import { useGate } from "effector-react";
import { ProfileGate } from "models/User";
import { ContentWrapper, Layout } from "./styled";

export const DefaultLayout: FC<React.PropsWithChildren> = ({ children }) => {
    useGate(ProfileGate);

    return (
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
};
