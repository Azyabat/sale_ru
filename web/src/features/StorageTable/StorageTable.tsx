import { Table } from "antd";
import { useStorage } from "hooks/useStorage";
import { addTableDataKey } from "helpers/addTableDataKey";
import { Wrapper } from "./styled";
import { columns } from "./columns";

export const StorageTable = () => {
    const { storageItems, isLoading } = useStorage();

    const items = addTableDataKey(storageItems);

    return (
        <Wrapper>
            <Table
                loading={isLoading}
                pagination={{ pageSize: 30 }}
                columns={columns}
                dataSource={items}
            />
        </Wrapper>
    );
};
