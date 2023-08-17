import { I18nManager, StyleSheet } from "react-native";
import BackBtn from "../BackBtn";
import dpr from "../../style/dpr";

export const stackScreenOption = StyleSheet.create({
    container: (colors) => ({
        headerShadowVisible: false,
        headerShown: true,
        headerTitleAlign: 'center',
        headerStyle: {
            backgroundColor: colors.headerPrimary,
        },
        headerTitleStyle: {
            color: colors.headerSecondary,
            fontSize: dpr(20),
            fontFamily: 'DMSans_600SemiBold'
        },
        animation: I18nManager.isRTL 
            ? 'slide_from_left' 
            : 'slide_from_right',
        headerBackTitleVisible: false,
        headerLeft: props => <BackBtn props={props} />
    })
})