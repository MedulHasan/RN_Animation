import { StyleSheet, Dimensions, I18nManager } from "react-native";
const { height } = Dimensions.get("window");
import dpr from "../../style/dpr";

export const loginStyles = StyleSheet.create({
    container: {
        paddingHorizontal: dpr(20),
        backgroundColor: '#fff',
        minHeight: height,
    },
    loginText: {
        marginTop: dpr(45),
        marginBottom: dpr(4),
        fontSize: dpr(24),
        fontFamily: "DMSans_700Bold",
    },
    inputTextContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: dpr(16),
    },
    textErrorMessage: {
        fontSize: dpr(13),
        fontFamily: "Roboto_500Medium",
        color: '#E43147',
    },
    inputText: {
        fontSize: dpr(15),
        fontFamily: "Roboto_500Medium",
        color: '#2C2C2C',
    },
    inputFieldContainer: (error) => ({
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: error ? '#E34659' : '#898989',
    }),
    inputField: {
        fontSize: dpr(18),
        fontFamily: "Roboto_500Medium_Italic",
        padding: dpr(10),
        width: "93%",
        textAlign: I18nManager.isRTL ? 'right' : 'left'
    },
    forgetPassword: {
        fontFamily: "Roboto_500Medium",
        color: '#898989',
        marginTop: dpr(5),
    },
    forgetCont: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    loginButton: {
        marginTop: dpr(25),
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#FCCA19',
        height: dpr(60),
        borderRadius: dpr(6),
        width: dpr("wf") - dpr(40),
    },
    loginButtonText: {
        fontFamily: "DMSans_700Bold",
        fontSize: dpr(20),
        color: '#333025',
    },
    hrLine: {
        borderColor: '#DFDFDF',
        borderBottomWidth: 1,
        width: (dpr("wf") - dpr(240)) / 2,
    },
    or: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: dpr(18),
        width: dpr("wf") - dpr(40),
    },
    orText: {
        fontSize: dpr(18),
        lineHeight: dpr(26),
        fontFamily: "Roboto_500Medium",
        marginHorizontal: dpr(10),
        color: '#898989',
    },
    ssoLogin: {
        marginBottom: dpr(15),
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: '#4285F4',
        height: dpr(60),
        borderRadius: dpr(6),
        position: "relative",
    },
    ssoFb:{ backgroundColor: '#3C5A9A' },
    ssoLogo: {
        marginRight: dpr(20),
        backgroundColor: '#FFFFFF',
        height: dpr(40),
        width: dpr(40),
        marginLeft: dpr(8),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: dpr(4),
    },
    ssoText: {
        fontFamily: "Roboto_500Medium",
        fontSize: dpr(18),
        color: '#FFFFFF',
    },
    newAccount: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: dpr(25),
        fontSize: dpr(16),
        marginBottom: dpr(20),
    },
    pb65: { paddingBottom: dpr(65) },
    doNotAccount: {
        fontFamily: "Roboto_500Medium",
        color: '#898989',
        fontSize: dpr(16),
        lineHeight: dpr(26),
    },
    register: {
        fontFamily: "Roboto_500Medium",
        fontSize: dpr(16),
        lineHeight: dpr(26),
        color: '#2C2C2C',
    },
    noteText: {
        fontFamily: "Roboto_500Medium_Italic",
        fontSize: dpr(13),
        marginTop: dpr(5),
        color: '#E43147',
        lineHeight: dpr(18),
    },
    mb5: (error) => ({
        marginBottom: error ? dpr(5) : 0,
    }),
    color_898989: {
        color: '#898989'
    },
    passIconCont: {
        height: 18,
        width: 20,
        position: "relative",
    },
    passIconSubCont: {
        position: "absolute",
        bottom: 0,
    },
    fbContainerMarginBottom: {
        marginBottom: 0
    },
});
