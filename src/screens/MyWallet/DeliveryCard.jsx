import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import OrderCard from "../../components/OrderCard";
import MoneyIcon from "../../assets/svgs/money_1.svg"
import DollarIcon from "../../assets/svgs/dollar _1.svg"
import BagIcon from "../../assets/svgs/bag _1.svg"
import dpr from "../../style/dpr";
import useLangTranslation from "../../hooks/useLangTranslation";

const DeliveryCard = () => {
    const{colors} = useTheme();
    const {trans} = useLangTranslation()

    const styles = Styles(colors);
    return (
        <View style={styles.cont}>
            <OrderCard
                icon={MoneyIcon}
                value={'$6,7619'}
                text={trans('Delivery Charge Earned')}
            />
            <OrderCard
                icon={DollarIcon}
                value={'$2,500'}
                text={trans('Withdrawn')}
            />
            <OrderCard
                icon={BagIcon}
                value={'357'}
                text={trans('Orders Delivered')}
            />
        </View>
    );
};

export default DeliveryCard;

const Styles = (colors) => StyleSheet.create({
    cont: {
       marginHorizontal: dpr(20),
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
       gap: dpr(10)
    },
});
