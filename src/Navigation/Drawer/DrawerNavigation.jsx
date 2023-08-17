import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigation from "../BottomTab/TabNavigation";
import DrawerContainer from "./DrawerContainer";
import HeaderTitleFunc from "../NavigationHelper/HeaderTitleFunc";
import { drawerScreenOption } from "../styles/drawerScreenOption.style";
import { TAB_NAVIGATION } from "../screensName";
import { useTheme } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    const {colors} = useTheme()
    return (
        <Drawer.Navigator
            screenOptions={({navigation}) => (
                drawerScreenOption.container(navigation, colors)
            )}
            drawerContent={(props) => <DrawerContainer {...props} />}
        >
            <Drawer.Screen 
                name={TAB_NAVIGATION} 
                component={TabNavigation} 
                options={({route}) => ({
                    headerTitle: HeaderTitleFunc(route),
                })} />
        </Drawer.Navigator>
    );
};
export default DrawerNavigation;
