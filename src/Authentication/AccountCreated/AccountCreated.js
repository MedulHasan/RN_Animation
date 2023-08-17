import { View, Text, BackHandler } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { accountCreatedStyle } from "./AccountCreatedStyle";
import AccountCreatedIcon from "../../assets/svgs/accountCreated.svg";
import useLangTranslation from "../../hooks/useLangTranslation";
import { LOGIN } from "../../Navigation/screensName";
import CustomSVG from "../../components/CustomSVG/CustomSVG";

const AccountCreated = (props) => {
    const {trans} = useLangTranslation();
    const { params: parameter } = props?.route?.params || {};
    const params = parameter == undefined ? {} : parameter;
    const navigation = useNavigation();
    useEffect(() => {
        const subscription = BackHandler.addEventListener(
            "hardwareBackPress",
            () => true
        );
        setTimeout(() => {
            navigation.navigate(LOGIN, params);
        }, 2000);

        return () => subscription.remove();
    }, []);
    return (
        <View style={accountCreatedStyle.container}>
            <CustomSVG 
                svgIcon={AccountCreatedIcon} 
                style={accountCreatedStyle.icon} 
            />
            <Text style={accountCreatedStyle.text}>
                {trans("Your account is successfully created!")}
            </Text>
        </View>
    );
};

export default AccountCreated;
