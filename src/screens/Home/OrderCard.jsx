import { StyleSheet, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import H2 from "../../components/CustomText/H2";
import P3 from "../../components/CustomText/P3";
import dpr from "../../style/dpr";
import CustomSVG from "../../components/CustomSVG/CustomSVG";

const OrderCard = ({icon, value, text}) => {
    const {colors} = useTheme();

    const styles = Styles(colors);
    return (
        <View style={styles.cont}>
            <CustomSVG svgIcon={icon} />
            <H2 style={styles.value}>{value}</H2>
            <P3 style={styles.text}>{text}</P3>
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
        marginTop: dpr(6)
    },
    text: {
        textAlign: 'center',
        marginTop: dpr(0)
    }
});
