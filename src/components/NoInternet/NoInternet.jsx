import { Text, StyleSheet } from "react-native";
import React from "react";
import dpr from "../../style/dpr";
import useLangTranslation from "../../hooks/useLangTranslation";

const NoInternet = () => {
    const { trans } = useLangTranslation();
    return <Text style={noInternetStyle.text}>{trans("No connection")}</Text>;
};

export default NoInternet;

const noInternetStyle = StyleSheet.create({
    text: {
        textAlign: "center",
        fontFamily: "Roboto_500Medium",
        fontSize: dpr(12),
        backgroundColor: '#F3F3F3',
        color: '#2C2C2C',
        paddingVertical: dpr(2),
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
    },
});
