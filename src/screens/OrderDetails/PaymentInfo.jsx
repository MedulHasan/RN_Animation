import { StyleSheet, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import useLangTranslation from "../../hooks/useLangTranslation";
import { Styles } from "./OrderInfo";
import dpr from "../../style/dpr";
import H4 from "../../components/CustomText/H4";
import H3 from "../../components/CustomText/H3";
import H6 from "../../components/CustomText/H6";
import P1 from "../../components/CustomText/P1";
import P3 from "../../components/CustomText/P3";

const PaymentInfo = () => {
    const {colors} = useTheme();
    const {trans} = useLangTranslation();

    const styles = Styles(colors);
    const internalStyle = InternalStyle(colors);
    return (
        <View style={styles.cont}>
            <H3 style={styles.header}>{trans('Payment Info')}</H3>
            <View style={styles.infoCont}>
                <View style={styles.info}>
                    <P3 style={styles.leftText}>{trans("Product Price")}</P3>
                    <H6 style={styles.rightText}>$1,245.00</H6>
                </View>
                <View style={styles.info}>
                    <P3 style={styles.leftText}>{trans("Discount")}</P3>
                    <H6 style={styles.rightText}>$150.00</H6>
                </View>
                <View style={styles.info}>
                    <P3 style={styles.leftText}>{trans("Tax")}</P3>
                    <H6 style={styles.rightText}>$88.00</H6>
                </View>
                <View style={styles.info}>
                    <P3 style={styles.leftText}>{trans("Collected Cash")}</P3>
                    <H6 style={styles.rightText}>$1,183.00</H6>
                </View>
                <View style={styles.info}>
                    <P3 style={styles.leftText}>{trans("Delivery Cost")}</P3>
                    <H6 style={styles.product}>$50.00</H6>
                </View>
                <View style={[styles.info, internalStyle.grandTotal]}>
                    <P1 style={styles.leftText}>{trans("Grand Total")}</P1>
                    <H4 style={styles.rightText}>$1,233.00</H4>
                </View>
            </View>
        </View>
    );
};

export default PaymentInfo;

const InternalStyle = (colors) => StyleSheet.create({
    grandTotal: {
        borderTopWidth: 1,
        borderColor: colors.borderSecondary,
        paddingTop: dpr(12)
    }
})
