import { Button, Flex, MenuProps } from "antd";
import { useCallback, useState } from "react";
import { MenuItemType } from "rc-menu/lib/interface";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { historyPath, homePath, storagePath } from "routes/urls";
import {
    AppstoreOutlined,
    FieldTimeOutlined,
    HomeOutlined,
    StockOutlined,
    TeamOutlined,
} from "@ant-design/icons";
import { SiderWrapper, Menu } from "./styled";

const menuItems: MenuProps["items"] = [
    {
        label: <Link to={homePath}>Личный кабинет</Link>,
        icon: <HomeOutlined />,
        key: "home",
    },
    {
        label: "Аналитика",
        icon: <StockOutlined />,
        key: "analytics",
    },
    {
        label: <Link to={storagePath}>Склад</Link>,
        icon: <AppstoreOutlined />,
        key: "storage",
    },
    {
        label: <Link to={historyPath}>История</Link>,
        icon: <FieldTimeOutlined />,
        key: "history",
    },
    {
        label: "Сотрудники",
        icon: <TeamOutlined />,
        key: "employers",
    },
];

export const SideMenu = () => {
    const { pathname } = useLocation();
    const [currentTab, setTab] = useState(pathname.slice(1) || "home");

    const handleTabClick = useCallback((event: MenuItemType) => {
        setTab(`${event.key}`);
    }, []);

    return (
        <SiderWrapper width={200}>
            <Flex gap={12} vertical>
                <Flex justify="center">
                    <Button size="large" type="primary">
                        Новый заказ
                    </Button>
                </Flex>
                <Menu
                    onClick={handleTabClick}
                    mode="vertical"
                    selectedKeys={[currentTab]}
                    items={menuItems}
                />
            </Flex>
        </SiderWrapper>
    );
};
