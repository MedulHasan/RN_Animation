import {StyleSheet} from "react-native"
import dpr from "../../../style/dpr"

export default gapStyle = StyleSheet.create({
    //margin top
    mt15: {
        marginTop: dpr(15)
    },
    mt19: {
        marginTop: dpr(19)
    },
    mt20: {
        marginTop: dpr(20)
    },
    mt25: {
        marginTop: dpr(25)
    },

    //padding top
    pt24: {
        paddingTop: dpr(24)
    },

    //margin right
    mr25: {
        marginRight: dpr(25)
    },

    //margin bottom
    mb0: {
        marginBottom: 0
    },
    mb15: {
        marginBottom: dpr(15)
    },
    mb20: {
        marginBottom: dpr(20)
    },
    mb22: {
        marginBottom: dpr(22)
    },
    mb_0_10: (index, length) => ({
        marginBottom: index === length ? 0 : dpr(10),
        borderBottomWidth: index === length ? 0 : 1,
        borderBottomColor: index === length ? 'transparent' : '#DFDFDF'
    }),

    //padding bottom
    pb0: {
        paddingBottom: 0
    },

    //margin left
    ml15: {
        marginLeft: dpr(15)
    },
    mlAuto: {
        marginLeft: 'auto'
    }
})