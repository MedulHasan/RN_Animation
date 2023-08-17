import { StyleSheet, View, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import dpr from "../../style/dpr";
import CustomSVG from "../../components/CustomSVG/CustomSVG";
import LockIcon from "../../assets/svgs/lock.svg";
import useLangTranslation from "../../hooks/useLangTranslation";
import { ORDER_DETAILS } from "../../Navigation/screensName";
import PhoneIcon from "../../components/CustomIcons/PhoneIcon";
import SendIcon from "../../components/CustomIcons/SendIcon";
import H4 from "../../components/CustomText/H4";
import H3 from "../../components/CustomText/H3";
import H7 from "../../components/CustomText/H7";
import P4 from "../../components/CustomText/P4";
import H6 from "../../components/CustomText/H6";

const Order = ({item}) => {
    const {colors} = useTheme();
    const {trans} = useLangTranslation();
    const navigation = useNavigation();

    const navigateOrderDetails = () => {
        navigation.navigate(ORDER_DETAILS)
    }

    const styles = Styles(colors);
    return (
        <Pressable 
            style={styles.cont} 
            onPress={navigateOrderDetails}
        >
            <View style={styles.header}>
                <H3>{item?.orderId}</H3>
                <H7>{item?.date}</H7>
            </View>
            <View style={styles.userInfo}>
                <Image source={{uri: item?.img}} style={styles.img} />
                <View style={styles.nameCont}>
                    <H4>{item?.name}</H4>
                    <View style={styles.addressCont}>
                        <P4 style={styles.address}>{item?.address}</P4>
                        <PhoneIcon />
                    </View>
                    <View style={[styles.addressCont, styles.mt12]}>
                        <View>
                            <View 
                                style={[styles.expectedDeliveryCont, styles.address]}
                            >
                                <CustomSVG svgIcon={LockIcon} />
                                <P4 style={styles.address}>
                                    {trans('Expected Delivery')}
                                </P4>
                            </View>
                            <H6>{item?.expectedDeliveryDate}</H6>
                        </View>
                        <SendIcon />
                    </View>
                </View>
            </View>
        </Pressable>
    );
};

export default Order;

const Styles = (colors) => {
    const addressWidth = dpr('wf') - dpr(180)
    return StyleSheet.create({
        cont: {
            backgroundColor: colors.textSecondary,
            marginBottom: dpr(8),
            padding: dpr(14),
            borderRadius: 8,
            marginHorizontal: dpr(20)
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        userInfo: {
            flexDirection: 'row',
            gap: dpr(12),
            marginTop: dpr(14)
        },
        img: {
            height: dpr(45),
            width: dpr(45),
            borderRadius: 50
        },
        nameCont: {
            width: dpr('wf') - dpr(125)
        },
        name: {
            color: colors.textTertiary,
            fontFamily: 'DMSans_500Medium',
            fontSize: dpr(16),
            lineHeight: dpr(24),
            textAlign: 'left'
        },
        addressCont: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: dpr(10),
        },
        address: {
            width: addressWidth,
        },
        expectedDeliveryCont: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: dpr(4)
        },
        mt12: {
            marginTop: dpr(12)
        }
    })
};
