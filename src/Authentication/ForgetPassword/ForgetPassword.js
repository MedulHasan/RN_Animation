import { View, Text, TextInput, Pressable, Keyboard, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";
import { forgetPasswordStyle } from "./ForgetPasswordStyle";
import { loginStyles } from "../Login/LoginStyle";
import EmailIcon from "../../assets/svgs/email.svg";
import { useNavigation } from "@react-navigation/native";
import dpr from "../../style/dpr";
import { mutation } from "../../redux/features/util/apiRequest";
import { BASE_API_URL_STG } from "@env";
import usePreferences from "../../hooks/usePreferences";
import useCustomToast from "../../hooks/useCustomToast";
import useLangTranslation from "../../hooks/useLangTranslation";
import CustomSpinner from "../../../src/components/CustomLoader/CustomSpinner";
import { CONFIRM_EMAIL, RESET_PASSWORD } from "../../Navigation/screensName";
import CustomSVG from "../../components/CustomSVG/CustomSVG";

const ForgetPassword = () => {
    const { trans } = useLangTranslation();
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const { verification: { email: userVerificationType } = {} } = usePreferences();
    const showToast = useCustomToast();

    const handleSubmit = async () => {
        const err = validation(email);
        if (err) {
            setError(err);
        } else {
            setLoading(true);
            setError("");
            Keyboard.dismiss();
            const data = await fetchResetPassOtp(email);
            if(userVerificationType != 'token') {
                if (data?.response?.status?.code == 200) {
                    navigation.navigate(CONFIRM_EMAIL, {
                        data: {email},
                        title: "Check Your Mail",
                        nextScreen: RESET_PASSWORD,
                        url: `${BASE_API_URL_STG}/user/otp-validity`,
                    });
                    setEmail("");
                } else {
                    const records = data?.response?.records;
                    setError(records[Object.keys(records)[0]]);
                }
            } else {
                const records = data?.response?.records;
                showToast({
                    text1: trans(records[Object.keys(records)[1]]),
                    type: 'common',
                    position: 'bottom',
                    props: { variant: 'success' },
                });
            }
            setLoading(false);
        }
    };
    return (
        <KeyboardAvoidingView style={forgetPasswordStyle.header} behavior={Platform.OS === 'ios' ? 'padding' : ''}>
            <View style={forgetPasswordStyle.container}>
                <Text style={forgetPasswordStyle.text}>
                    {trans("Don't worry. Please enter the email address associated with your account.")}
                </Text>
                <View>
                    <View style={loginStyles.inputTextContainer}>
                        <Text style={loginStyles.inputText}>{trans("Email Address")}</Text>
                    </View>
                    <View style={loginStyles.inputFieldContainer(error)}>
                        <TextInput
                            style={loginStyles.inputField}
                            placeholder={trans('e.g, johnson@gmail.com')}
                            onChangeText={(text) => setEmail(text)}
                            value={email}
                            placeholderTextColor={'#C8C8C8'}
                        />
                        <CustomSVG svgIcon={EmailIcon} />
                    </View>
                    <Text style={loginStyles.noteText}>{trans(error)}</Text>
                </View>
                <Pressable onPress={handleSubmit}>
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
                                {trans("Submit")}
                            </Text>
                        )}
                    </View>
                </Pressable>
            </View>
        </KeyboardAvoidingView>
    );
};

export default ForgetPassword;

const validation = (value) => {
    let regEmail =
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let error = "";

    if (!value) {
        error = "Email is required";
    } else if (regEmail.test(value) === false) {
        error = "Enter a valid email address";
    }

    return error;
};

export const fetchResetPassOtp = async (email) => {
    const URL = `${BASE_API_URL_STG}/user/password/reset-link`;
    const body = { email };
    const data = await mutation(URL, "POST", body);
    return data;
};
