import { I18nManager, StyleSheet } from "react-native";
import React from "react";
import { SvgXml } from "react-native-svg";
import { useSelector } from "react-redux";
import { languageSelector } from "../../redux/features/language/languageSelector";
import { RTL_APPLICABLE_LANGUAGES } from "../../constants/languageConst";

const CustomSVG = ({
    svgIcon,
    fill,
    height,
    width,
    isRtl = 0,
    style={},
    onPress
}) => {
    const { lng } = useSelector(languageSelector);
    const styles = Array.isArray(style) ? style : [style];
    let svg;
    svg = fill ? svgIcon?.replace(/fill="#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})"/g, `fill="${fill}"`) : svgIcon;
    let h = svgIcon?.match(/height="(\d+)"/)[1];
    let w = svgIcon?.match(/width="(\d+)"/)[1];
    if ((lng == RTL_APPLICABLE_LANGUAGES || I18nManager.isRTL) && isRtl) {
        return <SvgXml 
            xml={svg} 
            height={height || h} 
            width={width || w} 
            style={[CustomSvgStyle.scale, ...styles]} 
            onPress={onPress}
        />
    }
    return <SvgXml 
        xml={svg} 
        height={height || h} 
        width={width || w} 
        style={[...styles]}
        onPress={onPress}
    />
};

export default CustomSVG;

const CustomSvgStyle = StyleSheet.create({
    scale: { 
        transform: [{ scaleX: -1 }] 
    }
});
