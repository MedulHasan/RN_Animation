import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useAuthCheck from "../hooks/useAuthCheck";
import { appFirstLaunch } from "./NavigationHelper/appFirstLaunch";
import Login from "../Authentication/Login/Login";
import ForgetPassword from "../Authentication/ForgetPassword/ForgetPassword";
import DrawerNavigation from "./Drawer/DrawerNavigation";
import Setting from "../screens/Setting/Setting";
import SelectLanguage from "../screens/Setting/SelectLanguage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import EditProfile from "../screens/Profile/EditProfile/EditProfile";
import ResetPassword from "../Authentication/ResetPassword/ResetPassword";
import PasswordChanged from "../Authentication/PasswordChanged/PasswordChanged";
import Registration from "../Authentication/Registration/Registration";
import ConfirmEmail from "../Authentication/ConfirmEmail/ConfirmEmail";
import AccountCreated from "../Authentication/AccountCreated/AccountCreated";
import Onboard from "../screens/Onboard/Onboard";
import BackBtn from "./BackBtn";
import { stackScreenOption } from "./styles/stackScreenOption.style";
import {
    ACCOUNT_CREATED,
    CONFIRM_EMAIL,
    DRAWER,
    EDIT_PROFILE,
    FORGET_PASSWORD,
    LOGIN,
    ONBOARD,
    ORDER_DETAILS,
    PASSWORD_RESET_DONE,
    RESET_PASSWORD,
    SELECT_LANGUAGE,
    SETTING,
    SIGN_UP,
    TAB_NAVIGATION,
    WITHDRAW,
} from "./screensName";
import useLangTranslation from "../hooks/useLangTranslation";
import { useTheme } from "@react-navigation/native";
import Withdraw from "../screens/Withdraw/Withdraw";
import OrderDetails from "../screens/OrderDetails/OrderDetails";
import TabNavigation from "./BottomTab/TabNavigation";

const Stack = createNativeStackNavigator();

const Welcome = () => {
    const {colors} = useTheme()
    const {trans} = useLangTranslation();
    useAuthCheck();

    const [isFirstLaunch, setIsFirstLaunch] = useState(null);
    useEffect(() => {
        (async () => {
            let isMounted = true;
            if (isMounted) {
                const isFirst = await appFirstLaunch();
                setIsFirstLaunch(isFirst);
            }
            return () => (isMounted = false);
        })();
    }, []);

    if (isFirstLaunch === null) {
        return null;
    }
    return (
        <>
            <Stack.Navigator
                screenOptions={stackScreenOption.container(colors)}
                initialRouteName={isFirstLaunch === true ? ONBOARD : TAB_NAVIGATION}
            >
                <Stack.Group 
                    screenOptions={{ headerShown: false }}
                >
                    <Stack.Screen 
                        name={ONBOARD}
                        component={Onboard}
                    />
                    <Stack.Screen 
                        // name={DRAWER}
                        // component={DrawerNavigation}
                        name={TAB_NAVIGATION} 
                        component={TabNavigation} 
                    />
                    <Stack.Screen 
                        name={LOGIN}
                        component={Login}
                    />
                    <Stack.Screen
                        name={SIGN_UP}
                        component={Registration}
                    />
                    <Stack.Screen
                        name={CONFIRM_EMAIL}
                        component={ConfirmEmail}
                    />
                    <Stack.Screen
                        name={ACCOUNT_CREATED}
                        component={AccountCreated}
                    />
                    <Stack.Screen
                        name={PASSWORD_RESET_DONE}
                        component={PasswordChanged}
                    />
                </Stack.Group>
                <Stack.Screen
                    name={FORGET_PASSWORD}
                    component={ForgetPassword}
                />
                <Stack.Screen
                    name={RESET_PASSWORD}
                    component={ResetPassword}
                    options={{
                        headerLeft: (props) => (
                            <BackBtn props={props} isBackMs={true} />
                        ),
                    }}
                />
                <Stack.Screen
                    name={SETTING}
                >
                    {(props) => (
                        <PrivateRoute>
                            <Setting {...props} />
                        </PrivateRoute>
                    )}
                </Stack.Screen>
                <Stack.Screen
                    name={SELECT_LANGUAGE}
                    options={{title: trans('Select Language')}}
                >
                    {(props) => (
                        <PrivateRoute>
                            <SelectLanguage {...props} />
                        </PrivateRoute>
                    )}
                </Stack.Screen>
                <Stack.Screen name={EDIT_PROFILE}>
                    {(props) => (
                        <PrivateRoute>
                            <EditProfile {...props} />
                        </PrivateRoute>
                    )}
                </Stack.Screen>
                <Stack.Screen 
                    name={WITHDRAW}
                    options={{title: trans('Withdraw')}}
                >
                    {(props) => (
                        <PrivateRoute>
                            <Withdraw {...props} />
                        </PrivateRoute>
                    )}
                </Stack.Screen>
                <Stack.Screen 
                    name={ORDER_DETAILS}
                    options={{title: trans('Order Details')}}
                >
                    {(props) => (
                        <PrivateRoute>
                            <OrderDetails {...props} />
                        </PrivateRoute>
                    )}
                </Stack.Screen>
            </Stack.Navigator>
        </>
    );
};

export default Welcome;
