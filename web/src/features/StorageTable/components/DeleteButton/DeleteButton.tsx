import { FC, useCallback } from "react";
import { StorageTableData } from "features/StorageTable/types";
import { Button, Popconfirm } from "antd";
import { useStorage } from "hooks/useStorage";
import { StyledDeleteButton } from "./styled";

export const DeleteButton: FC<{ data: StorageTableData }> = ({ data }) => {
    const { deleteProduct } = useStorage();
    const { key, count, name } = data;

    const titleText =
        count > 0
            ? "Для удаления продукта, количество должно быть равно 0"
            : undefined;

    const handleDelete = useCallback(() => {
        deleteProduct({ id: key });
    }, [deleteProduct, key]);

    return (
        <Popconfirm
            title="Удалить товар"
            description={`Вы уверены что хотите удалить товар "${name}"?`}
            onConfirm={handleDelete}
        >
            <Button
                key={`${key}_delete`}
                title={titleText}
                disabled={count > 0}
                icon={<StyledDeleteButton />}
            />
        </Popconfirm>
    );
};
