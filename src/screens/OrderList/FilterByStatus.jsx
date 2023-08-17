import { Pressable, StyleSheet, View, FlatList } from "react-native";
import React, { useState } from "react";
import { useTheme } from "@react-navigation/native";
import dpr from "../../style/dpr";
import useLangTranslation from "../../hooks/useLangTranslation";
import H5 from "../../components/CustomText/H5";

const status = ['Assigned', 'Out for Delivery', 'Paused', 'Delivered']

const FilterByStatus = () => {
    const {colors} = useTheme();
    const {trans} = useLangTranslation();
    
    const [focusedStatus, setFocusedStatus] = useState("Assigned");

    const handleChangeStatus = (status) => {
        setFocusedStatus(status)
    }

    const styles = Styles(colors);
    return (
        <View style={styles.cont}>
            <FlatList
                data={status}
                keyExtractor={item => item}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => (
                    <Pressable 
                        style={styles.statusBtnFocused(item, focusedStatus, index)} 
                        key={item}
                        onPress={() => handleChangeStatus(item)}
                    >
                        <H5>{trans(item)}</H5>
                    </Pressable>
                )}
            />
        </View>
    );
};

export default FilterByStatus;

const Styles = (colors) => StyleSheet.create({
    cont: {
        margin: dpr(20),
    },
    statusBtnFocused: (item, focusedStatus, index) => ({
        backgroundColor: item == focusedStatus 
            ? colors.bgPrimary 
            : colors.textSecondary,
        paddingHorizontal: dpr(16),
        paddingVertical: dpr(7),
        borderRadius: 40,
        marginRight: status.length - 1 == index ? 0 : dpr(8),
        borderWidth: 1,
        borderColor: item == focusedStatus ? colors.bgPrimary : colors.borerPrimary
    }),
});
