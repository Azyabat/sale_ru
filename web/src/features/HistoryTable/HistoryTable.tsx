import { Table } from "antd";
import { useHistory } from "hooks/useHistory";
import { addTableDataKey } from "helpers/addTableDataKey";
import { Wrapper } from "./styled";
import { columns } from "./columns";

export const HistoryTable = () => {
    const { history, isLoading } = useHistory();

    const data = addTableDataKey(history);

    return (
        <Wrapper>
            <Table
                loading={isLoading}
                pagination={{ pageSize: 30 }}
                columns={columns}
                dataSource={data}
            />
        </Wrapper>
    );
};
