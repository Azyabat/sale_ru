import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { $isLoadingJwt, fetchJwt } from "models/Auth";
import { useCallback } from "react";
import { useUnit } from "effector-react";
import { LogInDto } from "api/types";

export const LogInForm = () => {
    const isLoading = useUnit($isLoadingJwt);
    const loginUser = useUnit(fetchJwt);

    const onSuccessFinish = useCallback(
        (formValues: LogInDto) => {
            loginUser(formValues);
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );
    return (
        <Form
            name="AuthForm"
            autoComplete="off"
            requiredMark={false}
            onFinish={onSuccessFinish}
        >
            <Form.Item
                name="userName"
                rules={[
                    {
                        required: true,
                        message: "Пожалуйста, введите ваш логин!",
                    },
                ]}
            >
                <Input prefix={<UserOutlined />} placeholder="Login" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: "Пожалуйста, введите ваш пароль!",
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
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
};
