import { StyleSheet, View, Pressable } from "react-native";
import React, { useState } from "react";
import DateInput from "../../components/CustomInput/DateInput/DateInput";
import FilterAltIcon from "../../assets/svgs/Filter_alt.svg"
import CustomSVG from "../../components/CustomSVG/CustomSVG";
import { useTheme } from "@react-navigation/native";
import dpr from "../../style/dpr";

const OrderFilterByDate = () => {
    const {colors} = useTheme()
    const [startDate, setStartDate] = useState('dd-mm-yyyy');
    const [endDate, setEndDate] = useState('dd-mm-yyyy');

    const styles = Styles(colors)
    return (
        <View style={styles.cont}>
            <DateInput 
                date={startDate}
                setDate={setStartDate}
                style={styles.dateInput}
            />
            <DateInput 
                date={endDate}
                setDate={setEndDate}
                style={styles.dateInput}
            />
            <Pressable style={styles.btnCont}>
                <CustomSVG svgIcon={FilterAltIcon} />
            </Pressable>
        </View>
    );
};

export default OrderFilterByDate;

const Styles = (colors) => StyleSheet.create({
    cont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: dpr(10),
        marginTop: dpr(16),
        marginHorizontal: dpr(20)
    },
    dateInput: {
        width: (dpr('wf') - dpr(110)) / 2,
    },
    btnCont: {
        backgroundColor: colors.bgPrimary,
        padding: dpr(10),
        borderRadius: 6,
    }
});
