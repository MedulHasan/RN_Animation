import React from "react";
import { View, TouchableOpacity, Pressable, Text, Image } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import useAuth from "../../hooks/useAuth";
import { drawerStyle } from "./DrawerContainerStyle";
import TimesIcon from "../../assets/svgs/times.svg";
import UserIcon from "../../assets/svgs/user.svg";
import LoginIcon from "../../assets/svgs/login.svg";
import LogoutIcon from "../../assets/svgs/logout.svg";
import SettingsIcon from "../../assets/svgs/settings.svg";
import HomeIcon from "../../assets/svgs/home.svg";
import { useDispatch } from "react-redux";
import { queryResponse } from "../../redux/features/util/processResponse.js";
import usePreferences from "../../hooks/usePreferences";
import ProgressiveImage from "../../components/ProgressiveImage";
import dpr from "../../style/dpr";
import resetReduxStore from "../../helper/resetReduxStore";
import { BASE_API_URL_STG } from "@env";
import { useState } from "react";
import CustomToastModal from "../../components/CustomToastModal/CustomToastModal";
import useCustomToast from "../../hooks/useCustomToast";
import useLangTranslation from "../../hooks/useLangTranslation";
import { HOME, LOGIN, MY_ACCOUNT, SETTING } from "../screensName";
import CustomDrawerItem from "./CustomDrawerItem";
import CustomSVG from "../../components/CustomSVG/CustomSVG";

const DrawerContainer = (props) => {
    const { trans } = useLangTranslation();
    const { access_token, user } = useAuth();
    const { company: { company_logo } = {} } = usePreferences();
    const dispatch = useDispatch();
    const [wait, setWait] = useState(false);
    const showToast = useCustomToast();

    const handleNavigate = (routeName) => {
        props.navigation.navigate(routeName);
        props.navigation.closeDrawer();
    };

    const handleLogout = async () => {
        props.navigation.closeDrawer();
        setWait(true);
        const LOGOUT_URL = `${BASE_API_URL_STG}/user/logout`;
        const response = await queryResponse(
            LOGOUT_URL,
            "GET",
            access_token
        );
        if (
            response?.records?.response?.status ==
            "Ok"
        ) {
            setWait(false);
            resetReduxStore(dispatch);
            showToast({
                text1: trans("Logout Successful."),
                type: "common",
                position: "bottom",
                props: { variant: "success" },
            });
        }
    }
    return (
        <>
            <View style={drawerStyle.container}>
                <DrawerContentScrollView
                    {...props}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={drawerStyle.header}>
                        <View>
                            <ProgressiveImage
                                source={{ uri: company_logo }}
                                style={drawerStyle.compIcon}
                            />
                        </View>
                        <Pressable onPress={props.navigation.closeDrawer}>
                            <View style={drawerStyle.closeIconCont}>
                                <CustomSVG 
                                    svgIcon={TimesIcon}
                                    width={dpr(12, "w")}
                                    height={dpr(12)}
                                    fill={'#FFFFFF'}
                                />
                            </View>
                        </Pressable>
                    </View>
                    <TouchableOpacity
                        style={drawerStyle.user}
                        onPress={() =>
                            props.navigation.navigate(
                                access_token ? MY_ACCOUNT : LOGIN
                            )
                        }
                    >
                        <View style={drawerStyle.userIcoin}>
                            {access_token ? (
                                <>
                                    {(user?.image || user?.picture_url) && (
                                        <Image
                                            source={{
                                                uri:
                                                    user?.image ||
                                                    user?.picture_url,
                                            }}
                                            style={drawerStyle.userImage}
                                        />
                                    )}
                                </>
                            ) : (
                                <CustomSVG 
                                    svgIcon={UserIcon} 
                                    width={dpr(18)} 
                                    height={dpr(18)} 
                                />
                            )}
                        </View>
                        <View>
                            <Text style={drawerStyle.noAccount}>
                                {access_token
                                    ? user?.name
                                    : trans("No Account")}
                            </Text>
                            <Text style={drawerStyle.createAccount}>
                                {access_token ? (
                                    user?.email
                                ) : (
                                    <Text>{trans("Create or login now")}</Text>
                                )}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <CustomDrawerItem 
                        text={trans(HOME)} 
                        Icon={HomeIcon}
                        onPress={() => handleNavigate(HOME)}
                    />
                    <CustomDrawerItem 
                        text={trans(SETTING)} 
                        Icon={SettingsIcon}
                        onPress={() => handleNavigate(SETTING)}
                    />
                    <View style={drawerStyle.hrLine} />
                    {access_token ? (
                        <View>
                            <CustomDrawerItem 
                                text={trans("Logout")} 
                                Icon={LogoutIcon}
                                onPress={handleLogout}
                            />
                            <CustomToastModal
                                content={trans("Please wait") + "..."}
                                isVisible={wait}
                                setIsVisible={setWait}
                            />
                        </View>
                    ) : (
                        <View>
                            <CustomDrawerItem 
                                text={trans("Login")} 
                                Icon={LoginIcon}
                                onPress={() => handleNavigate(LOGIN)}
                            />
                        </View>
                    )}
                </DrawerContentScrollView>
            </View>
        </>
    );
};

export default DrawerContainer;
