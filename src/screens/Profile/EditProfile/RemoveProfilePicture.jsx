import { Pressable, StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import dpr from "../../../style/dpr";
import { BASE_API_URL_STG } from '@env';
import useAuth from "../../../hooks/useAuth";
import { mutationResponse } from "../../../redux/features/util/processResponse";
import { useDispatch } from "react-redux";
import CustomToastModal from "../../../components/CustomToastModal/CustomToastModal";
import useCustomToast from "../../../hooks/useCustomToast";
import useLangTranslation from "../../../hooks/useLangTranslation";
import { useNavigation } from "@react-navigation/core";
import { login } from "../../../redux/features/auth/signin/signinSlice";
import { useLazyGetProfileQuery } from "../../../redux/features/updateProfile/updateProfileApi";

const RemoveProfilePicture = () => {
    const removeUrl = `${BASE_API_URL_STG}/user/remove-image`;
    const {access_token} = useAuth();
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { trans } = useLangTranslation();
    const showToast = useCustomToast();
    const [wait, setWait] = useState(false);

    const [getProfile] = useLazyGetProfileQuery();

    const handleRemove = async () => {
        setWait(true)
        try {
            const response = await mutationResponse(
                removeUrl,
                "POST",
                {},
                access_token
            );
            const {code, message} = response?.status || {};
            setWait(false);
            if(code == 200) {
                showToast({
                    text1: trans(message),
                    type: "common",
                    position: "bottom",
                    props: { variant: "success" },
                });
                navigation.goBack();
            }
            const {data} = await getProfile();
            if(data?.status?.code == 200) {
                const payload = {
                    access_token: access_token,
                    user: data?.records?.data,
                }
                dispatch(login(payload))
            }
        } catch (error) {
            setWait(false)
        }
    }
  return (
    <Pressable onPress={handleRemove}>
      <Text style={styles.text}>Remove</Text>
      <CustomToastModal
            content={trans("Please wait")+"..."}
            isVisible={wait}
            setIsVisible={setWait}
        />
    </Pressable>
  );
};

export default RemoveProfilePicture;

const styles = StyleSheet.create({
    
    text: {
        color: '#898989',
        fontFamily: 'DMSans_500Medium',
        fontSize: dpr(16),
        lineHeight: dpr(20),
        textAlign: 'center',
        marginTop: dpr(12)
    }
});
