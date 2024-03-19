import { useUnit } from "effector-react";
import { $history, $loadingHistory } from "models/History";

export const useHistory = () => {
    const history = useUnit($history);
    const isLoading = useUnit($loadingHistory);

    return {
        history,
        isLoading,
    };
};
