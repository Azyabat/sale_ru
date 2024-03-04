import { DeleteOutlined } from "@ant-design/icons";

export const columns = [
    {
        title: "Наименование",
        dataIndex: "name",
        key: "name",
        render: (text: string) => text,
    },
    {
        title: "Количество",
        dataIndex: "count",
        key: "count",
        render: (amount: number) => `${amount}`,
    },
    {
        title: "Закупка",
        dataIndex: "buy",
        key: "buy",
        render: (buy: number) => `${buy}.р`,
    },
    {
        title: "Продажа",
        dataIndex: "sale",
        key: "sale",
        render: (sale: number) => `${sale}.р`,
    },
    {
        title: "Действия",
        dataIndex: "key",
        key: "actions",
        render: (id: number) => (
            <DeleteOutlined
                onClick={() => {
                    console.log(id);
                }}
            />
        ),
    },
];
