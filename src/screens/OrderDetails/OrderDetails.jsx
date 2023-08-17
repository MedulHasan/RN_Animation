import { FlatList, ScrollView, StyleSheet } from "react-native";
import React from "react";
import OrderStatus from "./OrderStatus";
import { useTheme } from "@react-navigation/native";
import UserInfo from "./UserInfo";
import OrderInfo from "./OrderInfo";
import PaymentInfo from "./PaymentInfo";
import dpr from "../../style/dpr";
import Products from "./Products";

const OrderDetails = () => {
    const {colors} = useTheme();

    const styles = Styles(colors);
    return (
        <FlatList
            contentContainerStyle={styles.cont}
            ListHeaderComponent={() => (
                <>
                    <OrderStatus />
                    <UserInfo />
                    <OrderInfo />
                    <PaymentInfo />
                    <Products />
                </>
            )}
        />
    );
};

export default OrderDetails;

const Styles = (colors) => StyleSheet.create({
    cont: {
        padding: dpr(20),
    },
});
