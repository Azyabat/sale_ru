import { Button, Flex, MenuProps } from "antd";
import { useCallback, useState } from "react";
import { MenuItemType } from "rc-menu/lib/interface";
import { SiderWrapper, Menu } from "./styled";

const menuItems: MenuProps["items"] = [
    {
        label: "Личный кабинет",
        key: "home",
    },
    {
        label: "Аналитика",
        key: "analytics",
    },
    {
        label: "Склад",
        key: "storage",
    },
    {
        label: "История",
        key: "history",
    },
    {
        label: "Сотрудники",
        key: "employers",
    },
];

export const SideMenu = () => {
    const [currentTab, setTab] = useState("home");

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
