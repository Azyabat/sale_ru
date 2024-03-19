import { useGate } from "effector-react";
import { HistoryTable } from "features";
import { HistoryGate } from "models/History";

export const HistoryPage = () => {
    useGate(HistoryGate);

    return <HistoryTable />;
};
