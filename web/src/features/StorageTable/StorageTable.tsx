import { Table } from "antd";
import { useStorage } from "hooks/useStorage";
import { Wrapper } from "./styled";
import { columns } from "./columns";
import { prepareStorageItems } from "./helpers";

export const StorageTable = () => {
    const { storageItems, isLoading } = useStorage();

    const items = prepareStorageItems(storageItems);

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
