import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { useTheme } from "@react-navigation/native";
import useLangTranslation from "../../hooks/useLangTranslation";
import dpr from "../../style/dpr";
import H3 from "../../components/CustomText/H3";
import H4 from "../../components/CustomText/H4";

const suggestAmounts = [50, 100, 200, 500, 1000, 2000, 5000]

const WithdrawAmount = () => {
    const {colors} = useTheme();
    const {trans} = useLangTranslation();

    const [suggestAmount, setSuggestAmount] = useState(null);

    const handleSelectAmount = (amount) => {
        setSuggestAmount(amount)
    }

    const styles = Styles(colors);
    return (
        <View style={styles.root}>
            <View style={styles.cont}>
                <H3 style={styles.title}>{trans("Withdraw Amount")}</H3>
                <TextInput
                    keyboardType="number-pad"
                    style={styles.input}
                    placeholder="$ 0.00"
                    autoFocus={false}
                />
                <View style={styles.suggestAmount}>
                    {
                        suggestAmounts.map((amount, index) => (
                            <Pressable 
                                onPress={() =>handleSelectAmount(amount)}
                                key={index}
                            >
                                <Text
                                    style={styles.suggestAmountText(suggestAmount, amount)}
                                >
                                    {amount}
                                </Text>
                            </Pressable>
                        ))
                    }
                </View>
            </View>
            <Pressable style={styles.btn}>
                <H4>{trans("Send Withdraw Request")}</H4>
            </Pressable>
        </View>
    );
};

export default WithdrawAmount;

const Styles = (colors) => StyleSheet.create({
    root: {
        flex: 1
    },
    cont: {
        backgroundColor: colors.textSecondary,
        marginTop: dpr(10),
        alignItems: 'center',
        padding: dpr(24),
        borderRadius: 8
    },
    title: {
        fontFamily: 'DMSans_500Medium',
    },
    input: {
        borderColor: colors.borerPrimary,
        borderBottomWidth: 1,
        width: dpr('wf') - dpr(140),
        textAlign: 'center',
        fontSize: dpr(24),
        lineHeight: dpr(30),
        marginBottom: dpr(20)
    },
    suggestAmount: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: dpr(8)
    },
    suggestAmountText: (suggestAmount, amount) => ({
        color: colors.textTertiary,
        fontFamily: 'DMSans_500Medium',
        fontSize: dpr(12),
        lineHeight: dpr(18),
        backgroundColor: suggestAmount == amount 
            ?  colors.bgPrimary 
            : colors.textSecondary,
        paddingHorizontal: dpr(18),
        paddingVertical: dpr(8),
        borderRadius: 20,
        borderColor: suggestAmount == amount 
            ? colors.bgPrimary 
            : colors.borerPrimary,
        borderWidth: 1,
    }),
    btn: {
        backgroundColor: colors.bgPrimary,
        paddingVertical: dpr(15),
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        left: dpr(0),
        right: dpr(0),
        bottom: dpr(20),
    },
});
