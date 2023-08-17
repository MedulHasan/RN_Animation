import {
    View,
    Text,
    BackHandler,
    Pressable,
} from "react-native";
import React from "react";
import { passwordChangedStytel } from "./PasswordChangedStyle";
import LikeIcon from "../../assets/svgs/successfullyChangedPassword.svg";
import { loginStyles } from "../Login/LoginStyle";
import { useEffect } from "react";
import useLangTranslation from "../../hooks/useLangTranslation";
import { LOGIN } from "../../Navigation/screensName";
import CustomSVG from "../../components/CustomSVG/CustomSVG";

const PasswordChanged = ({ navigation }) => {
    const {trans} = useLangTranslation();
    useEffect(() => {
        const subscription = BackHandler.addEventListener(
            "hardwareBackPress",
            () => true
        );
        return () => subscription.remove();
    }, []);
    return (
        <View style={passwordChangedStytel.container}>
            <CustomSVG 
                svgIcon={LikeIcon} 
                style={passwordChangedStytel.like} 
            />
            <Text style={passwordChangedStytel.title}>
                {trans("Password Successfully Changed")}
            </Text>
            <Text style={passwordChangedStytel.text}>
                {trans("Use your new password to login now.")}
            </Text>
            <Pressable onPress={() => navigation.navigate(LOGIN)}>
                <View style={loginStyles.loginButton}>
                    <Text style={loginStyles.loginButtonText}>{trans("Login")}</Text>
                </View>
            </Pressable>
        </View>
    );
};

export default PasswordChanged;
