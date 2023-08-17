import { View, Image } from "react-native";
import React from "react";
import { styles } from "./SplashScreenStyles";

const source = require("../../assets/splash.png");

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={source} />
        </View>
    );
};

export default SplashScreen;
