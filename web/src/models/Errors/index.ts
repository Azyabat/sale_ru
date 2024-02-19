import { createDomain } from "effector";

export const domain = createDomain("Errors");

export const $errors = domain.createStore<string | null>(null, {
    sid: "errorsStore",
});

export const errorsReset = domain.createEvent();

$errors.on(errorsReset, () => null);
