/* eslint-disable @typescript-eslint/no-floating-promises */
import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { DefaultLayout } from "layouts/DefaultLayout";
import { useNavigate } from "react-router-dom";
import { homePath } from "routes/urls";
import { useCallback } from "react";
import { useUnit } from "effector-react";
import {
    $loadingUserProfile,
    $userStore,
    fetchedUserProfile,
} from "models/User";
import { LogInDto } from "api/types";
import { ErrorLayout } from "layouts/ErrorLayout";
import { AuthFormHeader, AuthFormWrapper, ContentWrapper } from "./styled";

import "models/User/init";

export const Auth = () => {
    const navigate = useNavigate();
    const loginUser = useUnit(fetchedUserProfile);
    const user = useUnit($userStore);
    const isLoading = useUnit($loadingUserProfile);

    const onSuccessFinish = useCallback(
        (formValues: LogInDto) => {
            loginUser(formValues);
            if (!isLoading && user) navigate(homePath);
        },
        [isLoading, loginUser, navigate, user]
    );

    return (
        <ErrorLayout>
            <DefaultLayout>
                <ContentWrapper>
                    <AuthFormWrapper>
                        <AuthFormHeader>Вход в систему</AuthFormHeader>
                        <Form
                            name="AuthForm"
                            autoComplete="off"
                            requiredMark={false}
                            onFinish={onSuccessFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Пожалуйста, введите ваш логин!",
                                    },
                                ]}
                            >
                                <Input
                                    prefix={<UserOutlined />}
                                    placeholder="Login"
                                />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Пожалуйста, введите ваш пароль!",
                                    },
                                ]}
                            >
                                <Input
                                    prefix={<LockOutlined />}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>

                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    loading={isLoading}
                                >
                                    Войти
                                </Button>
                            </Form.Item>
                        </Form>
                    </AuthFormWrapper>
                </ContentWrapper>
            </DefaultLayout>
        </ErrorLayout>
    );
};
