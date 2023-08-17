import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: process.env.SPLASH_BACKGROUND_COLOR
    },
    image: {
        flex:1,
        resizeMode:'contain'
    }
})