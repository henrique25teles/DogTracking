import React, {useState, useMemo, Component} from 'react';
import { AsyncStorage } from 'react-native';
import { locale } from 'expo-localization'

import LanguageContext from 'stores/LanguageContext'
import Navigator from 'routes'

interface State {
    language: string
}

export default class Start extends Component<any, State> {
    state = {
        language: locale
    }

    componentDidMount() {
        AsyncStorage.getItem('selectedLanguage').then(value => {
          if(value)
            this.setState({language: value})
        })
    }
    
    changeLanguage(languageToSet: string) {
        AsyncStorage.setItem('selectedLanguage', languageToSet).then(() => {
            this.setState({language: languageToSet})
        })
    }

    render() {
        return (
            <LanguageContext.Provider value={{
              language: this.state.language, changeLanguage: 
              this.changeLanguage.bind(this)}}
            >
                <Navigator />
            </LanguageContext.Provider>
        );
    }
}
