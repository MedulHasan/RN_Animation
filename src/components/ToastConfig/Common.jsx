import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import Toast from 'react-native-toast-message';
import dpr from "../../style/dpr";
import TimesIcon from "../../assets/svgs/times.svg";
import { useTheme } from "@react-navigation/native";
import CustomSVG from "../CustomSVG/CustomSVG";

const Common = (props) => {
    const {text1} = props || {};
    const {colors} = useTheme();

    const handleClose = () => {
        Toast.hide()
    }

    const styles = Styles(colors);
  return (
    <View style={styles.cont}>
        <Text numberOfLines={1} style={styles.text}>{text1}</Text>
        <Pressable style={styles.icon} onPress={handleClose}>
            <CustomSVG 
                svgIcon={TimesIcon} 
                height={dpr(10)} 
                width={dpr(10) } 
                fill={colors.iconTertiary} 
            />
        </Pressable>
    </View>
  );
};

export default Common;

const Styles = (colors) => StyleSheet.create({
    cont: {
      backgroundColor: colors.bgSecondary,
      height: dpr(45),
      width: dpr('wf') - dpr(40),
      borderRadius: 8,
      padding: dpr(10),
      flexDirection: 'row',
      alignItems: 'center',
      gap: dpr(10)
    },
    text: {
      color: colors.textSecondary,
      textAlignVertical: 'center',
      width: dpr('wf') - dpr(90),
    },
    icon: {
      backgroundColor: colors.iconBgPrimary,
      height: dpr(20),
      width: dpr(20),
      borderRadius: 50,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    }
  });
