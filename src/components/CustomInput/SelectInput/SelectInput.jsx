import { Text, Pressable, View } from "react-native";
import React from "react";
import { selectInputStyle } from "./selectInput.style";
import { useState } from "react";

const SelectInput = ({
    style = {},
    label = "",
    title = "",
    placeholder = "Select",
    icon,
    onPress,
    isError = false,
    error = "",
    disabled = false,
}) => {
    const [layout, setLayout] = useState(null);
    const selectInput = selectInputStyle(title, isError, layout, disabled);
    const styles = Array.isArray(style) ? style : [style];
    return (
        <View>
            {label != "" && <Text style={selectInput.label}>{label}</Text>}
            <Pressable
                onPress={onPress}
                disabled={disabled}
                style={[selectInput.selectInputCont, ...styles]}
                onLayout={(event) => setLayout(event.nativeEvent.layout)}
            >
                <Text style={selectInput.selectInputText} numberOfLines={1}>
                    {title || placeholder}
                </Text>
                {icon}
            </Pressable>
            {isError && error && <Text style={selectInput.error}>{error}</Text>}
        </View>
    );
};

export default SelectInput;
