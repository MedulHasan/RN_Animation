import React, { useEffect, useState } from "react";
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Pressable,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { RadioButton } from "react-native-radio-buttons-group";
import { useDispatch } from "react-redux";
import ErrorIcon from "../../../assets/svgs/errorIcon.svg";
import useAuth from "../../../hooks/useAuth";
import { login } from "../../../redux/features/auth/signin/signinSlice";
import dpr from "../../../style/dpr";
import { ProfileStyles } from "../ProfileStyle";
import {
    appendFormData,
    confirmGender,
    convertMonth,
    editFormValidation,
    dateCount,
    monthCount,
    yearCount,
} from "./extraFunction";
import { EditProfileStyle } from "./StyleEditProfile";
import useCustomToast from "../../../hooks/useCustomToast";
import useUploadSingleFile from "../../../hooks/useUploadSingleFile";
import SelectItemBottomSheet from "../../../components/SelectItemBottomSheet/SelectItemBottomSheet";
import { useRef } from "react";
import SelectInput from "../../../components/CustomInput/SelectInput/SelectInput";
import DownArrowFill from "../../../assets/svgs/downArrowFill.svg";
import useLangTranslation from "../../../hooks/useLangTranslation";
import usePreferences from "../../../hooks/usePreferences";
import gapStyle from "../../Utilities/CommonStyles/gap.style";
import RemoveProfilePicture from "./RemoveProfilePicture";
import CustomSpinner from "../../../components/CustomLoader/CustomSpinner";
import { MY_ACCOUNT } from "../../../Navigation/screensName";
import CustomSVG from "../../../components/CustomSVG/CustomSVG";
import { useLazyGetProfileQuery, useUpdateProfileMutation } from "../../../redux/features/updateProfile/updateProfileApi";

const EditProfile = (props) => {
    const { trans } = useLangTranslation();
    const dayRef = useRef(null);
    const monthRef = useRef(null);
    const yearRef = useRef(null);
    const {preference: {date_sepa} = {}} = usePreferences();
    const dispatch = useDispatch();
    const { access_token, user } = useAuth();
    const showToast = useCustomToast();
    const { name, email, gender, phone, address, birthday, isImageRemoval  } = user;
    const nameArray = name.split(" ");
    const firstname = nameArray.shift();
    const dateSeparator = birthday?.includes(date_sepa) ? date_sepa : "-";
    const dateOfBirth = birthday?.split(dateSeparator);
    const monthName = dateOfBirth && convertMonth(dateOfBirth[1]);
    const userData = {
        firstName: firstname,
        lastName: nameArray.join(" "),
        email: email,
        gender: gender,
        phone: phone ?? "",
        address: address ?? "",
        day: dateOfBirth ? dateOfBirth[2] : "",
        month: monthName ?? "",
        year: dateOfBirth ? dateOfBirth[0] : "",
        attachment: "",
    };
    const initialGender = { male: "", female: "" };
    if (gender === "Male") {
        initialGender.male = gender;
    } else {
        initialGender.female = gender;
    }

    const [genderObj, setGender] = useState(initialGender);
    const [error, setError] = useState({});
    const [updateData, setUpdateData] = useState(userData);
    const [image, setImage] = useState(null);
    const uploadImage = useUploadSingleFile();

    const [loadBtmSheet, setLoadBtmSheet] = useState(false);

    const [getProfile] = useLazyGetProfileQuery();
    const [updateProfile, {isLoading}] = useUpdateProfileMutation();


    useEffect(() => {
        setTimeout(() => {
            setLoadBtmSheet(true);
        }, 0)
    }, []);

    const handleFileUpload = async () => {
        const result = await uploadImage();
        setImage(result?.uri);
        setUpdateData({
            ...updateData,
            attachment: result,
        });
    };

    const handleGender = (name, value) => {
        confirmGender(value, setGender);
        setError({
            ...error,
            gender: false,
        });
        setUpdateData({
            ...updateData,
            [name]: value,
        });
    };

    const handleUpdateData = (name, text) => {
        setUpdateData({
            ...updateData,
            [name]: text,
        });
    };

    const handleUpdateDate = (data, name) => {
        setUpdateData({
            ...updateData,
            [name]: data.name,
        });
    }

    const handleProfileUpdate = async () => {
        const err = editFormValidation(updateData, trans);
        if (Object.keys(err).length > 0) {
            setError(err);
        } else {
            setError({});
            const formData = appendFormData(updateData);
            const {data} = await updateProfile(formData);
            const { status, records } = data || {};
            let isError =
                !Array.isArray(records) &&
                typeof records == "object" &&
                Object.keys(records);
            if (status?.code == 200) {
                showToast({
                    text1: trans(status?.message),
                    type: "common",
                    position: "bottom",
                    props: { variant: "success" },
                });
                const {data} = await getProfile();;
                dispatch(
                    login({
                        access_token: access_token,
                        user: data?.records?.data,
                    })
                );
                setUpdateData({});
                setGender({});
                props.navigation.navigate(MY_ACCOUNT);
            } else {
                showToast({
                    text1: trans(records[isError][0]),
                    type: "common",
                    position: "bottom",
                    props: { variant: "error" },
                });
            }
        }
    };

    return (
        <>
            <KeyboardAvoidingView
                style={EditProfileStyle.keyboardAvoidingViewFlex}
                behavior={Platform.OS === "ios" ? "padding" : ""}
            >
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : ""}
                    style={EditProfileStyle.keyboardAvoidingViewFlex}
                >
                    <ScrollView>
                        <View
                            style={[ProfileStyles.profileContainer,gapStyle.mb0]}
                        >
                            <Text style={EditProfileStyle.title}>
                                {trans("Profile Display")}
                            </Text>
                            <View style={EditProfileStyle.profileDisplay}>
                                {(image || user?.image || user?.picture_url) ? <Image
                                    source={{
                                        uri:
                                            image ||
                                            user?.image ||
                                            user?.picture_url,
                                    }}
                                    style={EditProfileStyle.image}
                                />: null}
                                <View>
                                    <View
                                        style={EditProfileStyle.changephotoCont}
                                    >
                                        <TouchableOpacity
                                            style={EditProfileStyle.changePhoto}
                                            onPress={handleFileUpload}
                                        >
                                            <Text
                                                style={
                                                    EditProfileStyle.changePhotoText
                                                }
                                            >
                                                {trans("Change Photo")}
                                            </Text>
                                        </TouchableOpacity>
                                        {isImageRemoval == 1 && <RemoveProfilePicture />}
                                    </View>
                                </View>
                            </View>
                            <View style={EditProfileStyle.personalInfoCont}>
                                <Text style={EditProfileStyle.title}>
                                    {trans("Personal Information")}
                                </Text>
                                <View style={EditProfileStyle.nameCont}>
                                    <View
                                        style={EditProfileStyle.nameInputCont}
                                    >
                                        <Text style={EditProfileStyle.label}>
                                            {trans("First Name")} *
                                        </Text>
                                        <TextInput
                                            value={updateData.firstName}
                                            placeholder={trans("First Name")}
                                            style={[
                                                EditProfileStyle.textInput,
                                                EditProfileStyle.borderColor(error.name)
                                            ]}
                                            onChangeText={(text) =>
                                                handleUpdateData(
                                                    "firstName",
                                                    text
                                                )
                                            }
                                        />
                                    </View>
                                    <View
                                        style={[
                                            EditProfileStyle.nameInputCont,
                                            gapStyle.ml15,
                                        ]}
                                    >
                                        <Text style={EditProfileStyle.label}>
                                            {trans("Last Name")}
                                        </Text>
                                        <TextInput
                                            value={updateData.lastName}
                                            placeholder={trans("Last Name")}
                                            style={EditProfileStyle.textInput}
                                            onChangeText={(text) =>
                                                handleUpdateData(
                                                    "lastName",
                                                    text
                                                )
                                            }
                                        />
                                    </View>
                                </View>
                                <View>
                                    <View
                                        style={EditProfileStyle.gendeErrorCont}
                                    >
                                        <Text style={EditProfileStyle.label}>
                                            {trans("Gender")} *
                                        </Text>
                                    </View>
                                    <View style={EditProfileStyle.radioCont}>
                                        <RadioButton
                                            id='Male'
                                            label={trans("Male")}
                                            size={14}
                                            selected={
                                                genderObj.male ? true : false
                                            }
                                            color={
                                                EditProfileStyle.radioBtnColor(genderObj.male)
                                            }
                                            containerStyle={[
                                                EditProfileStyle.radioButton,
                                                EditProfileStyle.radioBtnContBorderColor(error.gender, genderObj.male)
                                            ]}
                                            borderColor={
                                                EditProfileStyle.radioBtnBorderColor
                                                (error.gender, genderObj.male)
                                            }
                                            labelStyle={
                                                EditProfileStyle.radioText
                                            }
                                            onPress={(value) =>
                                                handleGender("gender", value)
                                            }
                                        />
                                        <RadioButton
                                            id='Female'
                                            label={trans("Female")}
                                            size={14}
                                            selected={
                                                genderObj.female ? true : false
                                            }
                                            color={
                                                EditProfileStyle.radioBtnColorFemale(genderObj.female)
                                            }
                                            containerStyle={[
                                                EditProfileStyle.radioButton,
                                                EditProfileStyle.radioBtnContBorderColorFemale(error.gender, genderObj.female)
                                            ]}
                                            borderColor={
                                                EditProfileStyle.radioBtnBorderColorFemale
                                                (error.gender, genderObj.female)
                                            }
                                            labelStyle={
                                                EditProfileStyle.radioText
                                            }
                                            onPress={(value) =>
                                                handleGender("gender", value)
                                            }
                                        />
                                    </View>
                                </View>
                                <View>
                                    <Text style={EditProfileStyle.label}>
                                        {trans("Date of Birth")}
                                    </Text>
                                    <View style={EditProfileStyle.radioCont}>
                                        <SelectInput
                                            style={
                                                EditProfileStyle.dropdown1BtnStyle
                                            }
                                            placeholder={trans("Day")}
                                            onPress={() =>
                                                dayRef.current?.snapToIndex(0)
                                            }
                                            title={updateData.day}
                                            icon={
                                                <CustomSVG 
                                                    svgIcon={DownArrowFill}
                                                    fill={'#2C2C2C'}
                                                />
                                            }
                                        />
                                        <View style={EditProfileStyle.monthSelect}>
                                            <SelectInput
                                                style={
                                                    EditProfileStyle.dropdown1BtnStyle
                                                }
                                                placeholder={trans("Month")}
                                                onPress={() =>
                                                    monthRef.current?.snapToIndex(
                                                        0
                                                    )
                                                }
                                                title={updateData.month}
                                                icon={
                                                    <CustomSVG 
                                                        svgIcon={DownArrowFill}
                                                        fill={'#2C2C2C'}
                                                    />
                                                }
                                            />
                                        </View>
                                        <SelectInput
                                            style={
                                                EditProfileStyle.dropdown1BtnStyle
                                            }
                                            placeholder={trans("Year")}
                                            onPress={() =>
                                                yearRef.current?.snapToIndex(0)
                                            }
                                            title={updateData.year}
                                            icon={
                                                <CustomSVG 
                                                    svgIcon={DownArrowFill}
                                                    fill={'#2C2C2C'}
                                                />
                                            }
                                        />
                                    </View>
                                </View>
                                <View>
                                    <Text style={EditProfileStyle.label}>
                                        {trans("Email Address")} *
                                    </Text>
                                    <TextInput
                                        editable={false}
                                        value={user.email}
                                        placeholder={trans("Email Address")}
                                        style={[
                                            EditProfileStyle.textInput,
                                            EditProfileStyle.email
                                        ]}
                                    />
                                </View>
                                <View>
                                    <Text style={EditProfileStyle.label}>
                                        {trans("Phone Number")}
                                    </Text>
                                    <View
                                        style={[
                                            EditProfileStyle.phone,
                                            EditProfileStyle.borderColor(error?.phone)
                                        ]}
                                    >
                                        <PhoneInput
                                            value={updateData.phone}
                                            onChangeText={(text) =>
                                                handleUpdateData("phone", text)
                                            }
                                            defaultCode='BD'
                                            containerStyle={EditProfileStyle.phoneInputContainer}
                                            textContainerStyle={EditProfileStyle.textContainer}
                                            textInputStyle={EditProfileStyle.textInputStyle}
                                            codeTextStyle={EditProfileStyle.codeText}
                                        />
                                    </View>
                                </View>
                                <View>
                                    <Text style={EditProfileStyle.label}>
                                        {trans("Address")}
                                    </Text>
                                    <TextInput
                                        value={updateData.address}
                                        placeholder={trans("Address")}
                                        style={EditProfileStyle.textInput}
                                        onChangeText={(text) =>
                                            handleUpdateData("address", text)
                                        }
                                    />
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
                <View>
                    <View>
                        {error.name || error.gender || error.phone ? (
                            <View style={EditProfileStyle.errorCont}>
                                <CustomSVG svgIcon={ErrorIcon} />
                                <Text style={EditProfileStyle.errorText}>
                                    {trans(error?.phone) ||
                                        trans("Please fill in all the required fields" +"*")}
                                </Text>
                            </View>
                        ) : null}
                    </View>
                    <View style={EditProfileStyle.changeInfo}>
                        <TouchableOpacity
                            onPress={() => props.navigation.goBack()}
                        >
                            <Text style={EditProfileStyle.cancel}>
                                {trans("Cancel")}
                            </Text>
                        </TouchableOpacity>
                        <Pressable
                            onPress={() =>
                                isLoading ? {} : handleProfileUpdate()
                            }
                        >
                            <View >
                                {isLoading ? (
                                    <CustomSpinner
                                        filePath={require("../../../assets/lottie/loader2.json")}
                                        size={{
                                            width: dpr(60),
                                            height: dpr(50),
                                        }}
                                    />
                                ) : (
                                    <Text
                                        
                                    >
                                        {trans("Save Changes")}
                                    </Text>
                                )}
                            </View>
                        </Pressable>
                    </View>
                </View>
            </KeyboardAvoidingView>
            {loadBtmSheet && (
                <>
                    <SelectItemBottomSheet
                        snapPoint={[300]}
                        selectRef={dayRef}
                        data={dateCount}
                        name={"day"}
                        onPress={handleUpdateDate}
                    />
                    <SelectItemBottomSheet
                        snapPoint={[300]}
                        selectRef={monthRef}
                        data={monthCount}
                        name={"month"}
                        onPress={handleUpdateDate}
                    />
                    <SelectItemBottomSheet
                        snapPoint={[300]}
                        selectRef={yearRef}
                        data={yearCount}
                        name={"year"}
                        onPress={handleUpdateDate}
                    />
                </>
            )}
        </>
    );
};

export default EditProfile;
