import { ErrorLayout } from "layouts/ErrorLayout";

import { LogInForm } from "features";
import { AuthLayout } from "layouts/AuthLayout";
import { AuthFormHeader, AuthFormWrapper, ContentWrapper } from "./styled";

export const Auth = () => (
    <ErrorLayout>
        <AuthLayout>
            <ContentWrapper>
                <AuthFormWrapper>
                    <AuthFormHeader>Вход в систему</AuthFormHeader>
                    <LogInForm />
                </AuthFormWrapper>
            </ContentWrapper>
        </AuthLayout>
    </ErrorLayout>
);
