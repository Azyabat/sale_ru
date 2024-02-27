import { message } from "antd";
import { post } from "api";
import { LogInDto } from "api/types";
import {
    EventPayload,
    createEffect,
    createEvent,
    createStore,
    sample,
} from "effector";
import { JWT } from "helpers/jwt";
import { homePath } from "routes/urls";

export const fetchJwt = createEvent<LogInDto>();
export const fetchedJwtFx = createEffect<
    EventPayload<typeof fetchJwt>,
    { token: string },
    Error
>();

export const $isLoadingJwt = fetchedJwtFx.pending;
export const $errorMessage = createStore<string | null>(null, {
    sid: "$errorMessage",
});

sample({
    clock: fetchJwt,
    filter(clk) {
        return [clk.password, clk.userName].every(Boolean);
    },
    target: fetchedJwtFx,
});

fetchedJwtFx.use((params) => post("/auth/login", params));

sample({
    clock: fetchedJwtFx.fail,
    fn({ error }) {
        return error.message;
    },
    target: $errorMessage,
});

fetchedJwtFx.done.watch(({ result }) => {
    if (result) {
        JWT.addJwt(result.token);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.location = homePath;
    }
});

$errorMessage.watch((state) => {
    if (state) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        message.error(state);
    }
});
