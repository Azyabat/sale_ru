import { Space } from "antd";
import { AugmentButton, DeleteButton, MinusButton } from "./components";
import { StorageTableData } from "./types";

export const columns = [
    {
        title: "Наименование",
        dataIndex: "name",
        key: "name",
        render: (text: StorageTableData["name"]) => text,
    },
    {
        title: "Количество",
        dataIndex: "count",
        key: "count",
        render: (amount: StorageTableData["count"]) => `${amount}`,
    },
    {
        title: "Закупка",
        dataIndex: "buy",
        key: "buy",
        render: (buy: StorageTableData["buy"]) => `${buy}.р`,
    },
    {
        title: "Продажа",
        dataIndex: "sale",
        key: "sale",
        render: (sale: StorageTableData["sale"]) => `${sale}.р`,
    },
    {
        title: "Действия",
        dataIndex: "key",
        key: "actions",
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        render: (_: StorageTableData["key"], rowData: StorageTableData) => (
            <Space size={8}>
                <AugmentButton data={rowData} />
                <MinusButton data={rowData} />
                <DeleteButton data={rowData} />
            </Space>
        ),
    },
];
