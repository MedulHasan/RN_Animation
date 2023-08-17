import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Balance from "./Balance";
import dpr from "../../style/dpr";
import BankAccount from "./BankAccount";
import WithdrawAmount from "./WithdrawAmount";

const Withdraw = () => {
    const styles = Styles();
    return (
        <View style={styles.const}>
            <Balance />
            <BankAccount />
            <WithdrawAmount />
        </View>
    );
};

export default Withdraw;

const Styles = () => StyleSheet.create({
    const: {
        flex: 1,
        paddingHorizontal: dpr(20),
    }
});
