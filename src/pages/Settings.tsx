import React, {useState, useEffect} from 'react'
import { ScrollView, AsyncStorage } from 'react-native'
import { ListItem } from 'react-native-elements'

import {ScreenProps} from 'interfaces/NavigationInterface'
import { LanguageProps } from 'interfaces/SettingsInterface'
import {NavigationStackScreenComponent} from 'react-navigation-stack'
import { supportedLanguages } from 'translations/Localization'

const Settings: NavigationStackScreenComponent<any, ScreenProps> = props => {
    const [selectedLanguage, setSelectedLanguage] = useState<LanguageProps>(supportedLanguages[0])

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
                title={props.screenProps.t('settingsOptions.language')}
                subtitle={selectedLanguage.name}
                onPress={() => props.navigation.navigate('LanguageSelect')}
                leftIcon={{name: 'language', type: 'entypo'}}
                bottomDivider
                />
        </ScrollView>
    )
}

export default Settings
