import { StyleSheet, View } from "react-native";
import React from "react";
import CustomSVG from "../CustomSVG/CustomSVG";
import phoneIcon from "../../assets/svgs/Phone_fill.svg"
import dpr from "../../style/dpr";
import { useTheme } from "@react-navigation/native";

const PhoneIcon = () => {
    const {colors} = useTheme()

    const styles = Styles(colors);
    return (
        <View style={styles.phoneIcon}>
            <CustomSVG svgIcon={phoneIcon} isRtl={1} />
        </View>
    );
};

export default PhoneIcon;

const Styles = (colors) => StyleSheet.create({
    phoneIcon: {
        backgroundColor: colors.iconQuaternary,
        borderRadius: 8,
        padding: dpr(10)
    },
});
