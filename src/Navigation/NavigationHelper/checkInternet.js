import NetInfo from "@react-native-community/netinfo";
import { useDispatch } from "react-redux";
import { setIsOnline } from "../../redux/features/network/network";

export const checkInternet = () => {
    const dispatch = useDispatch();

    const unsubscribe = NetInfo.addEventListener((state) => {
        dispatch(setIsOnline(state.isConnected));
    });

    return () => unsubscribe;
};
