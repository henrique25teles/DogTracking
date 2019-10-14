import React, {useState, useContext, useEffect} from 'react'
import { ScrollView, Text, AsyncStorage } from 'react-native'
import { ListItem } from 'react-native-elements'

import SettingsContext, {LanguageProps, supportedLanguages} from 'stores/SettingsContext'
import LanguageContext from 'stores/LanguageContext'
import Localization from 'translations/Localization'
import {NavigationScreenProp, NavigationState, NavigationParams} from 'react-navigation'

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

function Settings(props: Props){
    const [selectedLanguage, setSelectedLanguage] = useState<LanguageProps>(supportedLanguages[0])

    const languageContext = useContext(LanguageContext);
    const languageApi = Localization(languageContext.language)    
    
    useEffect(() => {
        AsyncStorage.getItem('selectedLanguage').then(value => {
            if (value){
                const languageToSet = supportedLanguages.find(language => language.id === value)
                setSelectedLanguage(languageToSet)
            }
        })
    }, [])

    return (
        <ScrollView>
            <ListItem 
                title={languageApi.t('settingsOptions.language')}
                subtitle={selectedLanguage.name}
                onPress={() => props.navigation.navigate('LanguageSelect')}
                bottomDivider
                />
        </ScrollView>
    )
}

export default Settings
