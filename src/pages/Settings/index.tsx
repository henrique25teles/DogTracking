import React, {FunctionComponent} from 'react'
import { ScrollView } from 'react-native'
import { ListItem } from 'react-native-elements'
import { NavigationStackProp} from 'react-navigation-stack'
import { ApplicationState } from 'store'
import { useSelector } from 'react-redux'

import {ScreenProps} from 'types/NavigationInterface'
import { Language } from 'types/SettingsTypes'

interface NavigationProps {
    screenProps: ScreenProps
    navigation: NavigationStackProp
}

type Props = NavigationProps

const Settings: FunctionComponent<Props> = props => {
    const selectedLanguage = useSelector<ApplicationState, Language>(state => state.settings.SelectedLanguage)

    return (
        <ScrollView>
            <ListItem 
                title={props.screenProps.t('settingsOptions.language')}
                subtitle={selectedLanguage.Name}
                onPress={() => props.navigation.navigate('LanguageSelect')}
                leftIcon={{name: 'language', type: 'entypo'}}
                bottomDivider
                />
        </ScrollView>
    )
}

export default Settings
