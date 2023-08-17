import {Pressable, StyleSheet} from 'react-native';
import React from 'react';
import MenuIcon from '../../assets/svgs/menuIcon.svg';
import dpr from '../../style/dpr';
import CustomSVG from '../../components/CustomSVG/CustomSVG';

const MenuBtn = ({navigation}) => {
  return (
    <Pressable 
      onPress={navigation.openDrawer} 
      style={MenuBtnStyle.cont}
    >
        <CustomSVG 
            svgIcon={MenuIcon} 
            height={dpr(28)} 
            width={dpr(28)} 
        />
    </Pressable>
  );
};

export default MenuBtn;

const MenuBtnStyle = StyleSheet.create({
  cont: {
    padding: dpr(20),
    borderRadius: 50
  },
});
