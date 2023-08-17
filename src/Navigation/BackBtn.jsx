import {Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation, useTheme} from '@react-navigation/native';
import BackIcon from '../assets/svgs/backButton.svg';
import dpr from '../style/dpr';
import CustomSVG from '../components/CustomSVG/CustomSVG';

const BackBtn = ({props, isBackMs = false}) => {
  const {colors} = useTheme()
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
    if(isBackMs) {
      navigation.goBack();
    }
  }

  const backBtnStyles = BackBtnStyles();
  return (
    <Pressable
        style={backBtnStyles.cont}
        {...props}
        onPress={handlePress}
        android_ripple={backBtnStyles.ripple}>
        <CustomSVG 
            svgIcon={BackIcon} 
            height={dpr(28)} 
            width={dpr(28)}
            isRtl={1}
            fill={colors.headerSecondary}
        />
    </Pressable>
  );
};

export default BackBtn;

const BackBtnStyles = () =>
  StyleSheet.create({
    cont: {
      padding: dpr(10),
      position: 'absolute',
      left: dpr(-10),
      borderRadius: 50,
    },
    ripple: {
      color: '#999999',
      radius: dpr(20),
    },
  });
