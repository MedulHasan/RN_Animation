import { I18nManager, Image, StyleSheet, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import useLangTranslation from "../../hooks/useLangTranslation";
import dpr from "../../style/dpr";
import H3 from "../../components/CustomText/H3";
import H7 from "../../components/CustomText/H7";
import H5 from "../../components/CustomText/H5";
import P4 from "../../components/CustomText/P4";
import H9 from "../../components/CustomText/H9";
import P5 from "../../components/CustomText/P5";
import H8 from "../../components/CustomText/H8";
import downArrow from "../../assets/svgs/downArrow.svg"
import CustomSVG from "../../components/CustomSVG/CustomSVG";
import line from "../../assets/svgs/Line.svg"

const sellerImg = require("../../assets/images/seller.png");
const sellerImgUrl = Image.resolveAssetSource(sellerImg).uri;

const userImg = require("../../assets/images/user.png");
const userImgUrl = Image.resolveAssetSource(userImg).uri;

const AssignedOrder = ({item}) => {
    const {colors} = useTheme();
    const {trans} = useLangTranslation();

    const styles = Styles(colors);
    return (
        <View style={styles.cont}>
            <View style={styles.header}>
                <H3>Order #7752</H3>
                <H7>9 Jun, 2023</H7>
            </View>
            <View style={styles.sellerCont}>
                <Image source={{uri: sellerImgUrl}} style={styles.img} />
                <View style={styles.sellerInfo}>
                    <View style={styles.sellerNameCont}>
                        <H5>Kenny’s Bakery</H5>
                        <H9 style={styles.sellerTag}>{trans("Seller")}</H9>
                    </View>
                    <P4>Level A, Xingxang Tower, Dhonistan, Dhaka-1202, Bangladesh</P4>
                </View>
                <View style={styles.move}>
                    <CustomSVG svgIcon={line} height={dpr(35)} />
                </View>
            </View>
            <View style={styles.sellerCont}>
                <Image source={{uri: userImgUrl}} style={styles.img} />
                <View style={styles.sellerInfo}>
                    <View style={styles.sellerNameCont}>
                        <H5>Nile Ramos Argentini</H5>
                        <H9 style={styles.customerTag}>{trans("Customer")}</H9>
                    </View>
                    <P4>House 19. Road 19, Nikunja-2, Dhaka-1909, Bangladesh</P4>
                </View>
            </View>
            <View style={styles.footerCont}>
                <View style={styles.expectedDeliveryCont}>
                    <P5>{trans("Expected Delivery: ")}</P5>
                    <H8>5 Aug 2023</H8>
                </View>
                <CustomSVG svgIcon={downArrow} />
            </View>
        </View>
    );
};

export default AssignedOrder;

const Styles = (colors) => StyleSheet.create({
    cont: {
        backgroundColor: colors.textSecondary,
        padding: dpr(14),
        borderRadius: 8,
        marginBottom: dpr(8)
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: dpr(14)
    },
    img: {
        height: dpr(35),
        width: dpr(35),
        borderRadius: 50
    },
    sellerCont: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: dpr(12),
        marginBottom: dpr(20),
        position: 'relative'
    },
    sellerInfo: {
        width: dpr('wf') - dpr(115)
    },
    sellerNameCont: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: dpr(6)
    },
    sellerTag: {
        paddingHorizontal: dpr(8),
        paddingVertical: dpr(4),
        borderRadius: 40,
        backgroundColor: colors.bgQuaternary
    },
    customerTag: {
        paddingHorizontal: dpr(8),
        paddingVertical: dpr(4),
        borderRadius: 40,
        backgroundColor: colors.bgPrimary
    },
    footerCont: {
        alignItems: 'center',
        gap: dpr(8)
    },
    expectedDeliveryCont: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: dpr(16),
        paddingVertical: dpr(6),
        borderRadius: 40,
        backgroundColor: colors.bgTertiary,
    },
    move: {
        position: 'absolute',
        top: dpr(38),
        left: dpr(15)
    }
});
