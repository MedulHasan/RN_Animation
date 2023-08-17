import { View, Text, Pressable } from "react-native";
import React from "react";
import ChevronRightIcon from "../../assets/svgs/chevron-right.svg"
import { useSelector } from "react-redux";
import { settingStyle } from "./SettingStyle";
import useLangTranslation from "../../hooks/useLangTranslation";
import { SELECT_LANGUAGE } from "../../Navigation/screensName";
import dpr from "../../style/dpr";
import { languages } from "../../language/languages";
import { languageSelector } from "../../redux/features/language/languageSelector";
import CustomSVG from "../../components/CustomSVG/CustomSVG";

const Setting = (props) => {
    const { trans } = useLangTranslation();
    const { lng } = useSelector(languageSelector);
    const language = languages.find((item) => item.langCode === lng);

    return (
        <View style={settingStyle.settingRoot}>
            <View style={settingStyle.container}>
                <Pressable
                    android_ripple={{ color: "gray" }}
                    onPress={() => props.navigation.navigate(SELECT_LANGUAGE)}
                    style={settingStyle.itemBox}
                >
                    <View>
                        <Text style={settingStyle.title}>{trans("Language")}</Text>
                        <Text style={settingStyle.subTitle}>{language?.title}</Text>
                    </View>
                    <View>
                        <CustomSVG 
                            svgIcon={ChevronRightIcon} 
                            height={dpr(20)} 
                            width={dpr(20)}
                            isRtl={1}
                        />
                    </View>
                </Pressable>
            </View>
        </View>
    );
};

export default Setting;
