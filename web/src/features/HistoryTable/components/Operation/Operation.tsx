import { FallOutlined, RiseOutlined } from "@ant-design/icons";
import { Space } from "antd";
import { getHistoryOperationName } from "helpers/getHistoryOperationName";
import { FC } from "react";
import { HistoryOperationsColor, HistoryOperationsType } from "types/History";

export const Operation: FC<{ operation: HistoryOperationsType }> = ({
    operation,
}) => {
    const text = getHistoryOperationName(operation);
    const color = HistoryOperationsColor[operation];
    const icon =
        operation === HistoryOperationsType.SALE ? (
            <RiseOutlined />
        ) : (
            <FallOutlined />
        );

    return (
        <Space style={{ color }}>
            {icon}
            {text}
        </Space>
    );
};
