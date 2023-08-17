import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import Banner from "./Banner";
import OrdersCard from "./OrdersCard";
import AssignedOrders from "./AssignedOrders";
import { bottomTabHeight } from "../../constants/constVariable";

const Home = () => {
    const {colors} = useTheme();
    const styles = Styles(colors);

    return (
        <View style={styles.cont}>
            <FlatList
                overScrollMode="never"
                ListHeaderComponent={() => <>
                    <Banner />
                    <OrdersCard />
                    <AssignedOrders />
                </>}
            />
        </View>
    );
};

export default Home;

const Styles = (colors) => StyleSheet.create({
    cont: {
        flex: 1,
        marginBottom: bottomTabHeight,
    }
});
