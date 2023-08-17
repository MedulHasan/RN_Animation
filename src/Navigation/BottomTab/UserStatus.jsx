import { StyleSheet, View } from "react-native";
import React from "react";
import P3 from "../../components/CustomText/P3";
import dpr from "../../style/dpr";
import { useTheme } from "@react-navigation/native";
import useLangTranslation from "../../hooks/useLangTranslation";
import CustomSVG from "../../components/CustomSVG/CustomSVG";
import dotIcon from "../../assets/svgs/dot.svg"

const UserStatus = () => {
    const {colors} = useTheme();
    const {trans} = useLangTranslation();

    const styles = Styles(colors);
    return (
        <View style={styles.cont}>
            <CustomSVG svgIcon={dotIcon} />
            <P3>{trans("Offline")}</P3>
        </View>
    );
};

export default UserStatus;

const Styles = (colors) => StyleSheet.create({
    cont: {
        marginRight: dpr(20),
        flexDirection: 'row',
        alignItems: 'center', 
        gap: dpr(6)
    },
});
