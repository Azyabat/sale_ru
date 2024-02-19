import { Avatar, Dropdown, Flex, MenuProps } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { StyledHeader } from "./styled";
import { Text } from "..";

const menu: MenuProps["items"] = [
    {
        key: "settings",
        label: "Настройки",
    },
];

export const Header = () => (
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
