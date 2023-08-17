import React from "react";
import { Pressable, StyleSheet } from "react-native";
import BackIcon from "../assets/svgs/backButton.svg";
import dpr from "../style/dpr"; 
import CustomSVG from "./CustomSVG/CustomSVG";

const BackNavigation = (props) => {
    const { navigationProps} = props;
    
    const backScreen = () => {
        navigationProps.goBack();
    };
    return (
        <>
            {navigationProps && (
                <Pressable
                    onPress={() => backScreen()}
                    style={styles.iconWrap}
                    android_ripple={styles.ripple}
                >
                    <CustomSVG 
                        svgIcon={BackIcon} 
                        height={dpr(28)} 
                        width={dpr(28)}
                        isRtl={1}
                    />
                </Pressable>
            )}
        </>
    );
};

export default BackNavigation;

const styles = StyleSheet.create({
    iconWrap: {
        width: dpr(50),
        padding: dpr(10),
    },
    ripple: {
        color: '#999999',
        radius: dpr(20),
      },
});
