import { StyleSheet, Dimensions } from "react-native";
import dpr from "../../style/dpr";
const { height } = Dimensions.get("window");

export const passwordChangedStytel = StyleSheet.create({
    container: {
        minHeight: height,
        backgroundColor: '#fff',
        alignItems: "center",
        paddingHorizontal: dpr(24, "w"),
    },
    like: {
        marginTop: dpr(118),
    },
    title: {
        fontFamily: "DMSans_700Bold",
        fontSize: 24,
        lineHeight: 34,
        color: '#2C2C2C',
        textAlign: "center",
        marginVertical: dpr(24),
    },
    text: {
        fontFamily: "Roboto_500Medium",
        fontSize: 18,
        lineHeight: 26,
        textAlign: "center",
        color: '#898989',
        marginBottom: dpr(24),
    },
});
