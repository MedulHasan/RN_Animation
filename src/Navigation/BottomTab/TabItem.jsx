import { Text, View, StyleSheet } from "react-native";
import React from "react";
import dpr from "../../style/dpr";
import { useTheme } from "@react-navigation/native";
import CustomSVG from "../../components/CustomSVG/CustomSVG";

const tabIconHeight = dpr(24);
const tabIconWidth = dpr(20);

const TabItem = ({Icon, focused, label}) => {

  const {colors} = useTheme();
  const tabItemStyle = TabItemStyle(colors, focused);
  return (
    <View style={tabItemStyle.singleTabContainer}>
        <CustomSVG svgIcon={Icon}
            width={tabIconWidth}
            height={tabIconHeight}
            fill={focused ? colors.iconPrimary : colors.iconSecondary}
        />
        <Text
            style={tabItemStyle.tabBarLabel}
            numberOfLines={1}
        >
            {label}
        </Text>
    </View>
  );
};

export default TabItem;

const TabItemStyle = (colors, focused) => StyleSheet.create({
  singleTabContainer: {
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
  },
  tabBarLabel:{
    fontSize: dpr(11),
    textAlign: "center",
    marginTop: dpr(7),
    color: focused ? colors.iconPrimary : colors.iconSecondary,
    fontFamily: focused? "DMSans_700Bold": "DMSans_500Medium",
  },
})
