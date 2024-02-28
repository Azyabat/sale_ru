import { useUnit } from "effector-react";
import {
    $loadingStorage,
    $storageItems,
    addedStorageItem,
} from "models/Storage";

export const useStorage = () => {
    const storageItems = useUnit($storageItems);
    const isLoading = useUnit($loadingStorage);
    const addProduct = useUnit(addedStorageItem);

    return { storageItems, isLoading, addProduct };
};
