import moment from "moment";
import { HistoryTableData } from "./types";
import { Operation } from "./components";

export const columns = [
    {
        title: "Товар",
        dataIndex: "product",
        key: "product_name",
        render: (product: HistoryTableData["product"]) => product.name,
    },
    {
        title: "Остаток",
        dataIndex: "count",
        key: "count",
        render: (count: HistoryTableData["count"]) => count,
    },
    {
        title: "Количество",
        dataIndex: "amount",
        key: "amount",
        render: (amount: HistoryTableData["amount"]) => amount,
    },
    {
        title: "Операция",
        dataIndex: "operation_type",
        key: "operation",
        render: (operation: HistoryTableData["operation_type"]) => (
            <Operation operation={operation} />
        ),
    },
    {
        title: "Цена",
        dataIndex: "price",
        key: "price",
        render: (price: HistoryTableData["price"]) => `${price}.руб`,
    },
    {
        title: "Пользователь",
        dataIndex: "user",
        key: "user",
        render: (user: HistoryTableData["user"]) => user.name,
    },
    {
        title: "Дата",
        dataIndex: "createdAt",
        key: "date",
        render: (date: HistoryTableData["createdAt"]) =>
            moment(date).format("DD.MM.YYYY HH:mm"),
    },
];
