import { StyleSheet, Text } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import dpr from "../../style/dpr";

const H8 = ({children, style}) => {
    const {colors} = useTheme();

    const styles = Styles(colors);
    const userStyle = Array.isArray(style) ? style : [style];
    return (
        <Text style={[styles.cont, ...userStyle]}>
            {children}
        </Text>
    )

};

export default H8;

const Styles = (colors) => StyleSheet.create({
    cont: {
        color: colors.textTertiary,
        fontFamily: 'DMSans_500Medium',
        fontSize: dpr(11),
        lineHeight: dpr(16),
        textAlign: 'left'
    },
});
