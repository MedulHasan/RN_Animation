import { StyleSheet } from "react-native";
import dpr from "../../style/dpr";

const selectItemBottomSheetStyle = () =>
    StyleSheet.create({
        text: {
            textAlign: "center",
            color: '#898989',
            fontFamily: "Roboto_500Medium",
            fontSize: dpr(20),
            lineHeight: dpr(14),
            paddingTop: dpr(15),
        },
        input: {
            marginTop: dpr(10),
            marginHorizontal: dpr(20),
            borderRadius: 5,
        },
    });

export default selectItemBottomSheetStyle;
