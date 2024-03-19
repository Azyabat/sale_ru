import { get } from "api";
import { createEffect, createStore, sample } from "effector";
import { createGate } from "effector-react";
import { HistoryItem } from "types/History";

export const HistoryGate = createGate("historyGate");

export const $history = createStore<HistoryItem[]>([], { sid: "$history" });

export const fetchedHistoryFx = createEffect<unknown, HistoryItem[], Error>(
    "fetchedHistoryFx"
);

export const $loadingHistory = fetchedHistoryFx.pending;

fetchedHistoryFx.use(() => get("/history"));

sample({ clock: HistoryGate.open, target: fetchedHistoryFx });

sample({
    clock: fetchedHistoryFx.done,
    fn({ result }) {
        return result;
    },
    target: $history,
});

$history.reset(HistoryGate.close);
