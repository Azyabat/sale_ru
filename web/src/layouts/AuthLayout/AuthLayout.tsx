import { FC, useEffect } from "react";
import { useProfile } from "hooks/useProfile";
import { useNavigate } from "react-router-dom";
import { homePath } from "routes/urls";
import { JWT } from "helpers/jwt";
import { ContentWrapper, Layout } from "./styled";

export const AuthLayout: FC<React.PropsWithChildren> = ({ children }) => {
    const { profile, fetchProfile } = useProfile();
    const navigate = useNavigate();
    const jwt = JWT.getJwt();

    useEffect(() => {
        if (jwt && !profile) {
            fetchProfile();
        }
        if (profile) {
            navigate(homePath);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [profile, jwt]);
    return (
        <Layout>
            <Layout.Content>
                <ContentWrapper>{children}</ContentWrapper>
            </Layout.Content>
        </Layout>
    );
};
