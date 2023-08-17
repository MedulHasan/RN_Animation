import { StyleSheet } from "react-native";
import dpr from "../../style/dpr";

export const forgetPasswordStyle = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        paddingHorizontal: dpr(20),
    },
    text: {
        marginVertical: dpr(24),
        fontSize: 18,
        fontFamily: "Roboto_500Medium",
        color: '#898989',
        lineHeight: 28,
    },
    submit: {
        marginTop: dpr(31),
        flexDirection: "row",
        justifyContent: "center",
    },
});
