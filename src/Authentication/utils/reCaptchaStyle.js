import { StyleSheet } from "react-native";
import dpr from "../../style/dpr";

export const styles = StyleSheet.create({
    reCaptchaButton: {
        marginTop: dpr(16),
        alignSelf: 'flex-start',
        borderColor: '#d3d3d3',
        borderWidth: 1,
        borderRadius: 3,
        padding: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    reCaptchaText: {
        flexDirection: "row",
        alignItems: "center",
        color: '#2C2C2C',
        fontSize: 14,
    },
    checkbox: {
        marginRight: 8,
    },
    reCaptchaIconWrap: {
        marginLeft: 8,
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
    },
    reCaptchaIcon: {
        height: dpr(25),
        width: dpr(25),
    },
    reCaptchaIconText: {
        fontSize: 8,
        marginTop: 2,
        color: '#a3a3a3',
    },
    reCaptchaError: {
        fontFamily: "Roboto_400Regular",
        fontSize: 12,
        marginTop: 2,
        color: '#ef4444',
    },
    bgTransparent: {
        backgroundColor: "transparent"
    },
});
