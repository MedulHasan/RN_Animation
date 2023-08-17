import React, {useState} from 'react';
import { FlatList, View, I18nManager } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import RNRestart from 'react-native-restart';
import i18n from '../../language/i18n';
import { settingStyle } from './SettingStyle'
import { setLanguage } from '../../redux/features/language/language';
import IndividualLanguage from './IndividualLanguage';
import { languages } from '../../language/languages';
import { RTL_APPLICABLE_LANGUAGES, DEFAULT_LANG, DEFAULT_LANG_FOR_RTL } from '../../constants/languageConst';
import { languageSelector } from '../../redux/features/language/languageSelector';

const SelectLanguage = () => {
    const dispatch = useDispatch();
    const { lng } = useSelector(languageSelector);
    const [selectedId, setSelectedId] = useState(lng || DEFAULT_LANG);

    const handleSelectLanguage = async (langCode = DEFAULT_LANG) => {
      i18n.changeLanguage(langCode)
      .then(() => {
        I18nManager.forceRTL(langCode == DEFAULT_LANG_FOR_RTL);
        if(langCode == RTL_APPLICABLE_LANGUAGES || I18nManager.isRTL) {
          RNRestart.Restart();
        }
      });
      setSelectedId(langCode);
      dispatch(setLanguage(langCode));
    }

  return (
    <View style={settingStyle.settingRoot}>
      <View style={settingStyle.container}>
          <FlatList
              data={languages}
              renderItem={({item}) => <IndividualLanguage 
                item={item}
                selectedId={selectedId}
                handleSelectLanguage={handleSelectLanguage}
              />}
              keyExtractor={item => item.langCode}
              extraData={selectedId}
          />
      </View>
    </View>
  )
}

export default SelectLanguage;