import { useDispatch } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from "react";
import { setLanguage } from "../redux/features/language/language";
import i18n from "../language/i18n";
import SplashScreen from 'react-native-splash-screen'
import useCustomToast from "./useCustomToast";
import { useLazyGetPreferenceQuery } from "../redux/features/preferences/preferenceAPi";
import { login } from "../redux/features/auth/signin/signinSlice";

const useAuthCheck = () => {
    const dispatch = useDispatch();
    const toast = useCustomToast();
    const [getPreference] = useLazyGetPreferenceQuery();
    useEffect(() => {
        (async () => {
            try {
                // check application authentication
                const localAuth = await AsyncStorage.getItem("isLoggedIn");
                if (localAuth) {
                    const auth = JSON.parse(localAuth);
                    if (auth?.access_token && auth?.user) {
                        dispatch(
                            login({
                                access_token: auth.access_token,
                                user: auth.user,
                            })
                        );
                    }
                };

                // set application language
                const langCode = await AsyncStorage.getItem('languageCode');
                const {data} = await getPreference();
                if(langCode == null) {
                    if(data?.status?.code === 200) {
                        const { dflt_lang: lng } = data?.company || {};
                        dispatch(setLanguage(lng));
                    }
                } else {
                    i18n.changeLanguage(langCode);
                    dispatch(setLanguage(langCode));
                }
            } catch (err) {
                toast({
                    type: 'error',
                    text1: `Something went wrong, please try again later!`,
                })
            } 
            finally {
                SplashScreen.hide();
            }
        })()
    }, [dispatch]);
};

export default useAuthCheck;
