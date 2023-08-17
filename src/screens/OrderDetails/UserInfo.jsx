import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import useLangTranslation from "../../hooks/useLangTranslation";
import PhoneIcon from "../../components/CustomIcons/PhoneIcon";
import dpr from "../../style/dpr";
import SendIcon from "../../components/CustomIcons/SendIcon";
import H4 from "../../components/CustomText/H4";
import P4 from "../../components/CustomText/P4";
import H7 from "../../components/CustomText/H7";

const image = require("../../assets/images/user.png");
const userImage = Image.resolveAssetSource(image).uri;

const UserInfo = () => {
    const {colors} = useTheme();
    const {trans} = useLangTranslation();

    const styles = Styles(colors);
    return (
        <View style={styles.cont}>
            <View style={styles.header}>
                <View style={styles.header}>
                    <Image 
                        source={{uri: userImage}}
                        style={[styles.img]}
                    />
                    <View style={styles.address}>
                        <H4>Daniel Poopa Gonjalez</H4>
                        <P4>{trans("Customer")}</P4>
                    </View>
                </View>
                <PhoneIcon />
            </View>
            <View style={[styles.header, styles.mt18]}>
                <View style={styles.header}>
                    <H7 style={styles.imgCont}>{trans("Address")}</H7>
                    <P4 style={styles.address}>
                        House 19. Road 19, Nikunja-2, Dhaka-1909, Bangladesh
                    </P4>
                </View>
                <SendIcon />
            </View>
        </View>
    );
};

export default UserInfo;

const Styles = (colors) => StyleSheet.create({
    cont: {
        backgroundColor: colors.textSecondary,
        marginTop: dpr(10),
        padding: dpr(14),
        borderRadius: 8
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: dpr(12),
    },
    mt18: {
        marginTop: dpr(18)
    },
    img: {
        height: dpr(55),
        width: dpr(55),
        borderRadius: 50
    },
    imgCont: {
        height: dpr(55),
        width: dpr(55),
    },
    address: {
        width: dpr('wf') - dpr(195),
    }
});
