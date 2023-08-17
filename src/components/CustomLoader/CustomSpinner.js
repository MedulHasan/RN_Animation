import React from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";
import dpr from "../../style/dpr";

const CustomSpinner = ({ filePath, size }) => {
    return (
        <View style={styles.spinnerContainer}>
            <LottieView source={filePath} autoPlay style={size} />
        </View>
    );
};

const styles = StyleSheet.create({
    spinnerContainer: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: dpr(6),
    },
});

export default CustomSpinner;
