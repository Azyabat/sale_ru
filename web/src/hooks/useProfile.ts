import { useUnit } from "effector-react";
import { JWT } from "helpers/jwt";
import {
    $loadingUserProfile,
    $userStore,
    fetchedUserProfile,
    logOutProfile,
} from "models/User";
import { useCallback } from "react";

export const useProfile = () => {
    const profile = useUnit($userStore);
    const isLoading = useUnit($loadingUserProfile);
    const handleLogOut = useUnit(logOutProfile);
    const fetchProfile = useUnit(fetchedUserProfile);

    const logOut = useCallback(() => {
        handleLogOut();
        JWT.logOut();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const isUnauthorized = !profile && !isLoading;

    return { profile, isUnauthorized, logOut, fetchProfile };
};
