import { useGate } from "effector-react";
import { StorageHeader, StorageTable } from "features";
import { StorageGate } from "models/Storage";

export const StoragePage = () => {
    useGate(StorageGate);

    return (
        <>
            <StorageHeader />
            <StorageTable />
        </>
    );
};
