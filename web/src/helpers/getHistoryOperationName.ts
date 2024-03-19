import { HistoryOperationsType } from "types/History";

export const getHistoryOperationName = (operation: HistoryOperationsType) => {
    let result = "";

    switch (operation) {
        case HistoryOperationsType.BUY:
            result = "Покупка";
            break;

        case HistoryOperationsType.DISCARD:
        case HistoryOperationsType.SALE:
            result = "Продажа";
            break;

        default:
            result = "Не известный тип";
            break;
    }

    return result;
};
