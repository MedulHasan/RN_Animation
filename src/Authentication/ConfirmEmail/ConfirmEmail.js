import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { forgetPasswordStyle } from '../ForgetPassword/ForgetPasswordStyle';
import BrokenEmailLogo from '../../assets/svgs/confirm-email.svg';
import { confirmEmailStyles } from './ConfirmEmailStyle';
import dpr from '../../style/dpr';
import { mutation, query } from '../../redux/features/util/apiRequest';
import useCustomToast from '../../hooks/useCustomToast';
import { BASE_API_URL_STG } from "@env";
import useLangTranslation from '../../hooks/useLangTranslation';
import CustomSpinner from '../../../src/components/CustomLoader/CustomSpinner';
import BackNavigation from '../../../src/components/BackNavigation';
import { ACCOUNT_CREATED, LOGIN, RESET_PASSWORD } from '../../Navigation/screensName';
import CustomSVG from '../../components/CustomSVG/CustomSVG';

const ConfirmEmail = (props) => {
    const { trans } = useLangTranslation();
    const { navigation, route } = props;
    const { data, nextScreen, title, url, params = {} } = route?.params;

    const pref = data?.email.substring(0, 3);
    const postf = data?.email.split('@')[1];
    const otp1Ref = useRef(null);
    const otp2Ref = useRef(null);
    const otp3Ref = useRef(null);
    const otp4Ref = useRef(null);

    const [otp1, setOtp1] = useState('');
    const [otp2, setOtp2] = useState('');
    const [otp3, setOtp3] = useState('');
    const [otp4, setOtp4] = useState('');

    const [showLoader, setShowLoader] = useState(false);
    const [invalidOtp, setInvalidOtp] = useState('');

    const showToast = useCustomToast();

    const resetPassUrl = `${BASE_API_URL_STG}/user/password/reset-link`;
    const resetSignupUrl = `${BASE_API_URL_STG}/user/resend-verification-code`;

    const handleResendCode = async () => {
        setInvalidOtp('')
        showToast({
            text1: trans('Resend your code. Please check your email!'),
            type: 'common',
            position: 'bottom',
            props: { variant: 'success' },
        });
        let res = {};
        if(nextScreen == RESET_PASSWORD) {
            res = await mutation(resetPassUrl, "POST", data)
        } else if(nextScreen == ACCOUNT_CREATED) {
            res = await mutation(resetSignupUrl, "POST", data);
        }
        const { records, status } = res?.response || {};
        if (status?.code != 200) {
            showToast({
                text1: trans(records[Object.keys(records)[0]]),
                type: 'common',
                position: 'bottom',
                props: { variant: 'error' },
            });
            navigation.navigate(LOGIN);
        }
    };

    return (
        <ScrollView
        keyboardShouldPersistTaps={"always"}
            showsVerticalScrollIndicator={false}
            style={forgetPasswordStyle.header}
        >
            {showLoader && (
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
            <BackNavigation
                navigationProps={navigation}
                routeName={''}
                capitalize={false}
            />
            <View style={confirmEmailStyles.container}>
                <CustomSVG 
                    svgIcon={BrokenEmailLogo} 
                    style={confirmEmailStyles.brokenEmail}
                    isRtl={1}
                />
                <Text style={confirmEmailStyles.checkEmail}>
                    {trans(title) || trans('Check Your Mail')}
                </Text>
                <Text style={confirmEmailStyles.text}>
                    {trans('A 4 digit code has been sent to {{x}}.....@{{y}}.Use the code here.',{ x: pref, y: postf })}
                </Text>
                <View style={confirmEmailStyles.otpContainer}>
                    <View style={confirmEmailStyles.otpgap}>
                        <TextInput
                            keyboardType='number-pad'
                            returnKeyType='done'
                            ref={otp1Ref}
                            style={confirmEmailStyles.textInputField}
                            maxLength={1}
                            value={otp1}
                            onChangeText={(otp1) => {
                                setOtp1(otp1);
                                if (otp1 != '') {
                                    otp2Ref.current.focus();
                                }
                            }}
                        />
                    </View>
                    <View style={confirmEmailStyles.otpgap}>
                        <TextInput
                            keyboardType='number-pad'
                            returnKeyType='done'
                            ref={otp2Ref}
                            style={confirmEmailStyles.textInputField}
                            maxLength={1}
                            value={otp2}
                            onChangeText={(otp2) => {
                                setOtp2(otp2);
                                if (otp2 != '') {
                                    otp3Ref.current.focus();
                                }
                            }}
                            onKeyPress={(e) => {
                                if (e.nativeEvent.key === 'Backspace') {
                                    setOtp1('');
                                    otp1Ref.current.focus();
                                }
                            }}
                        />
                    </View>
                    <View style={confirmEmailStyles.otpgap}>
                        <TextInput
                            ref={otp3Ref}
                            keyboardType='number-pad'
                            returnKeyType='done'
                            style={confirmEmailStyles.textInputField}
                            maxLength={1}
                            value={otp3}
                            onChangeText={(otp3) => {
                                setOtp3(otp3);
                                if (otp3 != '') {
                                    otp4Ref.current.focus();
                                }
                            }}
                            onKeyPress={(e) => {
                                if (e.nativeEvent.key === 'Backspace') {
                                    setOtp2('');
                                    otp2Ref.current.focus();
                                }
                            }}
                        />
                    </View>
                    <View style={confirmEmailStyles.otpgap}>
                        <TextInput
                            ref={otp4Ref}
                            keyboardType='number-pad'
                            returnKeyType='done'
                            style={confirmEmailStyles.textInputField}
                            maxLength={1}
                            value={otp4}
                            onChangeText={async (otp4) => {
                                setOtp4(otp4);
                                if (otp1 && otp2 && otp3 && otp4) {
                                    setInvalidOtp('');
                                    const otp = otp1 + otp2 + otp3 + otp4;
                                    setShowLoader(true);
                                    let data = await fetchOtp(url, otp);
                                    setShowLoader(false);
                                    const { code } = data?.response?.status;
                                    
                                    if (code === 200 || code === 201) {
                                        navigation.navigate(nextScreen, {
                                            token: otp,
                                            params,
                                        });
                                    } else {
                                        setInvalidOtp(
                                            data?.response?.records?.otp || data?.response?.records?.message
                                        );
                                    }

                                    setOtp1('');
                                    setOtp2('');
                                    setOtp3('');
                                    setOtp4('');
                                    otp1Ref.current.focus();
                                }
                            }}
                            onKeyPress={(e) => {
                                if (e.nativeEvent.key === 'Backspace') {
                                    if (otp4 === '') {
                                        setOtp3('');
                                        otp3Ref.current.focus();
                                    } else {
                                        setOtp4('');
                                        otp4Ref.current.focus();
                                    }
                                }
                            }}
                        />
                    </View>
                </View>
                {invalidOtp ? (
                    <Text style={confirmEmailStyles.errorText}>
                        {trans('Invalid OTP')}
                    </Text>
                ) : (
                    <Text></Text>
                )}
                <TouchableOpacity onPress={handleResendCode}>
                    <Text style={confirmEmailStyles.resendCode}>
                        {trans('Resend Code')}
                    </Text>
                </TouchableOpacity>
                <View style={confirmEmailStyles.anotherEmailContainer}>
                    <Text style={confirmEmailStyles.checkSpam}>
                        {trans('Did not receive any code? Check your spam folder.')}
                        <Text style={confirmEmailStyles.tryAnother}>
                            {/* {trans("or resend code")} */}
                        </Text>
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default ConfirmEmail;

const fetchOtp = async (url, otp) => {
    const URL = `${url}/${otp}`;
    return query(URL, 'GET');
};
