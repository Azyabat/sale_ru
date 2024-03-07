import { FC, useCallback, useState } from "react";
import { StorageTableData } from "features/StorageTable/types";
import { Button } from "antd";
import { MinusCircleOutlined } from "@ant-design/icons";
import { ActionModal } from "../ActionModal";

export const MinusButton: FC<{ data: StorageTableData }> = ({ data }) => {
    const { key, count } = data;
    const [showModal, setShowModal] = useState(false);

    const handleCancel = useCallback(() => {
        setShowModal(false);
    }, []);

    const handleClickMinus = useCallback(() => {
        setShowModal(true);
    }, []);

    const titleText =
        count === 0
            ? "Для списания продукта, количество должно быть больше 0"
            : undefined;

    return (
        <>
            <Button
                key={`${key}_minus`}
                title={titleText}
                // eslint-disable-next-line eqeqeq
                disabled={count == 0}
                icon={<MinusCircleOutlined />}
                onClick={handleClickMinus}
            />
            <ActionModal
                rowData={data}
                onCancel={handleCancel}
                isOpen={showModal}
                isMinus
            />
        </>
    );
};
