import { StyleSheet, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import useLangTranslation from "../../hooks/useLangTranslation";
import dpr from "../../style/dpr";
import bikeIcon from "../../assets/svgs/bike.svg";
import pauseIcon from "../../assets/svgs/pause_1.svg";
import deliveredIcon from "../../assets/svgs/delivered_1.svg";
import OrderCard from "./OrderCard";

const OrdersCard = () => {
    const {colors} =useTheme();
    const {trans} = useLangTranslation();

    const styles = Styles(colors)
    return (
        <View style={styles.cont}>
            <OrderCard
                icon={bikeIcon}
                value={'12'}
                text={trans('Assigned')}
            />
            <OrderCard
                icon={pauseIcon}
                value={'3'}
                text={trans('Paused')}
            />
            <OrderCard
                icon={deliveredIcon}
                value={'35'}
                text={trans('Delivered')}
            />
        </View>
    );
};

export default OrdersCard;

const Styles = () => StyleSheet.create({
    cont: {
        marginHorizontal: dpr(20),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: dpr(10)
     },
});
