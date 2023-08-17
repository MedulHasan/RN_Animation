import { I18nManager, StyleSheet } from "react-native";
import dpr from "../../../style/dpr";

export const customTextInputStyle = (
    isFocus,
    value,
    isError,
    layout,
    editable,
    isConvertible,
    bgColor,
    borderBottomWidth
) => {
    return StyleSheet.create({
        label: {
            fontFamily: "DMSans_500Medium",
            fontSize: dpr(15),
            color: '#2C2C2C',
            marginBottom: dpr(9),
            marginTop: dpr(18),
        },
        inputCont: {
            flexDirection: "row",
            alignItems: "center",
            borderBottomWidth: borderBottomWidth,
            borderWidth: borderBottomWidth ? 0 : 1,
            borderColor:
                !editable && isConvertible
                    ? '#DFDFDF'
                    : !editable
                    ? '#DFDFDF'
                    : isError
                    ? '#DFDFDF'
                    : isFocus
                    ? '#DFDFDF'
                    : '#DFDFDF',
            borderRadius: 2,
            paddingHorizontal: dpr(14),
            backgroundColor:
                !editable && isConvertible
                    ? '#FFFFFF'
                    : !editable
                    ? '#FFFFFF'
                    : isFocus
                    ? bgColor || '#FFFFFF'
                    : '#FFFFFF',
            height: dpr(48),
        },
        icon: {
            marginRight: dpr(14),
        },
        input: {
            fontFamily: "Roboto_500Medium",
            color:
                !editable && isConvertible
                    ? '#2C2C2C'
                    : !editable
                    ? '#2C2C2C'
                    : '#2C2C2C',
            fontSize: dpr(16),
            margin: 0,
            paddingLeft: 0,
            height: layout?.height || undefined,
            lineHeight: dpr(17),
            textAlign: I18nManager.isRTL ? 'right' : 'left'
        },
        error: {
            marginTop: dpr(8),
            color: '#E43147',
            width: layout?.width || undefined,
            fontFamily: "Gilroy-Medium",
            fontSize: dpr(12),
            lineHeight: dpr(17),
        },
        info: {
            marginTop: dpr(8),
            color: '#2C2C2C',
            fontFamily: "Gilroy-Medium",
            fontSize: dpr(11),
            lineHeight: dpr(17),
            width: layout?.width || undefined,
        },
        mt: {
            marginTop: dpr(8),
        },
        rightIcon: {
            marginLeft: dpr(7)
        }
    });
};
