import { message } from "antd";
import { get } from "api";
import { createDomain, EventPayload, sample } from "effector";
import { createGate } from "effector-react";
import { User } from "types";

export const domain = createDomain("UserProfile");

export const fetchedUserProfile = domain.createEvent();

export const ProfileGate = createGate("ProfileGate");

export const fetchUserProfileFx = domain.createEffect<
    EventPayload<typeof fetchedUserProfile>,
    User,
    Error
>();

export const $userStore = domain.createStore<User | null>(null, {
    sid: "userStore",
});

export const logOutProfile = domain.createEvent();

export const $loadingUserProfile = fetchUserProfileFx.pending;

sample({
    clock: [fetchedUserProfile, ProfileGate.open],
    source: $userStore,
    filter(store) {
        return !store;
    },
    target: fetchUserProfileFx,
});

fetchUserProfileFx.use(() => get("/user/profile"));

fetchUserProfileFx.fail.watch(({ error }) => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    message.error(error.message);
});

sample({
    clock: fetchUserProfileFx.done,
    fn({ result }) {
        return result;
    },
    target: $userStore,
});

$userStore.reset([ProfileGate.close, logOutProfile]);
