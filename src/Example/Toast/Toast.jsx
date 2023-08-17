import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import useLangTranslation from "../../hooks/useLangTranslation";
import useCustomToast from "../../hooks/useCustomToast";

const Toast = () => {
    const { trans } = useLangTranslation();
    const toast = useCustomToast();

    const handleSuccess = () => {
        toast({
            type: 'success',
            text1: `Your change have successfully saved Your change have successfully saved`,
        })
    };
    const handleError = () => {
        toast({
            type: 'error',
            text1: `Something went wrong, please try again later!`,
        })
    };
    const handleInfo = () => {
        toast({
            type: 'info',
            text1: `You have must added your email address for update your information`,
        })
    };
    const handleCommon = () => {
        toast({
            type: 'common',
            text1: `Your change have successfully saved Your change have successfully saved`,
        })
    };

    const {colors} = useTheme();
    const styles = Styles(colors);
    return (
        <View style={styles.cont}>
            <Text>Toast Example</Text>
            <Button title="Success" onPress={handleSuccess} />
            <Button title="Error" onPress={handleError} />
            <Button title="Info" onPress={handleInfo} />
            <Button title="Common" onPress={handleCommon} />
        </View>
    );
};

export default Toast;

const Styles = (colors) => StyleSheet.create({
    cont: {
        flex: 1,
    }
});
