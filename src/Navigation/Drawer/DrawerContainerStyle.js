import { StyleSheet, Dimensions } from "react-native";
import dpr from "../../style/dpr";
const { height } = Dimensions.get("window");

export const drawerStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2C2C2C',
        paddingHorizontal: dpr(20),
        paddingTop: dpr(12),
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: dpr(-15),
    },
    compIcon: {
        height: dpr(40),
        width: dpr(180),
        resizeMode: "contain",
    },
    closeIconCont: {
        width: dpr(50),
        height: dpr(50),
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    user: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: dpr(50),
        marginBottom: dpr(28),
        marginLeft: 10,
    },
    userImage: {
        width: dpr(60),
        height: dpr(60),
        borderRadius: 50,
    },
    userIcoin: {
        backgroundColor: '#3C3C3C',
        width: dpr(50),
        height: dpr(50),
        borderRadius: 50,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginRight: dpr(12, "w"),
    },
    noAccount: {
        color: '#FFFFFF',
        fontFamily: "DMSans_700Bold",
        fontSize: dpr(14),
    },
    createAccount: {
        fontFamily: "Roboto_500Medium",
        color: '#DFDFDF',
        fontSize: dpr(10),
    },
    hrLine: {
        borderTopWidth: 1,
        borderTopColor: '#505050',
        marginTop: dpr(36),
        marginBottom: dpr(24),
    },
    drawerItem: {
        marginLeft: 0,
        marginVertical: height < 550 ? -4 : 0,
    },
    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    itemText: {
        color: '#DFDFDF',
        fontFamily: "DMSans_500Medium",
        fontSize: dpr(14),
        marginLeft: dpr(12),
    },
});
