import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import CustomSVG from "../CustomSVG/CustomSVG";
import sendIcon from "../../assets/svgs/Send_fill.svg"
import dpr from "../../style/dpr";

const SendIcon = () => {
    const {colors} = useTheme();

    const styles = Styles(colors);
    return (
        <View style={styles.sendIcon}>
            <CustomSVG svgIcon={sendIcon} isRtl={1} />
        </View>
    );
};

export default SendIcon;

const Styles = (colors) => StyleSheet.create({
    sendIcon: {
        backgroundColor: colors.iconQuinary,
        borderRadius: 8,
        padding: dpr(10)
    },
});
