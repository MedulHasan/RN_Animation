import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import dpr from "../../style/dpr";
import P4 from "../../components/CustomText/P4";
import H4 from "../../components/CustomText/H4";
import CustomSVG from "../../components/CustomSVG/CustomSVG";
import DeliveryBoy from "../../assets/svgs/DeliveryBoy.svg"
import useLangTranslation from "../../hooks/useLangTranslation";
import wallet2 from "../../assets/svgs/wallet_2.svg";
import rightIcon from "../../assets/svgs/chevron-right.svg"

const userImg = require("../../assets/images/user_2.png")
const userImgUrl = Image.resolveAssetSource(userImg).uri;

const Banner = () => {
    const {colors} = useTheme();
    const {trans} = useLangTranslation();
    const styles = Styles(colors);
    return (
        <View style={styles.cont}>
            <View style={styles.view}>
                <Image 
                    source={{uri: userImgUrl}}
                    style={styles.userImg}
                />
                <View style={styles.active} />
                <View style={styles.nameCont}>
                    <P4>{trans("Welcome")}</P4>
                    <H4 style={styles.name}>Michael Jackson Rojario</H4>
                </View>
            </View>
            <CustomSVG
                style={styles.boy}
                svgIcon={DeliveryBoy}
                height={dpr(140)}
                width={dpr(140)}
                isRtl={1}
            />
            <View style={styles.walletCont}>
                <View style={styles.walletSubCont}>
                    <View style={styles.wallet2}>
                        <CustomSVG svgIcon={wallet2} />
                    </View>
                    <H4>{trans("Check Wallet")}</H4>
                </View>
                <CustomSVG
                    svgIcon={rightIcon}
                    isRtl={1}
                    fill={colors.iconPrimary}
                />
            </View>
        </View>
    );
};

export default Banner;

const Styles = (colors) => StyleSheet.create({
    cont: {
        height: dpr(190)
    },
    view: {
        backgroundColor: colors.headerPrimary,
        height: dpr(130),
        padding: dpr(20),
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: dpr(10)
    },
    userImg: {
        height: dpr(50),
        width: dpr(50),
    },
    active: {
        position: 'absolute',
        left: 50,
        top: 15,
        height: dpr(15),
        width: dpr(15),
        borderRadius: 50,
        backgroundColor: colors.bgQuinary,
        borderColor: colors.headerPrimary,
        borderWidth: 2
    },
    nameCont: {
        width: dpr('wf') - dpr(40 + 50 + 160)
    },
    name: {
        color: colors.textSecondary,
        marginTop: dpr(6)
    },
    boy: {
        position: 'absolute',
        top: dpr(0),
        right: dpr(20)
    },
    walletCont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.bgPrimary,
        borderRadius: 8,
        padding: dpr(4),
        paddingRight: dpr(20),
        position: 'absolute',
        left: dpr(20),
        right: dpr(20),
        bottom: dpr(28)
    },
    walletSubCont: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: dpr(12)
    },
    wallet2: {
        padding: dpr(12),
        backgroundColor: colors.textSecondary,
        borderRadius: 8
    }
});
