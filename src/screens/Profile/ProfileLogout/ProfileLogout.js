import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import React from "react";
import { ProfileStyles } from "../ProfileStyle";
import { Wallet } from "../Profile";
import dpr from "../../../style/dpr";
import UserIcon from "../../../assets/svgs/user.svg";
import { useNavigation } from "@react-navigation/native";
import useLangTranslation from "../../../hooks/useLangTranslation";
import gapStyle from "../../Utilities/CommonStyles/gap.style";
import { LOGIN, SIGN_UP } from "../../../Navigation/screensName";
import CustomSVG from "../../../components/CustomSVG/CustomSVG";
const ProfileLogout = (props) => {
    const navigation = useNavigation();
    const { trans } = useLangTranslation();
    return (
        <>
            <ScrollView howsVerticalScrollIndicator={false}>
                <View style={ProfileStyles.profileContainer}>
                    <View style={style.proImageContainer}>
                        <View style={style.userIcon}>
                            <CustomSVG 
                                svgIcon={UserIcon} 
                                width={dpr(36, "w")} 
                                height={dpr(31)} 
                            />
                        </View>
                        <View>
                            <View style={style.ml15}>
                                <Text style={style.accountText}>
                                    {trans("No Account")}
                                </Text>
                                <View style={style.proImageContainer}>
                                    <TouchableOpacity
                                        onPress={() =>
                                            props.navigation.navigate(SIGN_UP)
                                        }
                                    >
                                        <Text style={style.regisBtn}>
                                            {trans("Register")}
                                        </Text>
                                    </TouchableOpacity>
                                    <Text style={style.orText}>or</Text>
                                    <TouchableOpacity
                                        onPress={() =>
                                            props.navigation.navigate(LOGIN)
                                        }
                                    >
                                        <Text style={style.LoginBtn}>
                                            {trans("Login")}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <Wallet balence={0} />
                    <View style={ProfileStyles.quantityContainer}>
                        <View>
                            <Text style={ProfileStyles.quantityText}>
                                {trans("In Cart")}
                            </Text>
                            <Text style={ProfileStyles.quantity}>0</Text>
                        </View>
                        <View style={ProfileStyles.wishlistCont}>
                            <Text style={ProfileStyles.quantityText}>
                                {trans("Wishlist")}
                            </Text>
                            <Text style={ProfileStyles.quantity}>0</Text>
                        </View>
                        <View>
                            <Text style={ProfileStyles.quantityText}>
                                {trans("All Orders")}
                            </Text>
                            <Text style={ProfileStyles.quantity}>0</Text>
                        </View>
                    </View>

                    <View>
                        <View
                            style={[
                                ProfileStyles.infoBorder,
                                gapStyle.pt24
                            ]}
                        >
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate("track your order")
                                }
                            >
                                <Text style={ProfileStyles.info}>
                                    {trans("Track Order")}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={ProfileStyles.infoBorder}>
                            <TouchableOpacity>
                                <Text style={ProfileStyles.info}>
                                    {trans("Settings")}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={ProfileStyles.infoBorder}>
                            <TouchableOpacity
                                onPress={() =>
                                    props.navigation.navigate(LOGIN)
                                }
                            >
                                <Text style={ProfileStyles.info}>
                                    {trans("Login")}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    );
};

export default ProfileLogout;

const style = StyleSheet.create({
    proImageContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    ml15: { marginLeft: dpr(15) },
    regisBtn: {
        backgroundColor: '#2C2C2C',
        color: '#ffffff',
        paddingHorizontal: dpr(22),
        paddingVertical: dpr(7),
        fontFamily: "Roboto_500Medium",
        fontSize: dpr(12),
        borderRadius: 2,
    },
    LoginBtn: {
        backgroundColor: '#FCCA19',
        color: '#2C2C2C',
        paddingHorizontal: dpr(31),
        paddingVertical: dpr(7),
        fontFamily: "Roboto_500Medium",
        fontSize: dpr(12),
        borderRadius: 2,
    },
    orText: {
        marginHorizontal: dpr(10),
        color: '#898989',
        fontFamily: "Roboto_500Medium",
        fontSize: dpr(14),
    },
    userIcon: {
        backgroundColor: '#F3F3F3',
        width: dpr(94),
        height: dpr(94),
        borderRadius: 50,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginRight: dpr(12, "w"),
    },
    accountText: {
        color: '#898989',
        fontFamily: "DMSans_700Bold",
        fontSize: dpr(18),
        marginBottom: dpr(10),
    },
});
