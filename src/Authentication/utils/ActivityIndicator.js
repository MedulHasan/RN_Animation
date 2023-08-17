import React from 'react'
import { styles } from './reCaptchaStyle'
import CheckIcon from "../../assets/svgs/check.svg"
import UncheckIcon from "../../assets/svgs/unchecked.svg"
import { View, ActivityIndicator as RNActivityIndicator } from 'react-native'
import dpr from '../../style/dpr'
import CustomSVG from '../../components/CustomSVG/CustomSVG'

const ActivityIndicator = ({reCaptchaToken, loading}) => {
  return (
    <View style={styles.checkbox}>
        {
            !reCaptchaToken && loading && (
                <RNActivityIndicator size="small" color='#508ef5' />
            )
        }
        {
            reCaptchaToken && !loading && (
                <CustomSVG 
                    svgIcon={CheckIcon} 
                    height={dpr(24)} 
                    width={dpr(24)} 
                />
            )
        }
        {
            !reCaptchaToken && !loading && (
                <CustomSVG 
                    svgIcon={UncheckIcon} 
                    height={dpr(24)} 
                    width={dpr(24)} 
                />
            )
        }
    </View>
  )
}

export default ActivityIndicator