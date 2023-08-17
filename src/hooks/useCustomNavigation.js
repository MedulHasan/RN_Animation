import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";

const useCustomNavigation = () => {
    let navigateTimeOutId = null;
    let pushTimeoutId = true;
    const delay = 1000;
    const defaultNavigation = useNavigation();
    const navigation = {
        navigate: useCallback((name, params) => {
            if (!navigateTimeOutId) return;
            navigateTimeOutId = false;
            defaultNavigation.navigate(name, params);
            setTimeout(() => {
                navigateTimeOutId = true;
            }, delay);
        }, []),

        push: useCallback((name, params) => {
            if (!pushTimeoutId) return;
            pushTimeoutId = false;
            defaultNavigation.push(name, params);
            setTimeout(() => {
                pushTimeoutId = true;
            }, delay);
        }, []),
    };

    return navigation;
};

export default useCustomNavigation;
