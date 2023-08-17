import { StyleSheet } from "react-native";
import dpr from "../../style/dpr";

export const styles = StyleSheet.create({
    container: {
        minHeight: dpr(48),
        width: dpr("wf"),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: dpr(10),
        paddingHorizontal: dpr(12),
        backgroundColor: "rgba(44, 44, 44, 0.95)",
    },
    commonText1:{
        width: dpr("wf") - dpr(70)
    },
    cartText: {
        width: dpr("wf") - dpr(100)
    },
    text1: {
        fontFamily: dpr(13),
        lineHeight: dpr(18),
        fontFamily: "DMSans_500Medium",
        alignSelf: "center",
        color: '#FFFFFF',
    },
    undoText1:{
        fontFamily: dpr(13),
        lineHeight: dpr(18),
        fontFamily: "DMSans_500Medium",
        alignSelf: "center",
        color: '#FFFFFF',
        width: dpr("wf") - dpr(100)
    },
    undoBtn: {
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: dpr(70),
        backgroundColor: '#FCCA19',
        paddingHorizontal: dpr(3),
    },
    cartBtn:{
        width: dpr(70)
    },
    redColor: {
        color: "red"
    },
    goldColor: {
        color: '#fcca19'
    }
});
