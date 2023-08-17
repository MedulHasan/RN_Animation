import React, { useState } from "react";
import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ScrollView,
    Pressable,
    Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { loginStyles } from "./LoginStyle";
import EmailIcon from "../../assets/svgs/email.svg";
import GoogleIcon from "../../assets/svgs/google1.svg";
import FacebookIcon from "../../assets/svgs/facebook1.svg";
import { loginFormValidation } from "./loginFormValidation";
import dpr from "../../style/dpr";

import { confirmEmailStyles } from "../ConfirmEmail/ConfirmEmailStyle";
// import GoogleLogin from "../utils/GoogleLogin";
// import FacebookLogin from "../utils/FacebookLogin";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loginHandler } from "./utils/loginHandler";
import { getGoogleUserInfo } from "./utils/getGoogleUserInfo";
import { getFacebookUserInfo } from "./utils/getFacebookUserInfo";
import LoginRecaptchaCheckbox from "../utils/loginRecaptcha";
import { useEffect } from "react";
import usePreferences from "../../hooks/usePreferences";
import PasswordIcon from "./PasswordIcon";
import { BASE_API_URL_STG } from '@env';
import { mutation } from "../../redux/features/util/apiRequest";
import useCustomToast from "../../hooks/useCustomToast"
import useLangTranslation from "../../hooks/useLangTranslation";
import CustomSpinner from "../../../src/components/CustomLoader/CustomSpinner";
import { ACCOUNT_CREATED, CONFIRM_EMAIL, FORGET_PASSWORD, LOGIN, SIGN_UP, TAB_NAVIGATION } from "../../Navigation/screensName";
import CustomSVG from "../../components/CustomSVG/CustomSVG";
import { useLazyGetPreferenceQuery } from "../../redux/features/preferences/preferenceAPi";
import { recaptchaSelector } from "../../redux/features/auth/reCaptcha/recaptchaSelector";
import { useLazyRecaptchaQuery } from "../../redux/features/auth/reCaptcha/recaptchaApi";
import { useSigninMutation } from "../../redux/features/auth/signin/signinApi";
import { signinSelector } from "../../redux/features/auth/signin/signinSelector";
import { storeRecaptchaToken } from "../../redux/features/auth/signin/signinSlice";

const resendVerificationUrl = `${BASE_API_URL_STG}/user/resend-verification-code`;

const initialValue = {
    email: "",
    password: "",
};

const Login = (props) => {
    const { trans } = useLangTranslation();
    const { name, params: parameter } = props?.route;
    const params = parameter == undefined ? {} : parameter;
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { reCaptchaToken } = useSelector(signinSelector);
    const {isVisibleRecaptcha} = useSelector(recaptchaSelector);

    const { preference: { sso_service, customer_signup } = {}, verification: { email } = {}, preference: {user_default_signup_status} = {} } = usePreferences();
    const [seePassword, setSeePassword] = useState(false);
    const [formValue, setFormValue] = useState(initialValue);
    const [formError, setFormError] = useState({});
    const [reCaptchaError, setReCaptchaError] = useState(false);
    const [showLoaderGL, setShowLoaderGL] = useState(false);
    const [showLoaderFB, setShowLoaderFB] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const showToast = useCustomToast();
    // const [request, response, promptAsync] = GoogleLogin();
    // const [requestFB, responseFB, promptAsyncFB] = FacebookLogin();

    const [getPreference] = useLazyGetPreferenceQuery();
    const [recaptcha] = useLazyRecaptchaQuery();
    const [signin, {isLoading}] = useSigninMutation();


    useEffect(() => {
        getPreference();
        recaptcha();
    }, []);

    /* useEffect(() => {
        (async () => {
            if (response?.type == "success") {
                const { data, access_token } = await getGoogleUserInfo(
                    response,
                    setFormError,
                    dispatch
                );
                if(data && access_token) {
                    redirect(data, access_token);
                    setShowLoaderGL(false);
                } else {
                    setShowLoaderGL(false);
                    showToast({
                        text1: trans("Something wrong, Please try again!"),
                        type: 'common',
                        position: 'bottom',
                        props: { variant: 'error' }
                    });
                }
            } else {
                setShowLoaderGL(false);
            }
        })()
    }, [response]); */

    const handleGoogleLogin = async () => {
        /* await promptAsync({
            useProxy: false,
            showInRecents: true,
        });
        setShowLoaderGL(true); */
    };

    /* useEffect(() => {
        (async () => {
            if (responseFB?.type == "success") {
                const { data, access_token } = await getFacebookUserInfo(
                    responseFB,
                    setFormError,
                    dispatch
                );
                if(data && access_token) {
                    redirect(data, access_token);
                    setShowLoaderFB(false);
                } else {
                    setShowLoaderFB(false);
                    showToast({
                        text1: trans("Something wrong, Please try again!"),
                        type: 'common',
                        position: 'bottom',
                        props: { variant: 'error' }
                    });
                }
            } else {
                setShowLoaderFB(false);
            }
        })()
    }, [responseFB]); */

    const handleFacebookLogin = async () => {
        /* await promptAsyncFB({
            useProxy: false,
            showInRecents: true,
        });
        setShowLoaderFB(true); */
    };

    const handleLogin = async () => {
        setShowLoader(true);
        const error = loginFormValidation(formValue, trans);
        if (Object.keys(error).length === 0) {
            setFormError({});
            Keyboard.dismiss();
            if (isVisibleRecaptcha) {
                if (reCaptchaToken) {
                    setReCaptchaError(false);
                    await signInApiRequest();
                    setShowLoader(false);
                } else {
                    setReCaptchaError(true);
                    setShowLoader(false);
                }
            } else {
                await signInApiRequest();
                setShowLoader(false);
            }
        } else if (Object.keys(error).length > 0) {
            setFormError(error);
            setShowLoader(false);
        }
    };

    const signInApiRequest = async () => {
        try {
            const {data} = await signin(formValue) || {};
            const {status, records } = data || {};
            const res = await loginHandler(data, setFormError);
            !res && setShowLoader(false);
            if(status?.code == 200) {
                const access_token = data?.records?.access_token;
                redirect(res, access_token);
            } else {
                if(status?.code == 422) {
                    if(records?.email) {
                        setFormError({email: records?.email[0]})
                    }
                }
                setShowLoader(false);
                if(records?.message == 'Please verify your email address.' && user_default_signup_status == "Pending" && email != 'token') {
                    mutation(resendVerificationUrl, "POST", formValue);
                    navigation.navigate(CONFIRM_EMAIL, {
                        data: formValue,
                        title: 'Confirm Account',
                        nextScreen: ACCOUNT_CREATED,
                        url: `${BASE_API_URL_STG}/user/verification`,
                        params,
                    });
                    showToast({
                        text1: trans(records?.message),
                        type: 'common',
                        position: 'bottom',
                        props: { variant: 'error' }
                    });
                } else if(records?.message == 'Please verify your email address.') {
                    mutation(resendVerificationUrl, "POST", formValue);
                }
            }
        } catch (err) {
            setShowLoader(false);
        }
    }

    const redirect = (res, access_token) => {
        let redirectRouteName;
        let redirectRouteProps;
        if (res && Object.keys(params).length) {
            redirectRouteName = params.redirectRouteName;
            redirectRouteProps = params.data;
            navigation.navigate(redirectRouteName, redirectRouteProps);
        } else if (res) {
            redirectRouteName = name == LOGIN ? TAB_NAVIGATION : name;
            navigation.navigate(redirectRouteName);
        }
    };

    const handleChange = (name, text) => {
        setFormValue({
            ...formValue,
            [name]: text,
        });
    };
    const handleSeePassword = () => {
        setSeePassword(!seePassword);
    };
    const moveSignUpPage = () => {
        navigation.navigate(SIGN_UP, params);
        setFormValue(initialValue);
        setFormError({});
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", () => {
            dispatch(storeRecaptchaToken(false));
        });
        return unsubscribe;
    }, [navigation]);

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps='always'
        >
            <View style={loginStyles.container}>
                <Text style={loginStyles.loginText}>{trans("Sign In")}</Text>
                <View>
                    <View style={loginStyles.inputTextContainer}>
                        <Text style={loginStyles.inputText}>
                            {trans("Email Address")}
                        </Text>
                    </View>
                    <View
                        style={
                            loginStyles.inputFieldContainer(formError?.email)
                        }
                    >
                        <TextInput
                            style={loginStyles.inputField}
                            placeholder={trans("e.g, johnson@gmail.com")}
                            onChangeText={(text) => handleChange("email", text)}
                            value={formValue.email}
                            placeholderTextColor={'#C8C8C8'}
                        />
                        <CustomSVG svgIcon={EmailIcon} />
                    </View>
                    <Text style={loginStyles.noteText}>{trans(formError.email)}</Text>
                </View>
                <View>
                    <View style={loginStyles.inputTextContainer}>
                        <Text style={loginStyles.inputText}>
                            {trans("Password")}
                        </Text>
                    </View>

                    <View
                        style={
                            loginStyles.inputFieldContainer(formError?.password)}
                    >
                        <TextInput
                            style={loginStyles.inputField}
                            placeholder='**************'
                            placeholderTextColor={'#C8C8C8'}
                            secureTextEntry={!seePassword ? true : false}
                            onChangeText={(text) =>
                                handleChange("password", text)
                            }
                            value={formValue.password}
                        />
                        <PasswordIcon
                            seePassword={seePassword}
                            handleSeePassword={handleSeePassword}
                        />
                    </View>
                </View>
                <View style={loginStyles.forgetCont}>
                    <Text style={loginStyles.noteText}>
                        {formError.password ||
                            trans(formError?.authError) ||
                            trans(formError?.message)}
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate(FORGET_PASSWORD)}
                    >
                        <Text style={loginStyles.forgetPassword}>
                            {trans("Forgot Password")}?
                        </Text>
                    </TouchableOpacity>
                </View>
                {isVisibleRecaptcha && (
                    <LoginRecaptchaCheckbox reCaptchaError={reCaptchaError} />
                )}
                <Pressable
                    disabled={showLoaderGL || showLoaderFB}
                    onPress={() => (showLoader ? {} : handleLogin())}
                >
                    <View style={loginStyles.loginButton}>
                        {showLoader ? (
                            <CustomSpinner
                                filePath={require("../../assets/lottie/loader2.json")}
                                size={{
                                    width: dpr(60),
                                    height: dpr(50),
                                }}
                            />
                        ) : (
                            <Text style={loginStyles.loginButtonText}>
                                {trans("Login")}
                            </Text>
                        )}
                    </View>
                </Pressable>
                <View style={loginStyles.or}>
                    <View style={loginStyles.hrLine} />
                    <Text style={loginStyles.orText}>
                        {trans("or use other accounts")}
                    </Text>
                    <View style={loginStyles.hrLine} />
                </View>
                {sso_service?.includes("Google") && (
                    <Pressable
                        disabled={showLoader || showLoaderFB}
                        onPress={() =>
                            showLoaderGL ? {} : handleGoogleLogin()
                        }
                    >
                        <View style={loginStyles.ssoLogin}>
                            {showLoaderGL && (
                                <View style={confirmEmailStyles.loading}>
                                    <CustomSpinner
                                        filePath={require("../../assets/lottie/loader.json")}
                                        size={{
                                            width: dpr(80),
                                            height: dpr(70),
                                        }}
                                    />
                                </View>
                            )}
                            <View style={loginStyles.ssoLogo}>
                                <CustomSVG svgIcon={GoogleIcon} />
                            </View>
                            <Text style={loginStyles.ssoText}>
                                {trans("Sign in with Google")}
                            </Text>
                        </View>
                    </Pressable>
                )}
                {sso_service?.includes("Facebook") && (
                    <View style={loginStyles.fbContainerMarginBottom}>
                        <Pressable
                            disabled={showLoader || showLoaderGL}
                            onPress={() =>
                                showLoaderFB ? {} : handleFacebookLogin()
                            }
                        >
                            <View
                                style={[
                                    loginStyles.ssoLogin,
                                    loginStyles.ssoFb,
                                ]}
                            >
                                {showLoaderFB && (
                                    <View style={confirmEmailStyles.loading}>
                                        <CustomSpinner
                                            filePath={require("../../assets/lottie/loader.json")}
                                            size={{
                                                width: dpr(80),
                                                height: dpr(70),
                                            }}
                                        />
                                    </View>
                                )}
                                <View style={loginStyles.ssoLogo}>
                                    <CustomSVG svgIcon={FacebookIcon} />
                                </View>
                                <Text style={loginStyles.ssoText}>
                                    {trans("Sign in with Facebook")}
                                </Text>
                            </View>
                        </Pressable>
                    </View>
                )}
                {customer_signup == 1 && <View
                    style={[loginStyles.newAccount, loginStyles.pb65]}
                >
                    <Text style={loginStyles.doNotAccount}>
                        {trans("Don't have an account")}?{" "}
                    </Text>
                    <Text style={loginStyles.register} onPress={moveSignUpPage}>
                        {trans("Register Now")}
                    </Text>
                </View>}
            </View>
        </ScrollView>
    );
};

export default Login;
