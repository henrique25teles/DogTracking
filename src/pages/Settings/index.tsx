import React, {FunctionComponent} from 'react'
import { ScrollView } from 'react-native'
import { ListItem } from 'react-native-elements'
import { useSelector } from 'react-redux'

import { ApplicationState } from 'store'
import {StackNavOptions} from 'types/NavigationInterface'
import { Language } from 'types/SettingsTypes'
import Translate from 'translations/Translate'

const Settings: FunctionComponent<StackNavOptions> = props => {
    const selectedLanguage = useSelector<ApplicationState, Language>(state => state.settings.SelectedLanguage)

    return (
        <ScrollView>
            <ListItem 
                title={props.screenProps.t(Translate.Settings.Language)}
                subtitle={selectedLanguage.Name}
                onPress={() => props.navigation.navigate('LanguageSelect')}
                leftIcon={{name: 'language', type: 'entypo'}}
                bottomDivider
                />
        </ScrollView>
    )
}

export default Settings
