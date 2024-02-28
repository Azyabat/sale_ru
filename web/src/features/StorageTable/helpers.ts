import { StorageItem } from "types/Storage";

export const prepareStorageItems = (items: StorageItem[]) => {
    const result = items.map((item) => {
        const { id, name, buy, sale, count } = item;

        return { key: id, name, buy, sale, count };
    });

    return result;
};
