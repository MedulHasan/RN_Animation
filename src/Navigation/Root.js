import React from "react";
import Toast from "react-native-toast-message";
import Welcome from "./Welcome";
import NoInternet from "../../src/components/NoInternet/NoInternet";
import { toastConfig } from "../../src/components/ToastConfig/toastConfig";
import BackOnline from "../../src/components/NoInternet/BackOnline";
import { useSelector } from "react-redux";
import { networkSelector } from "../redux/features/network/networkSelector";

const Root = () => {
    const {isOnline, initialInternetCheck} = useSelector(networkSelector)
    return (
        <>
            <Welcome />
            {!isOnline && <NoInternet />}
            {isOnline && initialInternetCheck && <BackOnline />}
            <Toast config={toastConfig} />
        </>
    );
};

export default Root;
