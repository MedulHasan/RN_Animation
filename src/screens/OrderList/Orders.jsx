import { StyleSheet, FlatList, Image } from "react-native";
import React from "react";
import Order from "./Order";

const orders = [
    {
        orderId: 'Order #7752',
        date: '9 Jun, 2023',
        img: Image.resolveAssetSource(
            require("../../assets/images/user.png")
        ).uri,
        name: 'Denman Kokilabanu',
        address: 'House 19. Road 19, Nikunja-2, Dhaka-1909, Bangladesh',
        expectedDeliveryDate: '15 Jun, 2023',

    },
    {
        orderId: 'Order #7753',
        date: '9 Jun, 2023',
        img: Image.resolveAssetSource(
            require("../../assets/images/user.png")
        ).uri,
        name: 'Denman Kokilabanu',
        address: 'House 19. Road 19, Nikunja-2, Dhaka-1909, Bangladesh',
        expectedDeliveryDate: '15 Jun, 2023',

    },
    {
        orderId: 'Order #7754',
        date: '9 Jun, 2023',
        img: Image.resolveAssetSource(
            require("../../assets/images/user.png")
        ).uri,
        name: 'Denman Kokilabanu',
        address: 'House 19. Road 19, Nikunja-2, Dhaka-1909, Bangladesh',
        expectedDeliveryDate: '15 Jun, 2023',

    },
    {
        orderId: 'Order #7755',
        date: '9 Jun, 2023',
        img: Image.resolveAssetSource(
            require("../../assets/images/user.png")
        ).uri,
        name: 'Denman Kokilabanu',
        address: 'House 19. Road 19, Nikunja-2, Dhaka-1909, Bangladesh',
        expectedDeliveryDate: '15 Jun, 2023',

    },
    {
        orderId: 'Order #7756',
        date: '9 Jun, 2023',
        img: Image.resolveAssetSource(
            require("../../assets/images/user.png")
        ).uri,
        name: 'Denman Kokilabanu',
        address: 'House 19. Road 19, Nikunja-2, Dhaka-1909, Bangladesh',
        expectedDeliveryDate: '15 Jun, 2023',

    },
]

const Orders = () => {
  return (
    <FlatList 
        data={orders}
        keyExtractor={item => item.orderId}
        renderItem={({item}) => <Order item={item} />}
        showsVerticalScrollIndicator={false}
    />
  );
};

export default Orders;

const styles = StyleSheet.create({});
