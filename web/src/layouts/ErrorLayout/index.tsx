import { message } from "antd";
import { useStore, useUnit } from "effector-react";
import { $errors, errorsReset } from "models/Errors";
import { FC, ReactNode, useCallback, useEffect } from "react";

export const ErrorLayout: FC<{ children: ReactNode }> = (props) => {
    const errors = useStore($errors);
    const resetErrors = useUnit(errorsReset);

    const [messageApi, contextHolder] = message.useMessage();

    const showErrorMessage = useCallback(() => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        messageApi.open({ type: "error", content: errors }).then(() => {
            resetErrors();
        });
    }, [errors, messageApi]);

    useEffect(() => {
        if (errors) {
            showErrorMessage();
        }
    }, [errors]);

    return (
        <>
            {contextHolder}
            {props.children}
        </>
    );
};
