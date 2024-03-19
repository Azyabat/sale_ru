import { Form, InputNumber, Modal, Select, message } from "antd";
import { StorageTableData } from "features/StorageTable/types";
import { useStorage } from "hooks/useStorage";
import { FC, useCallback, useMemo } from "react";
import { ActionStorageItem } from "types/Storage";

type ModalProps = {
    onCancel: () => void;
    isOpen: boolean;
    rowData: StorageTableData;
    // eslint-disable-next-line react/require-default-props
    isMinus?: boolean;
};

export const ActionModal: FC<ModalProps> = ({
    onCancel,
    isOpen,
    rowData,
    isMinus,
}) => {
    const { minusProduct, augmentProduct } = useStorage();
    const [form] = Form.useForm<ActionStorageItem>();
    const { count, key, name } = rowData;

    const selectOption = useMemo(
        () => ({ value: key, label: name }),
        [key, name]
    );

    const handleOk = useCallback(() => {
        const formCount = form.getFieldValue("count") as number;
        const isValidCount = !isMinus || formCount <= count;

        if (isMinus) {
            if (!isValidCount) {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                message.error(
                    "Количество списания не должно превышать остаток"
                );
            }
        }

        if (isValidCount) {
            form.validateFields()
                .then(() => {
                    if (isMinus) {
                        minusProduct({ id: key, count: formCount, discard: true });
                    } else {
                        augmentProduct({ id: key, count: formCount });
                    }
                    form.resetFields();
                    onCancel();
                })
                .catch(() => {
                    // eslint-disable-next-line @typescript-eslint/no-floating-promises
                    message.error("Заполните все поля формы");
                });
        }
    }, [augmentProduct, count, form, isMinus, key, minusProduct, onCancel]);

    return (
        <Modal
            title={isMinus ? "Списать товар" : "Добавить товар"}
            onCancel={onCancel}
            open={isOpen}
            okText={isMinus ? "Списать" : "Добавить"}
            cancelText="Отмена"
            onOk={handleOk}
        >
            <Form
                form={form}
                autoComplete="off"
                requiredMark
                name="ActionProduct"
            >
                <Form.Item name="id" label="Товар">
                    <Select
                        defaultValue={selectOption}
                        disabled
                        placeholder="Выберите товар"
                    />
                </Form.Item>
                <Form.Item label="Остаток">{count}</Form.Item>
                <Form.Item
                    rules={[
                        {
                            required: true,
                            message: "Заполните количество товара",
                        },
                    ]}
                    name="count"
                    label="Количество"
                >
                    <InputNumber min={0} addonBefore="шт./кг." />
                </Form.Item>
            </Form>
        </Modal>
    );
};
