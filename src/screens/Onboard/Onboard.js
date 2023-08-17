import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TAB_NAVIGATION } from "../../Navigation/screensName";

const Onboard = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Onboard</Text>
      <Button title="Skip" onPress={() => navigation.navigate(TAB_NAVIGATION)} />
    </View>
  );
};

export default Onboard;

const styles = StyleSheet.create({});
