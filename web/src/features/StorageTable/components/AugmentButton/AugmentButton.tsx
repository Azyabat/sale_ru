import { FC, useCallback, useState } from "react";
import { StorageTableData } from "features/StorageTable/types";
import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { ActionModal } from "../ActionModal";

export const AugmentButton: FC<{ data: StorageTableData }> = ({ data }) => {
    const { key } = data;
    const [showModal, setShowModal] = useState(false);

    const handleCancel = useCallback(() => {
        setShowModal(false);
    }, []);

    const handleClickAugment = useCallback(() => {
        setShowModal(true);
    }, []);

    return (
        <>
            <Button
                key={`${key}_augment`}
                icon={<PlusCircleOutlined />}
                onClick={handleClickAugment}
            />
            <ActionModal
                rowData={data}
                onCancel={handleCancel}
                isOpen={showModal}
            />
        </>
    );
};
