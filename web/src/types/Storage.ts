export type StorageItem = {
    id: number;
    name: string;
    count: number;
    buy: number;
    sale: number;
};

export type StorageGate = {
    search?: string;
};

export type AddStorageItem = Omit<StorageItem, "id">;

export type ActionStorageItem = Pick<StorageItem, "id" | "count">;

export type DeleteStorageItem = Pick<StorageItem, "id">;
