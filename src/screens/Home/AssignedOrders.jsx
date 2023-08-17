import { FlatList, Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import useLangTranslation from "../../hooks/useLangTranslation";
import dpr from "../../style/dpr";
import H4 from "../../components/CustomText/H4";
import P2 from "../../components/CustomText/P2";
import CustomSVG from "../../components/CustomSVG/CustomSVG";
import rightIcon from "../../assets/svgs/chevron-right.svg"
import AssignedOrder from "./AssignedOrder";
import { ORDER_LIST } from "../../Navigation/screensName";

const AssignedOrders = () => {
    const {colors} = useTheme();
    const {trans} = useLangTranslation();
    const navigation = useNavigation();

    const handleSeeAll = () => {
        navigation.navigate(ORDER_LIST)
    }

    const styles = Styles(colors);
    return (
        <View style={styles.cont}>
            <View style={styles.header}>
                <H4>{trans("Assigned Orders")}</H4>
                <Pressable style={styles.seeAll} onPress={handleSeeAll}>
                    <P2>{trans("See All")}</P2>
                    <CustomSVG 
                        svgIcon={rightIcon}
                        isRtl={1}
                        height={10}
                        width={10}
                    />
                </Pressable>
            </View>
            <FlatList
                data={[1, 2, 3, 4, 5]}
                keyExtractor={(_, i) => i}
                renderItem={({item}) => <AssignedOrder item={item} />}
            />
        </View>
    );
};

export default AssignedOrders;

const Styles = () => StyleSheet.create({
    cont: {
        marginHorizontal: dpr(20),
        marginTop: dpr(18)
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: dpr(10)
    },
    seeAll: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: dpr(6)
    }
});
