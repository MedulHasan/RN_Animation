import { StyleSheet } from "react-native";
import dpr from "../../style/dpr"; 
export const bottomSheetStyles = (indicatorColor, bgColor) =>
    StyleSheet.create({
        contentContainer: {
            backgroundColor: '#FFFFFF',
            paddingVertical: dpr(18),
        },
        bottomSheetIndicator: {
            backgroundColor: indicatorColor || '#CDCCD0',
            height: 3,
            width: dpr(32),
        },
        bottomSheet: {
            backgroundColor: bgColor,
            borderTopLeftRadius: dpr(28),
            borderTopRightRadius: dpr(28),
        }
    });
