import { StorageItem } from "./Storage";
import { User } from "./User";

export enum HistoryOperationsType {
    SALE = "sale", // продажа
    BUY = "buy", // покупка
    DISCARD = "discard", // списание
}

export type HistoryItem = {
    id: number;
    product: Pick<StorageItem, "name">;
    user: Pick<User, "name">;
    count: number;
    amount: number;
    operation_type: HistoryOperationsType;
    createdAt: Date;
    price: number;
};

export const HistoryOperationsColor = {
    [HistoryOperationsType.BUY]: "red",
    [HistoryOperationsType.DISCARD]: "red",
    [HistoryOperationsType.SALE]: "green",
};
