import React, { useEffect } from "react";
import {StyleSheet} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useDispatch } from "react-redux";
import { useTheme } from "@react-navigation/native";
import HomeIcon from "../../assets/svgs/homeIcon.svg";
import ProfileIcon from "../../assets/svgs/profileIcon.svg";
import OrderListIcon from "../../assets/svgs/order-list.svg";
import walletIcon from "../../assets/svgs/wallet.svg";
import Home from "../../screens/Home/Home";
import Profile from "../../screens/Profile/Profile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import useAuth from "../../hooks/useAuth";
import useLangTranslation from "../../hooks/useLangTranslation";
import { HOME, MY_ACCOUNT, MY_WALLET, ORDER_LIST } from "../screensName";
import TabItem from "./TabItem";
import dpr from "../../style/dpr";
import OrderList from "../../screens/OrderList/OrderList";
import MyWallet from "../../screens/MyWallet/MyWallet";
import { bottomTabHeight } from "../../constants/constVariable";
import logo from "../../assets/svgs/logo.svg";
import CustomSVG from "../../components/CustomSVG/CustomSVG";
import UserStatus from "./UserStatus";
import { useLazyGetPreferenceQuery } from "../../redux/features/preferences/preferenceAPi";
import { useLazyRecaptchaQuery } from "../../redux/features/auth/reCaptcha/recaptchaApi";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    const { trans } = useLangTranslation();
    const { access_token } = useAuth();
    const dispatch = useDispatch();

    const [getPreference] = useLazyGetPreferenceQuery();
    const [recaptcha] = useLazyRecaptchaQuery();
    useEffect(() => {
        getPreference();
        recaptcha();
    }, []);

    const {colors} = useTheme()
    const tabStyle = TabStyle(colors)

    return (
        <Tab.Navigator
            screenOptions={tabStyle.screenOptions}
        >
            <Tab.Screen
                name={HOME}
                component={Home}
                options={{
                    headerTitle: () => <CustomSVG svgIcon={logo} isRtl={1} />,
                    headerRight: () => <UserStatus />,
                    tabBarIcon: ({ focused }) => <TabItem 
                        Icon={HomeIcon} 
                        focused={focused} 
                        label={trans("Home")} 
                    />,
                }}
            />
            <Tab.Screen
                name={ORDER_LIST}
                options={{
                    tabBarIcon: ({ focused }) => <TabItem 
                        Icon={OrderListIcon}
                        focused={focused}
                        label={trans("Order List")} 
                    />,
                }}
            >
                {(props) => (
                    <PrivateRoute>
                        <OrderList {...props} />
                    </PrivateRoute>
                )}
            </Tab.Screen>
            <Tab.Screen
                name={MY_WALLET}
                options={{
                    tabBarIcon: ({ focused }) => <TabItem 
                        Icon={walletIcon}
                        focused={focused}
                        label={trans("My Wallet")} 
                    />
                }}
            >
                {(props) => (
                    <PrivateRoute>
                        <MyWallet {...props} />
                    </PrivateRoute>
                )}
            </Tab.Screen>
            <Tab.Screen
                name={MY_ACCOUNT}
                options={{
                    tabBarIcon: ({ focused }) => <TabItem 
                        Icon={ProfileIcon}
                        focused={focused}
                        label={trans("Profile")} 
                    />
                }}
            >
                {(props) => (
                    <PrivateRoute>
                        <Profile {...props} />
                    </PrivateRoute>
                )}
            </Tab.Screen>
        </Tab.Navigator>
    );
};

export default TabNavigation;

const TabStyle = (colors) => StyleSheet.create({
    screenOptions: {
        headerShadowVisible: false,
        tabBarHideOnKeyboard: true,
        headerShown: true,
        tabBarShowLabel: false,
        tabBarStyle: {
            position: "absolute",
            left: 0,
            bottom: 0,
            backgroundColor: colors.headerSecondary,
            height: bottomTabHeight,
            borderTopWidth: 1,
            borderColor: colors.bottomTabTopBorder,
            elevation: 0,
        },
        headerTitleAlign: 'center',
        headerStyle: {
            backgroundColor: colors.headerPrimary,
        },
        headerTitleStyle: {
            color: colors.headerSecondary,
            fontSize: dpr(20),
            fontFamily: 'DMSans_600SemiBold'
        },
    }
})
