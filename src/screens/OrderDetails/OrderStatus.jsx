import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import useLangTranslation from "../../hooks/useLangTranslation";
import CustomSVG from "../../components/CustomSVG/CustomSVG";
import workerIcon from "../../assets/svgs/worker_1.svg"
import dpr from "../../style/dpr";
import H5 from "../../components/CustomText/H5";

const OrderStatus = () => {
    const {colors} = useTheme();
    const {trans} = useLangTranslation();

    const styles = Styles(colors);
    return (
        <View style={styles.cont}>
            <View style={styles.subCont}>
                <CustomSVG svgIcon={workerIcon} />
                <H5>{trans("Order Status")}</H5>
            </View>
            <Text style={styles.status}>{trans("Delivered")}</Text>
        </View>
    );
};

export default OrderStatus;

const Styles = (colors) => StyleSheet.create({
    cont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: dpr(12),
        backgroundColor: colors.textSecondary,
        padding: dpr(14),
        borderRadius: 8,
    },
    subCont: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: dpr(12),
    },
    title: {
        color: colors.textTertiary,
        fontFamily: 'DMSans_600SemiBold',
        fontSize: dpr(14),
        lineHeight: dpr(22)
    },
    status: {
        color: colors.textQuaternary,
        fontFamily: 'DMSans_600SemiBold',
        fontSize: dpr(14),
        lineHeight: dpr(22)
    }
});
