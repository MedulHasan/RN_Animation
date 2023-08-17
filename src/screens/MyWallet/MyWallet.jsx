import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { bottomTabHeight } from "../../constants/constVariable";
import { useTheme } from "@react-navigation/native";
import BalanceCard from "./BalanceCard";
import DeliveryCard from "./DeliveryCard";
import OrderFilterByDate from "../OrderList/OrderFilterByDate";
import DeliveredOrder from "./DeliveredOrder";

const MyWallet = () => {
    const {colors} = useTheme();

    const styles = Styles(colors);
    return (
        <View style={styles.const}>
            <FlatList
                overScrollMode="never"
                ListHeaderComponent={() => <>
                    <BalanceCard />
                    <DeliveryCard />
                    <OrderFilterByDate />
                    <DeliveredOrder />
                </>}
            />
        </View>
    );
};

export default MyWallet;

const Styles = (colors) =>{
    return StyleSheet.create({
        const: {
            flex: 1,
            marginBottom: bottomTabHeight,
            backgroundColor: colors.bgTertiary
        },
    }); 
}
