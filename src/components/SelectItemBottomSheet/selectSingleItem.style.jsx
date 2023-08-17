import { StyleSheet } from "react-native";
import dpr from "../../style/dpr";

const selectSingleItemStyle = () =>
    StyleSheet.create({
        cont: {
            alignItems: "center",
            borderBottomWidth: 1,
            borderBottomColor: '#DFDFDF',
            paddingTop: dpr(15),
            paddingBottom: dpr(12),
        },
        text: {
            color: '#898989',
            fontFamily: "Roboto_500Medium",
            fontSize: dpr(15),
            lineHeight: dpr(20),
        },
    });

export default selectSingleItemStyle;
