import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import dpr from "../../style/dpr";
import useLangTranslation from "../../hooks/useLangTranslation";
import CustomSVG from "../../components/CustomSVG/CustomSVG";
import RightIcon from "../../assets/svgs/chevron-right.svg"
import { WITHDRAW } from "../../Navigation/screensName";
import H5 from "../../components/CustomText/H5";
import H1 from "../../components/CustomText/H1";

const BalanceCard = () => {
    const {colors} = useTheme();
    const {trans} = useLangTranslation();
    const navigation = useNavigation()

    const handleNavigate = () => {
        navigation.navigate(WITHDRAW)
    }

    const styles = Styles(colors)
    return (
        <View style={styles.cont}>
            <View style={styles.view} />
            <View style={styles.cardCont}>
                <H5>{trans("Wallet Balance")}</H5>
                <H1 style={styles.balance}>$2,280.00</H1>
                <Pressable 
                    style={styles.btnCont}
                    onPress={handleNavigate}
                >
                    <H5>{trans("Request Withdrawal")}</H5>
                    <CustomSVG 
                        svgIcon={RightIcon}
                        isRtl={1}
                        fill={colors.iconPrimary}
                    />
                </Pressable>
            </View>
        </View>
    );
};

export default BalanceCard;

const Styles = (colors) => StyleSheet.create({
    cont: {
        height: dpr(190)
    },
    view: {
        backgroundColor: colors.headerPrimary,
        height: dpr(130) 
    },
    cardCont: {
        backgroundColor: colors.bgPrimary,
        position: 'absolute',
        top: dpr(10),
        left: dpr(20),
        right: dpr(20),
        padding: dpr(20),
        borderRadius: 12,
        alignItems: 'center'
    },
    balance: {
        marginTop: dpr(8),
    },
    btnCont: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: dpr(5),
        backgroundColor: colors.textSecondary,
        paddingHorizontal: dpr(35),
        paddingVertical: dpr(12),
        borderRadius: 8,
        marginTop: dpr(16)
    },
});
