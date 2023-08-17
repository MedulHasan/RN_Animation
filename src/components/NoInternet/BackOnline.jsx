import { Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import dpr from "../../style/dpr";
import useLangTranslation from "../../hooks/useLangTranslation";

const BackOnline = () => {
    const { trans } = useLangTranslation();
    const [backOnline, setBackOnline] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setBackOnline(false);
        }, 2000);
    }, [setBackOnline]);

    return (
        backOnline && (
            <Text style={backOnlineStyle.text}>{trans("Back online")}</Text>
        )
    );
};

export default BackOnline;

const backOnlineStyle = StyleSheet.create({
    text: {
        textAlign: "center",
        fontFamily: "Roboto_500Medium",
        fontSize: dpr(12),
        backgroundColor: '#FCCA19',
        color: '#000000',
        paddingVertical: dpr(2),
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
    },
});
