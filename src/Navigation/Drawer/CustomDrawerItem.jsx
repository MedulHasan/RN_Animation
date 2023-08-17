import { Text, View } from "react-native";
import React from "react";
import { DrawerItem } from "@react-navigation/drawer";
import { drawerStyle } from "./DrawerContainerStyle";
import { HOME } from "../screensName";
import dpr from "../../style/dpr";
import CustomSVG from "../../components/CustomSVG/CustomSVG";

const iconSize = dpr(14);

const CustomDrawerItem = ({
    text, 
    routeName, 
    focused = HOME, 
    Icon, 
    onPress, 
    style
}) => {
  return (
    <DrawerItem
        label={() => {
            return (
                <View style={drawerStyle.itemContainer}>
                    <CustomSVG 
                        svgIcon={Icon} 
                        width={iconSize} 
                        height={iconSize} 
                    />
                    <Text style={drawerStyle.itemText}>{text}</Text>
                </View>
            );
        }}
        style={drawerStyle.drawerItem}
        onPress={onPress}
    />
  );
};

export default CustomDrawerItem;
