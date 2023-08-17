import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import CheckIcon from "../../assets/svgs/check.svg"
import { settingStyle } from "./SettingStyle";
import { languages } from "../../language/languages";
import CustomSVG from "../../components/CustomSVG/CustomSVG";

const IndividualLanguage = ({
    item, 
    selectedId, 
    handleSelectLanguage
}) => {
    const color = item.langCode === selectedId ? '#2C2C2C' : '#898989';
    const isCheck = item.langCode === selectedId ? true : false;
    const lastEl = languages[languages.length - 1];
    return (
        <TouchableOpacity
            onPress={() => handleSelectLanguage(item.langCode)}
            style={[settingStyle.languageItem, settingStyle.btmBorder(item?.langCode, lastEl.id)]}
        >
            <Text style={[settingStyle.languageTitle, settingStyle.color(color)]}>{item?.title}</Text>
            {isCheck && <CustomSVG svgIcon={CheckIcon} />}
        </TouchableOpacity>
    );
};

export default IndividualLanguage;

const styles = StyleSheet.create({});
