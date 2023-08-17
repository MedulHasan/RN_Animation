import { StyleSheet, Text, Pressable } from "react-native";
import React, { useState, useRef } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import CalenderIcon from "../../../assets/svgs/calender.svg"
import CustomSVG from "../../CustomSVG/CustomSVG";
import { useTheme } from "@react-navigation/native";
import dpr from "../../../style/dpr";
import { processStyleProps } from "../../../helper/processStyleProps";

const btnInitWidth = dpr('wf') - dpr(40)

const DateInput = ({date, setDate, onPress, style}) => {
    const {colors} = useTheme();

    const dateRef = useRef(new Date());
    const [btnWidth, setBtnWidth] = useState(btnInitWidth);
    const [show, setShow] = useState(false);

    const handlePress = () => {
        setShow(true);
        typeof onPress == 'function' && onPress();
    };

    const handleChange = (event, selectedDate) => {
        if(event?.type == 'set') {
            const date = new Date(selectedDate);
            dateRef.current = date;
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            const formattedDate = `${day}-${month}-${year}`;
            setDate(formattedDate);
        }
        setShow(false);
    }

    const processStlProp = processStyleProps(style);
    const styles = Styles(colors, btnWidth);
    return (
        <>
            <Pressable 
                style={[styles.cont, ...processStlProp]} 
                onPress={handlePress}
                onLayout={(e) => {
                    setBtnWidth(e.nativeEvent.layout.width)
                }}
            >
                <CustomSVG
                    svgIcon={CalenderIcon} 
                    height={dpr(18)} 
                    width={dpr(18)} 
                />
                <Text
                    adjustsFontSizeToFit={true}
                    numberOfLines={1} 
                    style={styles.text}
                >
                    {date}
                </Text>
            </Pressable>
            {show && <DateTimePicker 
                testID="dateTimePicker"
                value={dateRef.current}
                mode="date"
                onChange={handleChange}
            />}
        </>
    );
};

export default DateInput;

const Styles = (colors, btnWidth) => StyleSheet.create({
    cont: {
        flexDirection: 'row',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: dpr(5),
        borderWidth: 1,
        borderColor: colors.borerPrimary,
        paddingHorizontal: dpr(8),
        paddingVertical :dpr(10),
        borderRadius: 6,
        backgroundColor: colors.textSecondary,
        width: btnInitWidth
    },
    text: {
        fontSize: dpr(15),
        lineHeight: dpr(22),
        fontFamily: 'DMSans_500Medium',
        color: colors.textPrimary,
        maxWidth: btnWidth - dpr(40),
    }
});
