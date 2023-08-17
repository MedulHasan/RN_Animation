import { StyleSheet } from "react-native";
import dpr from "../../../style/dpr";

export const selectInputStyle = (title, isError, layout, disabled) =>
    StyleSheet.create({
        selectInputCont: {
            height: dpr(48),
            borderWidth: 1,
            borderColor: isError ? '#E43147' : title ? '#DFDFDF' : '#DFDFDF',
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: dpr(16),
            backgroundColor: disabled
                ? '#F3F3F3'
                : title
                ? '#FFFFFF'
                : '#FFFFFF',
            borderRadius: dpr(2),
        },
        selectInputText: {
            color: title ? '#898989' : '#898989',
            fontFamily: "DMSans_500Medium",
            fontSize: dpr(15),
            marginRight: 5,
        },
        label: {
            fontFamily: "DMSans_500Medium",
            fontSize: dpr(15),
            color: '#2C2C2C',
            marginBottom: dpr(9),
            marginTop: dpr(18),
        },
        error: {
            marginTop: dpr(8),
            color: '#C8191C',
            width: layout?.width - dpr(5) || undefined,
            fontFamily: "DMSans_500Medium",
            fontSize: dpr(11),
            lineHeight: dpr(17),
        },
    });
