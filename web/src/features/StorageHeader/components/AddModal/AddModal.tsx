import { Modal } from "antd";
import { FC } from "react";

type ModalProps = {
    onCancel: () => void;
    isOpen: boolean;
};

export const AddModal: FC<ModalProps> = ({ onCancel, isOpen }) => (
    <Modal
        title="Добавить товар"
        onCancel={onCancel}
        open={isOpen}
        okText="Добавить"
        cancelText="Отмена"
    >
        hello
    </Modal>
);
