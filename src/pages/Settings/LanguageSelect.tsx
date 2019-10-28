import React, { FunctionComponent } from 'react'
import { FlatList } from 'react-native'
import {ListItem} from 'react-native-elements'
import {NavigationStackProp} from 'react-navigation-stack'
import { useSelector, useDispatch } from 'react-redux';

import { ScreenProps } from 'types/NavigationInterface';
import { ApplicationState } from 'store';
import { Language, SettingsActionTypes } from 'types/SettingsTypes';
import { Action, Dispatch } from 'redux';

interface NavigationProps {
    screenProps: ScreenProps
    navigation: NavigationStackProp
}

type Props = NavigationProps

const LanguageSelect: FunctionComponent<Props> = props => {
    const selectedLanguage = useSelector<ApplicationState, Language>(state => state.settings.SelectedLanguage)
    const languages = useSelector<ApplicationState, Language[]>(state => state.settings.Languages)
    const dispatch= useDispatch()

    function onSelectLanguage(language: Language) {
        console.log(language)
        dispatch({type: SettingsActionTypes.CHANGE_LANGUAGE, payload: {language}})
    }
    
    return (
        <>
            <FlatList<Language>
                data={languages}
                renderItem={({item}) => { 
                    return (
                    <ListItem 
                        title={`${item.Name}`}
                        checkBox={{iconRight: true, checked: item.Id === selectedLanguage.Id}}
                        onPress={() => onSelectLanguage(item)}
                        bottomDivider
                    />
                )}}
                extraData={selectedLanguage}
                keyExtractor={(item, index) => index.toString()}
            />
        </>
    )
}

export default LanguageSelect
