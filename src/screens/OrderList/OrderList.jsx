import { StyleSheet, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import OrderFilterByDate from "./OrderFilterByDate";
import FilterByStatus from "./FilterByStatus";
import Orders from "./Orders";
import { bottomTabHeight } from "../../constants/constVariable";

const OrderList = () => {
    const {colors} = useTheme();
    
    const styles = Styles(colors)
    return (
        <View style={styles.cont}>
            <OrderFilterByDate />
            <FilterByStatus />
            <Orders />
        </View>
    );
};

export default OrderList;

const Styles = (colors) => StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor: colors.bgTertiary,
        marginBottom: bottomTabHeight
    }
});
