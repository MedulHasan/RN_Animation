import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import IndividualOrder from "./IndividualOrder";
import dpr from "../../style/dpr";

const orders = [
    {
        orderId: 'Order #6746',
        price: '$1200.00',
        dateTime: '9 Jun 2023, 4:31 PM',
        deliveryFee: '$60.00'
    },
    {
        orderId: 'Order #6747',
        price: '$1200.00',
        dateTime: '9 Jun 2023, 4:31 PM',
        deliveryFee: '$60.00'
    },
    {
        orderId: 'Order #6748',
        price: '$1200.00',
        dateTime: '9 Jun 2023, 4:31 PM',
        deliveryFee: '$60.00'
    },
    {
        orderId: 'Order #6749',
        price: '$1200.00',
        dateTime: '9 Jun 2023, 4:31 PM',
        deliveryFee: '$60.00'
    },
    {
        orderId: 'Order #6750',
        price: '$1200.00',
        dateTime: '9 Jun 2023, 4:31 PM',
        deliveryFee: '$60.00'
    },
    {
        orderId: 'Order #6751',
        price: '$1200.00',
        dateTime: '9 Jun 2023, 4:31 PM',
        deliveryFee: '$60.00'
    },
    {
        orderId: 'Order #6752',
        price: '$1200.00',
        dateTime: '9 Jun 2023, 4:31 PM',
        deliveryFee: '$60.00'
    },
    {
        orderId: 'Order #6753',
        price: '$1200.00',
        dateTime: '9 Jun 2023, 4:31 PM',
        deliveryFee: '$60.00'
    },
    {
        orderId: 'Order #6754',
        price: '$1200.00',
        dateTime: '9 Jun 2023, 4:31 PM',
        deliveryFee: '$60.00'
    },
    {
        orderId: 'Order #6755',
        price: '$1200.00',
        dateTime: '9 Jun 2023, 4:31 PM',
        deliveryFee: '$60.00'
    },
    {
        orderId: 'Order #6756',
        price: '$1200.00',
        dateTime: '9 Jun 2023, 4:31 PM',
        deliveryFee: '$60.00'
    },
]

const DeliveredOrder = () => {
    const {colors} = useTheme();

    const styles = Styles(colors);
    return (
        <View style={styles.const}>
            <FlatList
                data={orders}
                keyExtractor={(item) => item.orderId}
                renderItem={({item}) => <IndividualOrder item={item} />}
                initialNumToRender={5}
            />
        </View>
    );
};

export default DeliveredOrder;

const Styles = (colors) => StyleSheet.create({
    const: {
        marginHorizontal: dpr(20),
        marginTop: dpr(16),
    }
});
