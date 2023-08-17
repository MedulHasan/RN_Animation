import { StyleSheet, View } from "react-native";
import React from "react";
import CustomSVG from "./CustomSVG/CustomSVG";
import { useTheme } from "@react-navigation/native";
import dpr from "../style/dpr";
import H5 from "./CustomText/H5";
import P5 from "./CustomText/P5";

const OrderCard = ({icon, value, text}) => {
    const {colors} = useTheme();

    const styles = Styles(colors);
    return (
        <View style={styles.cont}>
            <CustomSVG svgIcon={icon} />
            <H5 style={styles.value}>{value}</H5>
            <P5 style={styles.text}>{text}</P5>
        </View>
    );
};

export default OrderCard;

const Styles = (colors) => StyleSheet.create({
    cont: {
        width: (dpr('wf') - dpr(60)) / 3,
        height: dpr(120),
        backgroundColor: colors.textSecondary,
        padding: dpr(10),
        borderRadius: 8,
        alignItems: 'center'
    },
    value: {
        fontFamily: 'DMSans_600SemiBold',
        marginTop: dpr(10)
    },
    text: {
        textAlign: 'center',
        marginTop: dpr(4)
    }
});
