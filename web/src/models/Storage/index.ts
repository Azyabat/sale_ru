import { get, post } from "api";
import { createEffect, createEvent, createStore, sample } from "effector";
import { createGate } from "effector-react";
import {
    AddStorageItem,
    StorageGate as StorageGateType,
    StorageItem,
} from "types/Storage";

export const $storageItems = createStore<StorageItem[]>([], {
    sid: "$storageItems",
});

export const StorageGate = createGate<StorageGateType>("StorageGate");

export const fetchStorageItemsFx = createEffect<
    StorageGateType | void,
    StorageItem[],
    Error
>();

export const fetchedStorageItems = createEvent("fetchedStorageItems");

export const $loadingStorage = fetchStorageItemsFx.pending;

export const addedStorageItem = createEvent<AddStorageItem>("addedStorageItem");

export const addStorageItemFx = createEffect<AddStorageItem, void, Error>(
    "addStorageItemFx"
);

sample({
    clock: [StorageGate.open, fetchedStorageItems],
    target: fetchStorageItemsFx,
});

fetchStorageItemsFx.use(() => get<StorageItem[]>("/storage"));

addStorageItemFx.use((options) => post("/storage/add_product", options));

sample({
    clock: fetchStorageItemsFx.done,
    fn({ result }) {
        return result;
    },
    target: $storageItems,
});

sample({ clock: addedStorageItem, target: addStorageItemFx });

sample({ clock: addStorageItemFx.done, target: fetchedStorageItems });

$storageItems.reset(StorageGate.close);
