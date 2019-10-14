import React, { useContext, useState, useEffect } from 'react'
import { Text, View, FlatList, ListRenderItemInfo, AsyncStorage } from 'react-native'
import {ListItem} from 'react-native-elements'

// import Localization from 'translations/Localization';
import LanguageContext from 'stores/LanguageContext';
import {LanguageProps, supportedLanguages} from 'stores/SettingsContext'

export default function LanguageSelect(){
    const [languages] = useState<Array<LanguageProps>>(supportedLanguages)
    const [selectedLanguage, setSelectedLanguage] = useState(supportedLanguages[0])
    const languageContext = useContext(LanguageContext)

    useEffect(() => {
        const languageToSet = supportedLanguages.find(language => language.id === languageContext.language)
        setSelectedLanguage(languageToSet)
    }, [])
    
    return (
        <FlatList<LanguageProps>
            data={languages}
            renderItem={({item}) => (
                <ListItem 
                    title={item.name}
                    checkBox={{iconRight: true, checked: item === selectedLanguage}}
                    onPress={() => {
                        setSelectedLanguage(item)
                        languageContext.changeLanguage(item.id)
                    }}
                    bottomDivider                    
                />
            )}
            extraData={selectedLanguage}
            keyExtractor={(item, index) => index.toString()}
        />
    )
}
