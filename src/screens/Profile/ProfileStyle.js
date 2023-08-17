import { StyleSheet } from "react-native";
import dpr from "../../style/dpr";

export const ProfileStyles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#fff',
    },
    profileContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: dpr(20),
        paddingVertical: dpr(30),
        marginBottom: dpr(60),
    },
    profileSecondContainer: {
        paddingTop: dpr(20),
    },
    profileDesc: {
        width: dpr('wf') - dpr(135)
    },
    hrLine: {
        borderBottomWidth: 1,
        borderColor: '#DFDFDF',
    },
    profileImageCont: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: '#F3F3F3',
        paddingHorizontal: dpr(16),
        paddingVertical: dpr(22),
        borderRadius: dpr(12),
    },
    image: {
        height: dpr(80),
        width: dpr(80),
        borderRadius: 50,
        marginRight: dpr(15),
        backgroundColor: '#F0F0E4',
    },
    name: {
        fontFamily: "DMSans_700Bold",
        fontSize: dpr(18),
        color: '#2C2C2C',
    },
    email: {
        marginTop: dpr(2),
        fontFamily: "Roboto_400Regular",
        fontSize: dpr(12),
        color: '#2C2C2C',
    },
    editProfile: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: dpr(12),
    },
    editText: {
        fontFamily: "Roboto_500Medium",
        fontSize: dpr(14),
        color: '#2C2C2C',
        marginLeft: dpr(5),
    },
    profileInfoContainer: {
        flex: 1,
        flexDirection: 'row',
        gap: dpr(10),
        justifyContent: 'space-between',
        marginVertical: dpr(10)
    },
    profileInfoCard: (bgcolor) => ({
        flex: 1,
        backgroundColor: bgcolor ? bgcolor : '#FCCA19',
        borderRadius: dpr(6),
        padding: dpr(10),
    }),
    profileInfoCardHeader: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: dpr(16),
    },
    profileInfoCardHeaderText: (theme) => ({
        fontFamily: "DMSans_700Bold",
        color: theme === 'light'? '#2C2C2C' : '#FFFFFF',
        fontSize: dpr(20),
    }),
    profileInfoCardBody: (theme) => ({
        fontFamily: "Roboto_500Medium",
        fontSize: dpr(12),
       color: theme === 'light'? '#2C2C2C' : '#FFFFFF'
    }),
    walletContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: '#2C2C2C',
        borderRadius: 6,
        padding: dpr(18),
        marginVertical: dpr(30),
    },
    walletText: {
        fontFamily: "DMSans_500Medium",
        color: '#DFDFDF',
        fontSize: dpr(14),
        marginBottom: dpr(8),
    },
    wallet: {
        fontFamily: "DMSans_700Bold",
        color: '#DFDFDF',
        fontSize: dpr(20),
    },
    amount: {
        fontFamily: "DMSans_700Bold",
        color: '#FCCA19',
        fontSize: dpr(20),
        textAlign: "right",
    },
    quantityContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingHorizontal: dpr(12),
    },
    quantityText: {
        fontFamily: "Roboto_500Medium",
        fontSize: dpr(18),
        color: '#898989',
    },
    quantity: {
        fontFamily: "DMSans_700Bold",
        fontSize: dpr(18),
        color: '#2C2C2C',
    },
    wishlistCont: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#DFDFDF',
        paddingHorizontal: dpr(23),
    },
    info: {
        fontFamily: "DMSans_500Medium",
        fontSize: dpr(18),
        color: '#898989',
        paddingVertical: dpr(18),
    },
    infoBorder: {
        borderBottomWidth: 1,
        borderColor: '#DFDFDF',
    },
});
