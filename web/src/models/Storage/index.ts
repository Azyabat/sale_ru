import { get, post, remove } from "api";
import { createEffect, createEvent, createStore, sample } from "effector";
import { createGate } from "effector-react";
import {
    ActionStorageItem,
    AddStorageItem,
    DeleteStorageItem,
    StorageGate as StorageGateType,
    StorageItem,
} from "types/Storage";

export const StorageGate = createGate<StorageGateType>("StorageGate");

export const $storageItems = createStore<StorageItem[]>([], {
    sid: "$storageItems",
});

export const fetchedStorageItems = createEvent("fetchedStorageItems");

export const fetchStorageItemsFx = createEffect<
    StorageGateType | void,
    StorageItem[],
    Error
>();

export const $loadingStorage = fetchStorageItemsFx.pending;

export const augmentStorageItem = createEvent<ActionStorageItem>();

export const augmentStorageItemFx = createEffect<
    ActionStorageItem,
    void,
    Error
>("augmentStorageItemFx");

export const minusStorageItem = createEvent<ActionStorageItem>();

export const minusStorageItemFx = createEffect<ActionStorageItem, void, Error>(
    "minusStorageItemFx"
);

export const addedNewStorageItem = createEvent<AddStorageItem>(
    "addedNewStorageItem"
);

export const addStorageItemFx = createEffect<AddStorageItem, void, Error>(
    "addStorageItemFx"
);

export const deleteStorageItem =
    createEvent<DeleteStorageItem>("deleteStorageItem");

export const deleteStorageItemFx = createEffect<DeleteStorageItem, void, Error>(
    { sid: "deleteStorageItemFx" }
);

sample({
    clock: [StorageGate.open, fetchedStorageItems],
    target: fetchStorageItemsFx,
});

sample({
    clock: minusStorageItem,
    target: minusStorageItemFx,
});

sample({
    clock: augmentStorageItem,
    target: augmentStorageItemFx,
});

sample({
    clock: fetchStorageItemsFx.done,
    fn({ result }) {
        return result;
    },
    target: $storageItems,
});

sample({ clock: addedNewStorageItem, target: addStorageItemFx });

sample({ clock: deleteStorageItem, target: deleteStorageItemFx });

sample({
    clock: [
        addStorageItemFx.done,
        minusStorageItemFx.doneData,
        augmentStorageItemFx.done,
        deleteStorageItemFx.done,
    ],
    target: fetchedStorageItems,
});

fetchStorageItemsFx.use(() => get<StorageItem[]>("/storage"));

addStorageItemFx.use((options) => post("/storage/add_product", options));

minusStorageItemFx.use((options) => post("/storage/subtract_product", options));

augmentStorageItemFx.use((options) =>
    post("/storage/augment_product", options)
);

deleteStorageItemFx.use((options) => remove(`/storage/delete/`, options));

$storageItems.reset(StorageGate.close);
