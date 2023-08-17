import { View, ActivityIndicator, StyleSheet } from "react-native";
import React from "react";
import dpr from "../../style/dpr";

const CustomActiveIndicator = ({style}) => {
    return (
        <View style={[styles.container, style]}>
            <ActivityIndicator color='#FCCA19' size='large' />
        </View>
    );
};

export default CustomActiveIndicator;

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#FFF',
        paddingBottom: dpr(5),
    }
});
