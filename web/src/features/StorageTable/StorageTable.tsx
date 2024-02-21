import { Table } from "antd";
import { Wrapper } from "./styled";
import { columns } from "./columns";

const dataMock = [
    { key: "1", name: "Огурцы", amount: "2", buy: 120, sale: 180 },
    { key: "2", name: "Помидоры", amount: "6", buy: 100, sale: 280 },
    { key: "3", name: "Шоколад", amount: "8", buy: 85, sale: 120 },
    { key: "4", name: "Авокадо", amount: "1", buy: 190, sale: 230 },
];

export const StorageTable = () => (
    <Wrapper>
        <Table columns={columns} dataSource={dataMock} />
    </Wrapper>
);
