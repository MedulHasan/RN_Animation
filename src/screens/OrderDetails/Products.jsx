import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import useLangTranslation from "../../hooks/useLangTranslation";
import P2 from "../../components/CustomText/P2";
import H4 from "../../components/CustomText/H4";
import dpr from "../../style/dpr";
import H1 from "../../components/CustomText/H1";
import H3 from "../../components/CustomText/H3";
import P3 from "../../components/CustomText/P3";
import H6 from "../../components/CustomText/H6";

const Products = () => {
    const {colors} = useTheme();
    const {trans} = useLangTranslation();

    const styles = Styles(colors);
    return (
        <View style={styles.cont}>
            <H3 style={styles.header}>{trans('Products')}</H3>
            <View style={styles.products}>
                {
                    [1, 2, 1, 3].map((item, i) => (
                        <View style={styles.product} key={i}>
                            <P3 style={styles.name}>
                                Big Spring Shirt For Boys & Girls (age 5-10), Size: M, Color: Pink
                            </P3>
                            <P3 style={styles.qty}>x2</P3>
                            <H6 style={styles.price}>$444.00</H6>
                        </View>
                    ))
                }
            </View>
        </View>
    );
};

export default Products;

const Styles = (colors) => {
    const productWidthCont = dpr('wf') - dpr(68)
    const productWidth = productWidthCont - dpr(132) - dpr(10);
    const qtyWidth = dpr(42) - dpr(5);
    const priceWidth = dpr(90) - dpr(5);
    return StyleSheet.create({
        cont: {
            backgroundColor: colors.textSecondary,
            marginTop: dpr(8),
            borderRadius: 8,
        },
        header: {
            borderBottomWidth: 1,
            borderColor: colors.borderSecondary,
            paddingVertical: dpr(7),
            paddingHorizontal: dpr(14)
        },
        products: {
            marginTop: dpr(12),
            marginBottom: dpr(14),
            flexDirection: 'column',
            gap: dpr(10),
            paddingHorizontal: dpr(14)
        },
        product: {
            width: productWidthCont,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
        },
        name: {
            width: productWidth,
            textAlign: 'left',
        },
        qty: {
            width: qtyWidth,
            textAlign: 'center',
        },
        price: {
            width: priceWidth,
            textAlign: 'right',
        }
    })
};
