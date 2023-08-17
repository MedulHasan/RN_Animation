import { StyleSheet } from "react-native";
import dpr from "../../style/dpr";

export const settingStyle = StyleSheet.create({
    settingRoot: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        paddingHorizontal: dpr(20),
        paddingVertical: dpr(20),
    },
    hrLine: {
        borderBottomWidth: 1,
        borderColor: '#DFDFDF',
    },
    itemBox: {
        borderWidth: 1,
        borderColor: '#DFDFDF',
        borderRadius: dpr(6),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: dpr(18),
        paddingHorizontal: dpr(18),
    },
    title: {
        fontFamily: "DMSans_500Medium",
        fontSize: dpr(18),
        color: '#2C2C2C',
        paddingBottom: dpr(8),
    },
    subTitle: {
        fontFamily: "Roboto_500Medium",
        fontSize: dpr(14),
        color: '#898989',
    },

    languageItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomColor: '#DFDFDF',
        borderBottomWidth: 1,
        paddingVertical: dpr(18),
    },
    btmBorder: (itemId, lastItemId) => ({
        borderBottomWidth: itemId === lastItemId ? 0 : 1
    }),
    languageTitle: {
        fontFamily: "DMSans_500Medium",
        fontSize: dpr(16),
        color: '#898989',
    },
    color: (textColor) => ({
        color: textColor
    })
});