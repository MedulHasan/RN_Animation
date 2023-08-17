import { Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { customTextInputStyle } from "./customTextInput.style";
import dpr from "../../../style/dpr";

const CustomTextInput = ({
    label = "",
    style = {},
    editable = true,
    keyboardAppearance = "light",
    keyboardType = "default",
    returnKeyType = "done",
    placeholder = "",
    defaultValue = "",
    multiline = false,
    numberOfLines = 1,
    textAlignVertical = "center",
    maxLength = 10000,
    secureTextEntry = false,
    value,
    leftIcon,
    rightIcon,
    isError = false,
    error = "",
    isConvertible = false,
    onChangeText,
    onChange,
    onKeyPress,
    autoFocus,
    onEndEditing,
    bgColor,
    info = "",
    borderBottomWidth,
}) => {
    const [isFocus, setIsFocus] = useState(false);
    const [layout, setLayout] = useState(null);

    let inputWidth;
    if (typeof leftIcon === "object" && typeof rightIcon === "object") {
        inputWidth = layout?.width - dpr(14 * 6 + 3) || undefined;
    } else if (typeof leftIcon === "object") {
        inputWidth = layout?.width - dpr(14 * 4 + 3) || undefined;
    } else if (typeof rightIcon === "object") {
        inputWidth = layout?.width - dpr(14 * 4 - 1) || undefined;
    } else if (
        typeof leftIcon === "undefined" &&
        typeof rightIcon === "undefined"
    ) {
        inputWidth = layout?.width - dpr(14 * 2) || undefined;
    }

    const inputStyle = customTextInputStyle(
        isFocus,
        value,
        isError,
        layout,
        editable,
        isConvertible,
        bgColor,
        borderBottomWidth
    );


    const styles = Array.isArray(style) ? style : [style];
    const inputWidthStyle = { width: inputWidth };

    return (
        <View>
            {label != "" && <Text style={inputStyle.label}>{label}</Text>}
            <View
                onLayout={(event) => setLayout(event.nativeEvent.layout)}
                style={[inputStyle.inputCont, ...styles]}
            >
                {typeof leftIcon == "object" && (
                    <View style={inputStyle.icon}>{leftIcon}</View>
                )}
                <TextInput
                    style={[inputStyle.input, inputWidthStyle]}
                    cursorColor={'#000'}
                    placeholderTextColor={'#C4C4C4'}
                    placeholder={isFocus ? "" : placeholder}
                    editable={editable}
                    keyboardAppearance={keyboardAppearance}
                    keyboardType={keyboardType}
                    returnKeyType={returnKeyType}
                    multiline={multiline}
                    numberOfLines={numberOfLines}
                    textAlignVertical={textAlignVertical}
                    maxLength={maxLength}
                    secureTextEntry={secureTextEntry}
                    defaultValue={defaultValue}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    value={value?.toString()}
                    onChangeText={onChangeText}
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                    autoFocus={autoFocus}
                    onEndEditing={onEndEditing}
                />
                {typeof rightIcon === "object" && (
                    <View style={inputStyle.rightIcon}>{rightIcon}</View>
                )}
            </View>
            {error?.trim() != "" && (
                <Text style={inputStyle.error}>{error?.trim()}</Text>
            )}
            {info?.trim() != "" && !error?.trim() != "" && (
                <Text style={inputStyle.info}>{info?.trim()}</Text>
            )}
        </View>
    );
};

export default CustomTextInput;
