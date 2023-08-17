import { StyleSheet } from "react-native";
import dpr from "../../style/dpr";

export const confirmEmailStyles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: dpr(24, "w"),
    },
    brokenEmail: {
        marginTop: dpr(40),
    },
    checkEmail: {
        fontFamily: "DMSans_700Bold",
        fontSize: dpr(24),
        marginVertical: dpr(24),
        color: '#2C2C2C',
    },
    text: {
        fontSize: dpr(18),
        fontFamily: "Roboto_500Medium",
        lineHeight: dpr(28),
        color: '#898989',
        textAlign: "center",
    },
    otpContainer: {
        marginTop: dpr(24),
        marginBottom: dpr(15),
        flexDirection: "row",
    },
    otpgap: {
        marginRight: dpr(10),
    },
    textInputField: {
        fontSize: dpr(25),
        borderBottomWidth: 2,
        borderBottomColor: '#898989',
        width: dpr(58, "w"),
        textAlign: "center",
        fontFamily: "DMSans_700Bold",
        fontSize: dpr(32),
        lineHeight: dpr(42),
    },
    resendCode: {
        fontFamily: "Roboto_500Medium",
        fontSize: dpr(18),
        lineHeight: dpr(26),
        color: '#2C2C2C',
    },
    anotherEmailContainer: {
        marginTop: dpr(50),
        paddingHorizontal: dpr(18, "w"),
        paddingBottom: dpr(50),
    },
    checkSpam: {
        fontFamily: "Roboto_500Medium",
        fontSize: dpr(16),
        lineHeight: dpr(26),
        color: '#898989',
        textAlign: "center",
    },
    tryAnother: {
        color: '#2C2C2C',
        textDecorationLine: "underline",
        fontFamily: "Roboto_500Medium",
        fontSize: dpr(16),
        lineHeight: dpr(26),
        textAlign: "center",
    },
    loading: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 0.5,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
    },
    errorText: {
        fontFamily: "Roboto_500Medium",
        fontSize: dpr(14),
        lineHeight: dpr(25),
        color: '#E43147',
        marginBottom: dpr(5),
    },
    zIndex: {
        zIndex: -1,
    }
});
