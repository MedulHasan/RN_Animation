import { StyleSheet } from "react-native";
import MenuBtn from "../Drawer/MenuBtn";
import dpr from "../../style/dpr";

export const drawerScreenOption = StyleSheet.create({
    container: (navigation, colors) => ({
        // headerLeft: () => <MenuBtn navigation={navigation} />,
        headerLeft: () => null,
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
        headerTintColor: colors.bgSecondary,
        headerBackTitleVisible: false,
        drawerIcon: () => null,
        drawerType: 'front',
        headerRight: () => null,
      }),
})