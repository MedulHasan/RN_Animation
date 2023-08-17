import { StyleSheet } from "react-native";
import dpr from "../../style/dpr";

export const resetPasswordStyle = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        paddingHorizontal: dpr(20),
        paddingTop: dpr(40),
    },
    text: {
        fontFamily: "Roboto_500Medium",
        fontSize: 18,
        lineHeight: 27,
        color: '#898989',
        textAlign: "center",
    },
    errMeaagae: {
        fontFamily: "Roboto_500Medium",
        fontSize: 13,
        lineHeight: 26,
        color: "red",
        marginTop: 2,
    },
    cancel: {
        textAlign: "center",
        fontFamily: "Roboto_500Medium",
        fontSize: 18,
        lineHeight: 26,
        color: '#898989',
        marginTop: dpr(30),
    },
});
