import { Avatar, Dropdown, Flex, MenuProps } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Text } from "components";
import { StyledHeader } from "./styled";

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
