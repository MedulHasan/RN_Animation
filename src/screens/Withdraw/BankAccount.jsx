import { StyleSheet, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import dpr from "../../style/dpr";
import BankIcon from "../../assets/svgs/bank _1.svg";
import EditIcon from "../../assets/svgs/edit_1.svg";
import CustomSVG from "../../components/CustomSVG/CustomSVG";
import H5 from "../../components/CustomText/H5";
import P4 from "../../components/CustomText/P4";

const BankAccount = () => {
    const {colors} = useTheme();

    const styles = Styles(colors);
    return (
        <View style={styles.const}>
            <View style={styles.subCont}>
                <View style={styles.bankIcon}>
                    <CustomSVG svgIcon={BankIcon} />
                </View>   
                <View>
                    <H5>American Express</H5>
                    <P4>AC 4677******747567654</P4>
                </View>
            </View>
            <CustomSVG svgIcon={EditIcon} />
        </View>
    );
};

export default BankAccount;

const Styles = (colors) => StyleSheet.create({
    const: {
        backgroundColor: colors.textSecondary,
        padding: dpr(14),
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    subCont: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: dpr(10)
    },
    bankIcon: {
        backgroundColor: colors.bgTertiary,
        height: dpr(44),
        width: dpr(44),
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
});
