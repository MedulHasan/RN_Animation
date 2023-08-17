import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    BackHandler,
    Pressable,
    KeyboardAvoidingView,
    ScrollView
} from "react-native";
import React, { useEffect, useState } from "react";
import { resetPasswordStyle } from "./ResetPasswordStyle";
import { loginStyles } from "../Login/LoginStyle";
import { useNavigation } from "@react-navigation/native";
import dpr from "../../style/dpr";
import { passwordValidation } from "../Registration/formValidation";
import { mutation } from "../../redux/features/util/apiRequest";

import { BASE_API_URL_STG } from "@env";
import PasswordIcon from "../Login/PasswordIcon";
import usePreferences from "../../hooks/usePreferences";
import useLangTranslation from "../../hooks/useLangTranslation";
import CustomSpinner from "../../../src/components/CustomLoader/CustomSpinner";
import { FORGET_PASSWORD, LOGIN, PASSWORD_RESET_DONE } from "../../Navigation/screensName";

const ResetPassword = (props) => {
    const { trans } = useLangTranslation();
    const URL = `${BASE_API_URL_STG}/user/password/reset`;
    const { token } = props?.route?.params;
    const { password } = usePreferences();
    const initialState = {
        password: "",
        password_confirmation: "",
        token,
    };
    const navigation = useNavigation();
    const [seePassword, setSeePassword] = useState(false);
    const [seeConfirmPassword, setSeeConfirmPassword] = useState(false);
    const [formValue, setFormValue] = useState(initialState);
    const [formError, setFormError] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const onBackPress = () => {
            navigation.navigate(FORGET_PASSWORD);
            return true;
        };
        const subscription = BackHandler.addEventListener(
            "hardwareBackPress",
            onBackPress
        );
        return () => subscription.remove();
    }, []);

    const handleSeePassword = () => {
        setSeePassword(!seePassword);
    };
    const handleSeeConfirmPassword = () => {
        setSeeConfirmPassword(!seeConfirmPassword);
    };
    const handleChange = (name, value) => {
        setFormValue({
            ...formValue,
            [name]: value,
        });
    };

    const handleResetPassword = async () => {
        if (!formValue?.password || !formValue?.password_confirmation) return;

        const error = passwordValidation(formValue, password);
        if (Object.keys(error).length === 0) {
            setFormError({});
            if (formValue.password !== formValue.password_confirmation) {
                setFormError({
                    ["confirmPassword"]:
                        "The password confirmation does not match.",
                });
            } else {
                setFormError({});
                setLoading(true);
                try {
                    const data = await mutation(URL, "POST", formValue);
                    const { status, records } = data.response;
                    if (status.code === 200) {
                        setFormError({});
                        setFormValue(initialState);
                        navigation.navigate(PASSWORD_RESET_DONE);
                    } else {
                        setLoading(false);
                        setFormError({
                            [`new${Object.keys(records)[0]}`]:
                                records[Object.keys(records)[0]][0],
                        });
                    }
                } catch (error) {
                    setLoading(false);
                }
            }
        } else {
            setFormError(error);
        }
        setLoading(false);
    };

    const [passwordNote, setPasswordNote] = useState();
    useEffect(() => {
        let pwNote = "";
        for (let key in password) {
            if (key == "length") {
                pwNote =
                    pwNote +
                    trans("Password must be contain {{x}} characters long", {x:password[key]});
            } else if (password[key]) {
                pwNote = `${pwNote}, one ${key}`;
            }
        }
        setPasswordNote(pwNote);
    }, [password]);

    return (
        <KeyboardAvoidingView style={resetPasswordStyle.header} behavior={Platform.OS === 'ios' ? 'padding' : ''}>
            <ScrollView style={resetPasswordStyle.container}>
                <Text style={resetPasswordStyle.text}>
                    {trans("Set new passwords.")}
                </Text>
                <View>
                        <View style={loginStyles.inputTextContainer}>
                            <Text style={loginStyles.inputText}>
                                {trans("New Password")}
                            </Text>
                        </View>

                        <View style={loginStyles.inputFieldContainer()}>
                            <TextInput
                                value={formValue.password}
                                style={loginStyles.inputField}
                                placeholder='**************'
                                secureTextEntry={!seePassword ? true : false}
                                onChangeText={(text) =>
                                    handleChange("password", text)
                                }
                            />

                            <PasswordIcon
                                seePassword={seePassword}
                                handleSeePassword={handleSeePassword}
                            />
                        </View>
                        <Text style={loginStyles.noteText}>
                            {formError[Object.keys(formError)[0]] || (
                                <Text
                                    style={[
                                        loginStyles.noteText,
                                        loginStyles.color_898989
                                    ]}
                                >
                                    {passwordNote}
                                </Text>
                            )}
                        </Text>
                        <View style={loginStyles.inputTextContainer}>
                            <Text style={loginStyles.inputText}>
                                {trans("Confirm Password")}
                            </Text>
                        </View>

                        <View style={loginStyles.inputFieldContainer()}>
                            <TextInput
                                value={formValue.password_confirmation}
                                style={loginStyles.inputField}
                                placeholder='**************'
                                secureTextEntry={
                                    !seeConfirmPassword ? true : false
                                }
                                onChangeText={(text) =>
                                    handleChange("password_confirmation", text)
                                }
                            />
                            <PasswordIcon
                                seePassword={seeConfirmPassword}
                                handleSeePassword={handleSeeConfirmPassword}
                            />
                        </View>
                    <Pressable onPress={handleResetPassword}>
                        <View style={loginStyles.loginButton}>
                            {loading ? (
                                <CustomSpinner
                                    filePath={require("../../assets/lottie/loader2.json")}
                                    size={{
                                        width: dpr(60),
                                        height: dpr(50),
                                    }}
                                />
                            ) : (
                                <Text style={loginStyles.loginButtonText}>
                                    {trans("Reset Password")}
                                </Text>
                            )}
                        </View>
                    </Pressable>
                    <TouchableOpacity
                        onPress={() => navigation.navigate(LOGIN)}
                    >
                        <Text style={resetPasswordStyle.cancel}>
                            {trans("Cancel")}
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default ResetPassword;
