import { useUnit } from "effector-react";
import {
    $loadingStorage,
    $storageItems,
    addedNewStorageItem,
    augmentStorageItem,
    deleteStorageItem,
    fetchedStorageItems,
    minusStorageItem,
} from "models/Storage";

export const useStorage = () => {
    const storageItems = useUnit($storageItems);
    const isLoading = useUnit($loadingStorage);
    const addProduct = useUnit(addedNewStorageItem);
    const minusProduct = useUnit(minusStorageItem);
    const augmentProduct = useUnit(augmentStorageItem);
    const deleteProduct = useUnit(deleteStorageItem);
    const fetch = useUnit(fetchedStorageItems);

    return {
        storageItems,
        isLoading,
        addProduct,
        minusProduct,
        augmentProduct,
        deleteProduct,
        fetch,
    };
};
