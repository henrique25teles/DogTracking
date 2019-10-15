import React, { useState, useEffect } from 'react'
import { FlatList, ActivityIndicator } from 'react-native'
import {ListItem} from 'react-native-elements'
import {NavigationStackScreenComponent} from 'react-navigation-stack'

import { ScreenProps } from 'interfaces/NavigationInterface';
import { LanguageProps } from 'interfaces/SettingsInterface'
import { supportedLanguages } from 'translations/Localization';

const LanguageSelect: NavigationStackScreenComponent<any, ScreenProps> = props => {
    const [languages] = useState<Array<LanguageProps>>(supportedLanguages)
    const [selectedLanguage, setSelectedLanguage] = useState(supportedLanguages[0])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        const languageToSet = supportedLanguages.find(language => language.id === props.screenProps.language)
        setSelectedLanguage(languageToSet)
        setIsLoading(false)
    }, [])
    
    function onSelectLanguage(item: LanguageProps) {
        setIsLoading(true)
        setTimeout(() => {
            setSelectedLanguage(item)
            props.screenProps.setLanguage(item.id)
        }, 100);
        //setIsLoading(false)
    }

    return (
        <>
            <ActivityIndicator size="large" color="#1818ff" animating={isLoading} style={{position:'absolute', margin:'60%'}} />
            <FlatList<LanguageProps>
                data={languages}
                renderItem={({item}) => (
                    <ListItem 
                        title={item.name}
                        checkBox={{iconRight: true, checked: item === selectedLanguage}}
                        onPress={() => onSelectLanguage(item)}
                        disabled={isLoading}
                        bottomDivider
                    />
                )}
                extraData={selectedLanguage}
                keyExtractor={(item, index) => index.toString()}
            />
        </>
    )
}

export default LanguageSelect
