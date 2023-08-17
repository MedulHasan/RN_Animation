import { View } from "react-native";
import React from "react";
import { loginStyles } from "./LoginStyle";
import PasswordIcon1 from "../../assets/svgs/password.svg";
import PasswordIcon2 from "../../assets/svgs/password2.svg";
import CustomSVG from "../../components/CustomSVG/CustomSVG";

const PasswordIcon = ({ seePassword, handleSeePassword }) => {
    return (
        <View style={loginStyles.passIconCont}>
            {seePassword ? (
                <View style={loginStyles.passIconSubCont}>
                    <CustomSVG 
                        svgIcon={PasswordIcon2} 
                        onPress={handleSeePassword} 
                    />
                </View>
            ) : (
                <View style={loginStyles.passIconSubCont}>
                    <CustomSVG 
                        svgIcon={PasswordIcon1} 
                        onPress={handleSeePassword} 
                    />
                </View>
            )}
        </View>
    );
};

export default PasswordIcon;
