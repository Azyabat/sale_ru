import { Search, Text } from "components";
import { Button, Flex, Space } from "antd";
import { useCallback, useState } from "react";
import { Wrapper } from "./styled";
import { AddModal } from "./components";

export const StorageHeader = () => {
    const [showAddModal, setVisibleAddModal] = useState(false);

    const handleAdd = useCallback(() => {
        setVisibleAddModal(true);
    }, []);

    const handleClose = useCallback(() => {
        setVisibleAddModal(false);
    }, []);
    return (
        <Wrapper>
            <Flex align="center" justify="space-between">
                <Text fontSize="32px">Склад</Text>
                <Search
                    placeholder="Введите наименование товара"
                    enterButton="Поиск"
                />
                <Space size={16}>
                    <Button type="primary" onClick={handleAdd}>
                        Добавить
                    </Button>
                </Space>
            </Flex>
            <AddModal isOpen={showAddModal} onCancel={handleClose} />
        </Wrapper>
    );
};
