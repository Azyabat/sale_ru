import { post } from "api";
import { sample } from "effector";
import { $errors } from "models/Errors";
import { spread } from "patronum";
import { $userStore, fetchedUserProfile, fetchUserProfileFx } from ".";

sample({
    clock: fetchedUserProfile,
    filter(options) {
        return Boolean(options.password) && Boolean(options.userName);
    },
    target: fetchUserProfileFx,
});

fetchUserProfileFx.use((options) => post("/auth/registration", options));

sample({
    clock: fetchUserProfileFx.done,
    fn({ result }) {
        if ("status" in result) {
            return { user: null, error: result.message };
        }

        return { user: result, error: null };
    },
    target: spread({
        targets: {
            user: $userStore,
            error: $errors,
        },
    }),
});
