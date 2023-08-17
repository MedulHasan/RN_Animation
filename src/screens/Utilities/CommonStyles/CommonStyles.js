import { Dimensions, StyleSheet } from "react-native";
import dpr from "../../../style/dpr";

const { width } = Dimensions.get("screen");

const CommonStyles = StyleSheet.create({
    cont: {
        backgroundColor: '#FFF',
        flex: 1,
    },
    globalContainer: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: dpr(20),
        flex: 1,
    },
    container: {
        backgroundColor: '#FFFFFF',
        paddingTop: dpr(15),
        paddingBottom: dpr(4),
        height: dpr(64),
    },
    hrLine: {
        borderColor: '#cccccc',
        borderBottomWidth: 1,
        width: width - dpr(30),
        marginTop: dpr(20),
    },
    customHeaderContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        height: dpr(40),
    },
    headerName: {
        fontSize: dpr(20),
        fontFamily: "DMSans_700Bold",
        color: '#2C2C2C',
    },
    customHeaderIcon: {
        position: "absolute",
        left: dpr(0),
        paddingLeft: dpr(20),
        top: dpr(22),
        height: dpr(30),
        width: dpr(60),
    },
});

export default CommonStyles;
