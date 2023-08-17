import { StyleSheet, Dimensions } from "react-native";
import dpr from "../../style/dpr";
const { height } = Dimensions.get("window");

export const accountCreatedStyle = StyleSheet.create({
    container: {
        minHeight: height,
        backgroundColor: '#fff',
        paddingHorizontal: dpr(20),
        alignItems: "center",
    },
    icon: {
        marginTop: dpr(120),
    },
    text: {
        fontFamily: "DMSans_700Bold",
        fontSize: dpr(24),
        lineHeight: dpr(33),
        textAlign: "center",
        color: '#2C2C2C',
        marginTop: dpr(45),
        marginHorizontal: dpr(40),
    },
});
