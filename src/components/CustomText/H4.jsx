import { StyleSheet, Text } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import dpr from "../../style/dpr";

const H4 = ({children, style}) => {
    const {colors} = useTheme();

    const styles = Styles(colors);
    const userStyle = Array.isArray(style) ? style : [style];
    return (
        <Text style={[styles.cont, ...userStyle]}>
            {children}
        </Text>
    )

};

export default H4;

const Styles = (colors) => StyleSheet.create({
    cont: {
        color: colors.textTertiary,
        fontFamily: 'DMSans_600SemiBold',
        fontSize: dpr(15),
        lineHeight: dpr(23),
        textAlign: 'left'
    },
});
