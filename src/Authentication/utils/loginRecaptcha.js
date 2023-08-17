import React, { useCallback, useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./reCaptchaStyle";
import ActivityIndicator from "./ActivityIndicator";
import { useSelector, useDispatch } from "react-redux";
import Recaptcha from "react-native-recaptcha-that-works";

import { RECAPTCHA_SITE_KEY, RECAPTCHA_BASE_URL } from "@env";
import useLangTranslation from "../../hooks/useLangTranslation";
import { DEFAULT_LANG } from "../../constants/languageConst";
import { signinSelector } from "../../redux/features/auth/signin/signinSelector";
import { storeRecaptchaToken } from "../../redux/features/auth/signin/signinSlice";

const LoginRecaptchaCheckbox = ({ reCaptchaError }) => {
    const { trans } = useLangTranslation();
    const { reCaptchaToken } = useSelector(signinSelector);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const recaptcha = useRef();

    const send = useCallback(() => {
        setLoading(true);
        recaptcha.current.open();
      }, []);

    const onVerify = (token) => {
        if(Boolean(token)){
            dispatch(storeRecaptchaToken(true));
        }
        setLoading(false);
    };
    return (
        <View>
            <Recaptcha
                lang={DEFAULT_LANG}
                ref={recaptcha}
                size='normal'
                hideBadge={true}
                onVerify={onVerify}
                baseUrl={RECAPTCHA_BASE_URL}
                siteKey={RECAPTCHA_SITE_KEY}
                style={styles.bgTransparent}
                loadingComponent={<Text></Text>}
            />
            <View style={styles.reCaptchaButton}>
                <View style={styles.reCaptchaText}>
                    <TouchableOpacity onPress={send} disabled={reCaptchaToken}>
                        <ActivityIndicator
                            reCaptchaToken={reCaptchaToken}
                            loading={loading}
                        />
                    </TouchableOpacity>
                    <Text>{trans("I'm not a robot")}</Text>
                </View>
                <View style={styles.reCaptchaIconWrap}>
                    <Image
                        style={styles.reCaptchaIcon}
                        source={require("../../assets/images/reCaptcha.png")}
                    />
                    <Text style={styles.reCaptchaIconText}>reCAPTCHA</Text>
                </View>
            </View>
            {reCaptchaError && (
                <Text style={styles.reCaptchaError}>
                   {trans("Please verify that you are not a robot.")}
                </Text>
            )}
        </View>
    );
};

export default LoginRecaptchaCheckbox;
