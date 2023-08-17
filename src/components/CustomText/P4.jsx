import { StyleSheet, Text } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import dpr from "../../style/dpr";

const P4 = ({children, style}) => {
    const {colors} = useTheme();

    const styles = Styles(colors);
    const userStyle = Array.isArray(style) ? style : [style];
    return (
        <Text style={[styles.cont, ...userStyle]}>
            {children}
        </Text>
    )

};

export default P4;

const Styles = (colors) => StyleSheet.create({
    cont: {
        color: colors.textPrimary,
        fontFamily: 'DMSans_500Medium',
        fontSize: dpr(12),
        lineHeight: dpr(18),
        textAlign: "left"
    },
});
