import React, { useEffect, useState } from 'react';
import {
    Text,
    TextInput,
    View,
    ScrollView,
    StyleSheet,
    Pressable,
    Keyboard,
} from 'react-native';
import { loginStyles } from '../Login/LoginStyle';
import EmailIcon from '../../assets/svgs/email.svg';
import UserIcon from '../../assets/svgs/user.svg';
import GoogleIcon from '../../assets/svgs/google1.svg';
import FacebookIcon from '../../assets/svgs/facebook1.svg';
import { registrationStyle } from './RegistrationStyle';
import { formValidation } from './formValidation';
import dpr from '../../style/dpr';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import GoogleLogin from '../utils/GoogleLogin';
// import FacebookLogin from '../utils/FacebookLogin';
import { confirmEmailStyles } from '../ConfirmEmail/ConfirmEmailStyle';
import { getGoogleUserInfo } from '../Login/utils/getGoogleUserInfo';
import { getFacebookUserInfo } from '../Login/utils/getFacebookUserInfo';
import RegistrationRecaptchaCheckbox from '../utils/registrationRecaptcha';
import { useNavigation } from '@react-navigation/native';
import usePreferences from '../../hooks/usePreferences';
import useCustomToast from '../../hooks/useCustomToast';

import { BASE_API_URL_STG } from '@env';
import PasswordIcon from '../Login/PasswordIcon';
import useLangTranslation from '../../hooks/useLangTranslation';
import CustomSpinner from '../../../src/components/CustomLoader/CustomSpinner';
import { ACCOUNT_CREATED, CONFIRM_EMAIL, LOGIN, TAB_NAVIGATION } from '../../Navigation/screensName';
import CustomSVG from '../../components/CustomSVG/CustomSVG';
import { useSignupMutation } from '../../redux/features/auth/signup/signupApi';
import { signupSelector } from '../../redux/features/auth/signup/signupSelector';
import { storeCaptchaToken, storeRecaptchaToken } from '../../redux/features/auth/signup/signupSlice';
import { useLazyGetPreferenceQuery } from '../../redux/features/preferences/preferenceAPi';
import { recaptchaSelector } from '../../redux/features/auth/reCaptcha/recaptchaSelector';

let initialValue = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
};

const Registration = (props) => {
    const { trans } = useLangTranslation();
    const { name, params: parameter } = props?.route;
    const params = parameter == undefined ? {} : parameter;
    const navigation = useNavigation();
    const { verification: { email } = {}, password, preference: {user_default_signup_status} = {} } = usePreferences();
    const [getPreference] = useLazyGetPreferenceQuery();

    const {reCaptchaToken, captchaToken} = useSelector(signupSelector);
    const {isVisibleRecaptcha} = useSelector(recaptchaSelector);
    
    const [seePassword, setSeePassword] = useState(false);
    const [formValue, setFormValue] = useState(initialValue);
    const [formError, setFormError] = useState({});
    const [reCaptchaError, setReCaptchaError] = useState(false);
    const dispatch = useDispatch();
    const showToast = useCustomToast();

    const [showLoaderGL, setShowLoaderGL] = useState(false);
    const [showLoaderFB, setShowLoaderFB] = useState(false);

    const [signup, {isLoading: loading}] = useSignupMutation();

    // const [request, response, promptAsync] = GoogleLogin();
    // const [requestFB, responseFB, promptAsyncFB] = FacebookLogin();

    /* useEffect(() => {
        (async () => {
            if (response?.type == 'success') {
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
            if (responseFB?.type == 'success') {
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

    const redirect = (res, access_token) => {
        let redirectRouteName;
        let redirectRouteProps;
        if (res && Object.keys(params).length) {
            redirectRouteName = params.redirectRouteName;
            redirectRouteProps = params.data;
            navigation.navigate(redirectRouteName, redirectRouteProps);
        } else if (res) {
            redirectRouteName = name === LOGIN ? TAB_NAVIGATION : name;
            navigation.navigate(redirectRouteName);
        }
    };

    const handleChange = (name, text) => {
        setFormValue({
            ...formValue,
            [name]: text,
        });
    };

    const handleSignUp = async () => {
        getPreference();
        const error = formValidation({
            value: formValue,
            passwordPreferences: password,
            trans,
        });
        if (Object.keys(error)?.length === 0) {
            setFormError({});
            Keyboard.dismiss();
            if (isVisibleRecaptcha) {
                if (reCaptchaToken) {
                    setReCaptchaError(false);
                    await signUpApiRequest();
                } else {
                    setReCaptchaError(true);
                }
            } else {
                await signUpApiRequest();
            }
        } else {
            setFormError(error);
        }
    };

    const signUpApiRequest = async () => {
        const inputData = {
            ...formValue,
            password_confirmation: formValue.password,
            "g-recaptcha-response": captchaToken
        };
        try {
            const data = await signup(inputData);
            let { records, status: { message, code } = {} } =
            data?.data || {};
            if (code == 201) {
                setFormValue(initialValue);
                setFormError({});
                if(user_default_signup_status == "Pending" && email != 'token') {
                    navigation.navigate(CONFIRM_EMAIL, {
                        data: {email: inputData.email, password: inputData.password},
                        title: 'Confirm Account',
                        nextScreen: ACCOUNT_CREATED,
                        url: `${BASE_API_URL_STG}/user/verification`,
                        params,
                    });
                } else {
                    showToast({
                        text1: trans(message),
                        type: 'common',
                        position: 'bottom',
                        props: { variant: 'success' },
                    });
                    navigation.navigate(ACCOUNT_CREATED);
                }
            } else if (code == 422) {
                showToast({
                    text1: trans(records[Object.keys(records)[0]][0]),
                    type: "common",
                    position: "bottom",
                    props: { variant: "error" },
                })
            } else {
                showToast({
                    text1: trans('Something wrong!'),
                    type: "common",
                    position: "bottom",
                    props: { variant: "error" },
                })
            }
        } catch (error) {}
    }

    const handleSeePassword = () => {
        setSeePassword(!seePassword);
    };
    const handleMoveLogin = () => {
        setFormError({});
        navigation.navigate(LOGIN, params);
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            dispatch(storeCaptchaToken(''));
            dispatch(storeRecaptchaToken(false));
        });
        return unsubscribe;
    }, [navigation]);

    const [passwordNote, setPasswordNote] = useState();
    useEffect(() => {
        let pwNote = trans('Note: ');
        let passwordError = '';
        for (let key in password) {
            if (key == 'length') {
                pwNote =
                    pwNote + trans("Password must be contain {{x}} characters long", {x:password[key]});
            } else if (password[key]) {
                passwordError = passwordError + `${key} `;
            }
        }
        let str = passwordError.split(' ').slice(0, -1).join(', ');
        let lastCommaIndex = str.lastIndexOf(",");
        if (lastCommaIndex !== -1) {
            let beforeComma = str.substring(0, lastCommaIndex);
            let afterComma = str.substring(lastCommaIndex + 1);
            str = 'with ' + beforeComma + " and" + afterComma;
        } else if(lastCommaIndex == -1) {
            str = str ? `with ${str}`  : str
        }
        passwordError = `${pwNote} ${str}`;
        setPasswordNote(passwordError);
    }, [password]);

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps='always'
        >
            <View style={loginStyles.container}>
                <Text
                    style={[
                        loginStyles.loginText,
                        registrationStyle.signUpTitle,
                    ]}
                >
                    {trans("Let's Sign Up")}
                </Text>
                <View>
                    <View
                        style={[
                            loginStyles.inputTextContainer,
                            registrationStyle.inputTextContainer,
                        ]}
                    >
                        <Text style={loginStyles.inputText}>
                            {trans('Your Name')}
                        </Text>
                    </View>
                    <View
                        style={loginStyles.inputFieldContainer(formError?.name)}
                    >
                        <TextInput
                            value={formValue.name}
                            style={loginStyles.inputField}
                            placeholder={trans('e.g, Johnson Dammusa')}
                            placeholderTextColor={'#C8C8C8'}
                            onChangeText={(text) => handleChange('name', text)}
                        />
                        <CustomSVG svgIcon={UserIcon} />
                    </View>
                    <Text
                        style={[
                            loginStyles.noteText,
                            loginStyles.mb5(formError?.name)
                        ]}
                    >
                        {formError.name}
                    </Text>
                </View>
                <View>
                    <View
                        style={[
                            loginStyles.inputTextContainer,
                            registrationStyle.inputTextContainer,
                        ]}
                    >
                        <Text style={loginStyles.inputText}>
                            {trans('Email Address')}
                        </Text>
                    </View>
                    <View
                        style={loginStyles.inputFieldContainer(formError?.email)}
                    >
                        <TextInput
                            value={formValue.email}
                            style={loginStyles.inputField}
                            placeholder={trans('e.g, johnson@gmail.com')}
                            placeholderTextColor={'#C8C8C8'}
                            onChangeText={(text) => handleChange('email', text)}
                        />
                        <CustomSVG svgIcon={EmailIcon} />
                    </View>
                    <Text
                        style={[
                            loginStyles.noteText,
                            loginStyles.mb5(formError?.email)
                        ]}
                    >
                        {formError.email}
                    </Text>
                </View>
                <View>
                    <View
                        style={[
                            loginStyles.inputTextContainer,
                            registrationStyle.inputTextContainer,
                        ]}
                    >
                        <Text style={loginStyles.inputText}>
                            {trans('Password')}
                        </Text>
                    </View>

                    <View
                        style={loginStyles.inputFieldContainer(formError?.password)}
                    >
                        <TextInput
                            value={formValue.password}
                            style={loginStyles.inputField}
                            placeholder='**************'
                            placeholderTextColor={'#C8C8C8'}
                            secureTextEntry={!seePassword ? true : false}
                            onChangeText={(text) =>
                                handleChange('password', text)
                            }
                        />
                        <PasswordIcon
                            seePassword={seePassword}
                            handleSeePassword={handleSeePassword}
                        />
                    </View>
                    <Text style={loginStyles.noteText}>
                        {formError?.password || (
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
                </View>
                {isVisibleRecaptcha && (
                    <RegistrationRecaptchaCheckbox
                        reCaptchaError={reCaptchaError}
                    />
                )}
                <Pressable
                    disabled={showLoaderGL || showLoaderFB}
                    onPress={() => (loading ? {} : handleSignUp())}
                >
                    <View style={loginStyles.loginButton}>
                        {loading ? (
                            <CustomSpinner
                                filePath={require('../../assets/lottie/loader2.json')}
                                size={{
                                    width: dpr(60),
                                    height: dpr(50),
                                }}
                            />
                        ) : (
                            <Text style={loginStyles.loginButtonText}>
                                {trans('Create Account')}
                            </Text>
                        )}
                    </View>
                </Pressable>
                <View style={loginStyles.or}>
                    <View style={loginStyles.hrLine} />
                    <Text style={loginStyles.orText}>
                        {trans('or use other accounts')}
                    </Text>
                    <View style={loginStyles.hrLine} />
                </View>
                <Pressable
                    disabled={loading || showLoaderFB}
                    onPress={() => (showLoaderGL ? {} : handleGoogleLogin())}
                >
                    <View style={loginStyles.ssoLogin}>
                        {showLoaderGL && (
                            <View style={confirmEmailStyles.loading}>
                                <CustomSpinner
                                    filePath={require('../../assets/lottie/loader.json')}
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
                            {trans('Sign in with Google')}
                        </Text>
                    </View>
                </Pressable>
                <View style={registrationStyle.wrapperMarginBottom}>
                    <Pressable
                        disabled={loading || showLoaderGL}
                        onPress={() =>(showLoaderFB ? {} : handleFacebookLogin())}
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
                                        filePath={require('../../assets/lottie/loader.json')}
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
                                {trans('Sign in with Facebook')}
                            </Text>
                        </View>
                    </Pressable>
                </View>
                <View style={loginStyles.newAccount}>
                    <Text style={loginStyles.doNotAccount}>
                        {trans('Already have an account')}?{' '}
                    </Text>
                    <Text
                        style={loginStyles.register}
                        onPress={handleMoveLogin}
                    >
                        {trans('Login Now')}
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

export const internalStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
});

export default Registration;
