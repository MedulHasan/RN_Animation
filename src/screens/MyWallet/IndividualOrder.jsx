import { I18nManager, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import useLangTranslation from "../../hooks/useLangTranslation";
import dpr from "../../style/dpr";
import H5 from "../../components/CustomText/H5";
import P4 from "../../components/CustomText/P4";

const IndividualOrder = ({item}) => {
    const {colors} = useTheme();
    const {trans} = useLangTranslation();

    const styles = Styles(colors);
    return (
        <View style={styles.cont}>
            <View style={styles.titleCont}>
                <H5 style={styles.title}>{item.orderId}</H5>
                <H5 style={styles.title}>{item.price}</H5>
            </View>
            <View style={styles.titleCont}>
                <P4>{item.dateTime}</P4>
                <View style={styles.deliveryFeeCont}>
                    <P4>{trans('Delivery Fee: ')}</P4>
                    <Text style={styles.deliveryFee}>{item.deliveryFee}</Text>
                </View>
            </View>
        </View>
    );
};

export default IndividualOrder;

const Styles = (colors) => StyleSheet.create({
    cont: {
        backgroundColor: colors.textSecondary,
        padding: dpr(14),
        borderRadius: 8,
        marginBottom: dpr(10)
    },
    titleCont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        marginBottom: dpr(6)
    },
    deliveryFeeCont: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row'
    },
    deliveryFee: {
        color: colors.textQuaternary,
        fontFamily: 'DMSans_500Medium',
        fontSize: dpr(12),
        lineHeight: dpr(18),
        textAlign: 'left'
    }
});
