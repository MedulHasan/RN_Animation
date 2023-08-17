import { View, Text } from "react-native";
import React from "react";
import selectItemBottomSheetStyle from "./selectItemBottomSheet.style";
import { capitalized } from "../../helper/capitalized";
import CustomTextInput from "../CustomInput/CustomTextInput/CustomTextInput";
import SearchIcon from "../../assets/svgs/searchIcon.svg";
import useLangTranslation from "../../hooks/useLangTranslation";
import CustomSVG from "../CustomSVG/CustomSVG";

const SearchBar = ({ name, searchText, setSearchText }) => {
    const {trans} = useLangTranslation();
    const selectBtmSheetStyle = selectItemBottomSheetStyle();
    return (
        <View>
            <Text style={selectBtmSheetStyle.text}>
                {trans("Select {{x}}", {x: capitalized(name)})}
            </Text>
            <CustomTextInput
                style={selectBtmSheetStyle.input}
                placeholder={trans("Search {{x}}", {x: capitalized(name)})}
                value={searchText}
                onChangeText={(text) => setSearchText(text)}
                rightIcon={<CustomSVG svgIcon={SearchIcon} />}
            />
        </View>
    );
};

export default SearchBar;
