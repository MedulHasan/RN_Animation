import { Dimensions, I18nManager, StyleSheet } from "react-native";
import dpr from "../../../style/dpr";
const { width } = Dimensions.get("screen");

export const EditProfileStyle = StyleSheet.create({
    keyboardAvoidingViewFlex: {
        flex: 1,
    },
    profileDisplay: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: dpr(22),
    },
    title: {
        fontFamily: "DMSans_700Bold",
        fontSize: dpr(16),
        color: '#2C2C2C',
    },
    image: {
        height: dpr(85),
        width: dpr(85),
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#000',
        marginRight: dpr(22),
    },
    changephotoCont: {},
    changePhoto: {
        borderRadius: 4,
        width: dpr(160),
        paddingVertical: dpr(12),
        paddingHorizontal: dpr(20),
        backgroundColor: '#2C2C2C',
    },
    changePhotoText: {
        fontFamily: "DMSans_500Medium",
        color: '#FFFFFF',
        fontSize: dpr(15),
        textAlign: 'center'
    },
    remove: {
        width: dpr(153, "w"),
        textAlign: "center",
        color: '#898989',
        fontFamily: "DMSans_500Medium",
        fontSize: dpr(15),
        marginTop: dpr(12),
    },
    personalInfoCont: {
        marginTop: dpr(40),
    },
    nameCont: {
        flexDirection: "row",
    },
    nameInputCont: {
        width: (width - dpr(55)) / 2,
    },
    nameInput: {
        width: (width - dpr(55)) / 2,
        height: dpr(42),
    },
    label: {
        fontFamily: "DMSans_500Medium",
        fontSize: dpr(15),
        color: '#2C2C2C',
        marginBottom: dpr(9),
        marginTop: dpr(18),
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#DFDFDF',
        height: dpr(42),
        borderRadius: 2,
        fontSize: dpr(14),
        color: '#898989',
        fontFamily: "Roboto_500Medium",
        paddingHorizontal: 10,
        textAlign: I18nManager.isRTL ? 'right' : 'left'
    },
    email: {
        backgroundColor: '#F3F3F3'
    },
    borderColor: (error) => ({
        borderColor: error ? '#E43147' : '#DFDFDF',
    }),
    gendeErrorCont: {
        flexDirection: "row",
        alignItems: "center",
    },
    radioCont: {
        flexDirection: "row",
    },
    radioBtnColor: (gender) => {
        return gender ? '#2DADD6' : '#2C2C2C'
    },
    radioBtnColorFemale: (gender) => {
        return gender ? '#E35C96' : '#2C2C2C'
    },
    radioBtnContBorderColor: (error, gender) => ({
        borderColor: error ? '#E43147' : gender ? '#2DADD6' : '#DFDFDF',
    }),
    radioBtnContBorderColorFemale: (error, gender) => ({
        borderColor: error ? '#E43147' : gender ? '#E35C96' : '#DFDFDF',
    }),
    radioBtnBorderColor: (error, gender) => {
        return error ? '#E43147' : gender ? '#2DADD6' : '#DFDFDF'
    },
    radioBtnBorderColorFemale: (error, gender) => {
        return error ? '#E43147' : gender ? '#E35C96' : '#DFDFDF'
    },
    radioButton: {
        borderWidth: 1,
        borderRadius: 4,
        paddingLeft: dpr(13),
        paddingRight: dpr(24),
        borderColor: '#DFDFDF',
        marginLeft: 0,
        height: dpr(42),
    },
    radioText: {
        fontFamily: "Roboto_500Medium",
        fontSize: dpr(14),
        marginLeft: 10,
        color: '#898989',
    },
    phone: {
        borderWidth: 1,
        borderColor: '#DFDFDF',
        borderRadius: 2,
    },
    changeInfo: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.6,
        elevation: 24,
        backgroundColor: '#fff',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: dpr(12),
        width: width,
        zIndex: -999,
    },
    cancel: {
        width: (width - dpr(20, "w") - dpr(30, "w")) / 2,
        textAlign: "center",
        textAlignVertical: "center",
        fontFamily: "DMSans_700Bold",
        color: '#9B9B9B',
        fontSize: dpr(16),
    },
    errorCont: {
        backgroundColor: '#F9E8E8',
        flexDirection: "row",
        paddingHorizontal: dpr(20),
        paddingVertical: dpr(14),
    },
    errorText: {
        fontFamily: "DMSans_500Medium",
        color: '#C8191C',
        fontSize: dpr(14),
        marginLeft: dpr(8, "w"),
    },
    dropdown1BtnStyle: {
        width: (width - dpr(20) * 2) / 3.26,
        height: dpr(42),
        backgroundColor: '#FFF',
        borderRadius: dpr(4),
        borderWidth: 1,
        borderColor: '#DFDFDF',
    },
    monthSelect: {
        marginHorizontal: dpr(15)
    },
    textContainer: {
        paddingLeft: 0,
        paddingBottom: 0,
        paddingTop: 0,
        height: dpr(42),
        fontSize: dpr(13),
        backgroundColor: '#FFF',
    },
    textInputStyle: {
        borderColor: '#DFDFDF',
        borderLeftWidth: 1,
        paddingLeft: dpr(10),
        fontSize: dpr(14),
        height: dpr(26),
        paddingBottom: 0,
        paddingTop: 0,
        color: '#898989',
        fontFamily: "Roboto_500Medium",
    },
    codeText: {
        fontSize: dpr(13),
        color: '#898989',
        fontFamily: "Roboto_500Medium",
    },
    phoneInputContainer: {
        height: dpr(42),
    }
});
