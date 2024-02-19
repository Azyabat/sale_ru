import { Error as CustomError, LogInDto } from "api/types";
import { createDomain, EventPayload } from "effector";
import { User } from "types";

export const domain = createDomain("UserProfile");

export const fetchedUserProfile = domain.createEvent<LogInDto>();

export const fetchUserProfileFx = domain.createEffect<
    EventPayload<typeof fetchedUserProfile>,
    User | CustomError,
    Error
>();

export const $userStore = domain.createStore<User | null>(null, {
    sid: "userStore",
});

export const $loadingUserProfile = fetchUserProfileFx.pending;
