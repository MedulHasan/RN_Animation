import { StyleSheet, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import useLangTranslation from "../../hooks/useLangTranslation";
import dpr from "../../style/dpr";
import H3 from "../../components/CustomText/H3";
import P3 from "../../components/CustomText/P3";
import H6 from "../../components/CustomText/H6";

const OrderInfo = () => {
    const {colors} = useTheme();
    const {trans} = useLangTranslation();

    const styles = Styles(colors);
    return (
        <View style={styles.cont}>
            <H3 style={styles.header}>{trans('Order Info')}</H3>
            <View style={styles.infoCont}>
                <View style={styles.info}>
                    <P3 style={styles.leftText}>{trans("Order ID")}</P3>
                    <H6 style={styles.rightText}>44564</H6>
                </View>
                <View style={styles.info}>
                    <P3 style={styles.leftText}>{trans("Order Placed")}</P3>
                    <H6 style={styles.rightText}>9 Jun 2023, 8:45 PM</H6>
                </View>
                <View style={styles.info}>
                    <P3 style={styles.leftText}>{trans("Payment")}</P3>
                    <H6 style={styles.rightText}>Cash on Delivery</H6>
                </View>
                <View style={styles.info}>
                    <P3 style={styles.leftText}>{trans("Products")}</P3>
                    <H6 style={styles.product}>x 3</H6>
                </View>
            </View>
        </View>
    )
};

export default OrderInfo;

export const Styles = (colors) => {
    const infoContWidth = dpr('wf') - dpr(68)
    const leftTextWidth = infoContWidth / 2.5;
    const rightTextWidth = infoContWidth / 1.8;
    return StyleSheet.create({
        cont: {
            backgroundColor: colors.textSecondary,
            marginTop: dpr(8),
            borderRadius: 8,
        },
        header: {
            borderBottomWidth: 1,
            borderColor: colors.borderSecondary,
            paddingVertical: dpr(7),
            paddingHorizontal: dpr(14)
        },
        infoCont: {
            marginTop: dpr(12),
            marginBottom: dpr(14),
            flexDirection: 'column',
            gap: dpr(10),
            paddingHorizontal: dpr(14)
        },
        info: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: infoContWidth,
        },
        leftText: {
            width: leftTextWidth,
            textAlign: 'left',
        },
        rightText: {
            width: rightTextWidth,
            textAlign: 'right',
        },
        product: {
            backgroundColor: colors.bgPrimary,
            paddingHorizontal: dpr(8),
            paddingVertical: dpr(2),
            borderRadius: 40
        }
    })
}