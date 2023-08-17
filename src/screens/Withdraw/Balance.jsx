import { StyleSheet, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import useLangTranslation from "../../hooks/useLangTranslation";
import dpr from "../../style/dpr";
import P2 from "../../components/CustomText/P2";
import H5 from "../../components/CustomText/H5";

const Balance = () => {
    const {colors} = useTheme();
    const {trans} = useLangTranslation();

    const styles = Styles(colors);
    return (
        <View style={styles.cont}>
            <P2>{trans("Withdrawal Balance")}</P2>
            <H5>$3,677</H5>
        </View>
    );
};

export default Balance;

const Styles = (colors) => StyleSheet.create({
    cont: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginVertical: dpr(12)
    },
});
