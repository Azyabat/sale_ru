import { Avatar, Dropdown, Flex } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Text } from "components";
import { useCallback, useMemo } from "react";
import { useProfile } from "hooks/useProfile";
import { useNavigate } from "react-router-dom";
import { authPath } from "routes/urls";
import { StyledHeader } from "./styled";

export const Header = () => {
    const { logOut } = useProfile();
    const navigate = useNavigate();
    const handleLogOut = useCallback(() => {
        logOut();
        navigate(authPath);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const menu = useMemo(
        () => [
            {
                key: "settings",
                label: "Настройки",
            },
            {
                key: "logout",
                label: "Выход",
                onClick: handleLogOut,
            },
        ],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    return (
        <StyledHeader>
            <Flex justify="space-between" align="center">
                <Text fontSize="32px" color="darkred">
                    SalesRu
                </Text>
                <Dropdown menu={{ items: menu }} placement="bottom">
                    <Avatar size={48} icon={<UserOutlined />} />
                </Dropdown>
            </Flex>
        </StyledHeader>
    );
};
