import { Pressable, Text } from "react-native";
import React, { memo } from "react";
import selectSingleItemStyle from "./selectSingleItem.style";
import useLangTranslation from "../../hooks/useLangTranslation";

const SelectSingleItem = ({ selectRef, item, onPress, name }) => {
    const { trans } = useLangTranslation();
    const selectSingleItemStyles = selectSingleItemStyle();
    return (
        <Pressable
            style={selectSingleItemStyles.cont}
            onPress={() => {
                typeof onPress == "function" && onPress(item, name);
                selectRef?.current?.close();
            }}
        >
            <Text style={selectSingleItemStyles.text}>
                {trans(item?.name) || trans(item?.order_key)}
            </Text>
        </Pressable>
    );
};

export default memo(SelectSingleItem);
