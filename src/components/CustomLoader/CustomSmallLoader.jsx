import React from "react";
import LottieView from "lottie-react-native";
import dpr from "../../style/dpr";
const loader = require("../../assets/lottie/loader.json");

const CustomSmallLoader = () => {
    const styles = { height: dpr(45), width: dpr(40)};
    return (
        <LottieView
            source={loader}
            autoPlay
            style={styles}
        />
    );
};

export default CustomSmallLoader;
