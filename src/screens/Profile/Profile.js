import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import useAuth from "../../hooks/useAuth";
import { ProfileStyles } from "./ProfileStyle";
import EditProfileIcon from "../../assets/svgs/edit_1.svg";
import { queryResponse } from "../../redux/features/util/processResponse.js";
import resetReduxStore from "../../helper/resetReduxStore";
import { BASE_API_URL_STG } from "@env";
import ProfilePicture from "./ProfilePicture";
import dpr from "../../style/dpr";
import useLangTranslation from "../../hooks/useLangTranslation";
import gapStyle from "../Utilities/CommonStyles/gap.style";
import { EDIT_PROFILE, SETTING } from "../../Navigation/screensName";
import CustomToastModal from "../../components/CustomToastModal/CustomToastModal";
import CustomSVG from "../../components/CustomSVG/CustomSVG";
import { useLazyGetPreferenceQuery } from "../../redux/features/preferences/preferenceAPi";
import { useLazyRecaptchaQuery } from "../../redux/features/auth/reCaptcha/recaptchaApi";
import { login } from "../../redux/features/auth/signin/signinSlice";
import { useLazyGetProfileQuery } from "../../redux/features/updateProfile/updateProfileApi";

const Profile = (props) => {
    const dispatch = useDispatch();
    const { trans } = useLangTranslation();
    const { access_token, user } = useAuth();
    const [logoutLoading, setLogoutLoading] = useState(false);

    const [getPreference] = useLazyGetPreferenceQuery();
    const [recaptcha] = useLazyRecaptchaQuery();
    const [getProfile, {isLoading, isFetching}] = useLazyGetProfileQuery();

    useEffect(() => {
        handleRefresh();
    }, []);

    const handleLogout = async () => {
        const LOGOUT_URL = `${BASE_API_URL_STG}/user/logout`;
        setLogoutLoading(true);
        const response = await queryResponse(LOGOUT_URL, "GET", access_token);
        if (response?.records?.response?.status == "Ok") {
            setLogoutLoading(false);
            resetReduxStore(dispatch);
            getPreference();
            recaptcha();
        }
    };

    const handleRefresh = async () => {
        getPreference();
        try {
            const {data} = await getProfile();
            if (data?.status?.code == 200) {
                const payload = {
                    access_token: access_token,
                    user: data?.records?.data,
                };
                dispatch(login(payload));
            }
        } catch (err) {}
    };

    return (
        <View style={ProfileStyles.wrapper}>
            <FlatList
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => (
                    <View
                        style={[
                            ProfileStyles.profileContainer,
                            ProfileStyles.profileSecondContainer,
                        ]}
                    >
                        {isLoading ? (
                            <Text>Loading...</Text>
                        ) : (
                            <View style={ProfileStyles.profileImageCont}>
                                <ProfilePicture user={user} />
                                <View style={ProfileStyles.profileDesc}>
                                    <View>
                                        <Text style={ProfileStyles.name}>
                                            {user?.name}
                                        </Text>
                                        <Text style={ProfileStyles.email}>
                                            {user?.email}
                                        </Text>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() =>
                                            props.navigation.navigate(EDIT_PROFILE)
                                        }
                                    >
                                        <View style={ProfileStyles.editProfile}>
                                            <CustomSVG 
                                                svgIcon={EditProfileIcon}
                                                width={dpr(16)}
                                                height={dpr(24)}
                                            />
                                            <Text
                                                style={ProfileStyles.editText}
                                            >
                                                {trans("Edit profile")}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                        <View>
                            <View style={ProfileStyles.infoBorder}>
                                <TouchableOpacity
                                    onPress={() =>
                                        props.navigation.navigate(SETTING)
                                    }
                                >
                                    <Text style={ProfileStyles.info}>
                                        {trans("Settings")}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity onPress={handleLogout}>
                                <Text
                                    style={[ProfileStyles.info, gapStyle.pb0]}
                                >
                                    {trans("Logout")}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                onRefresh={handleRefresh}
                refreshing={!isLoading && isFetching}
            />
            <CustomToastModal
                content={trans("Please wait") + "..."}
                isVisible={logoutLoading}
                setIsVisible={setLogoutLoading}
            />
        </View>
    );
};

export default Profile;