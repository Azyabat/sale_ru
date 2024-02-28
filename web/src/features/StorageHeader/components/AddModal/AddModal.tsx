import { Form, Input, InputNumber, Modal, message } from "antd";
import { useStorage } from "hooks/useStorage";
import { FC, useCallback } from "react";
import { AddStorageItem } from "types/Storage";

type ModalProps = {
    onCancel: () => void;
    isOpen: boolean;
};

const rules = {
    name: [{ required: true, message: "Заполните наименование товара" }],
    count: [{ required: true, message: "Заполните количество товара" }],
    buy: [{ required: true, message: "Заполните цену покупки" }],
    sale: [{ required: true, message: "Заполните цену продажи" }],
};

export const AddModal: FC<ModalProps> = ({ onCancel, isOpen }) => {
    const [form] = Form.useForm<AddStorageItem>();
    const { addProduct } = useStorage();

    const handleOk = useCallback(() => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        form.validateFields()
            .then(() => {
                addProduct(form.getFieldsValue());
                form.resetFields();
                onCancel();
            })
            .catch(() => {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                message.error("Заполните все поля формы");
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [form]);

    return (
        <Modal
            title="Добавить товар"
            onCancel={onCancel}
            open={isOpen}
            okText="Добавить"
            cancelText="Отмена"
            onOk={handleOk}
        >
            <Form name="AddProduct" autoComplete="off" requiredMark form={form}>
                <Form.Item
                    rules={rules.name}
                    name="name"
                    label="Наименование товара"
                >
                    <Input />
                </Form.Item>
                <Form.Item rules={rules.count} name="count" label="Количество">
                    <InputNumber min={0} addonBefore="шт./кг." />
                </Form.Item>
                <Form.Item rules={rules.buy} name="buy" label="Цена закупа">
                    <InputNumber min={0} addonBefore="руб." />
                </Form.Item>
                <Form.Item rules={rules.sale} name="sale" label="Цена продажи">
                    <InputNumber min={0} addonBefore="руб." />
                </Form.Item>
            </Form>
        </Modal>
    );
};
