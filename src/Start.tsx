import React, {Component} from 'react';
import { AsyncStorage } from 'react-native';
import { locale } from 'expo-localization'

import AppContainer from 'routes'
import Localization from 'translations/Localization';

interface State {
    language: string
}

export default class Start extends Component<any, State> {
    state = {
        language: locale
    }

    t = (scope: string, options: any): string => {
        return Localization.t(scope, { locale: this.state.language, ...options });
    };

    componentDidMount() {
        AsyncStorage.getItem('selectedLanguage').then(value => {
          if(value)
            this.setState({language: value})
        })
    }
    
    changeLanguage = (languageToSet: string): void => {
        AsyncStorage.setItem('selectedLanguage', languageToSet).then(() => {
            this.setState({language: languageToSet})
        })
    }

    render() {
        return (
            <AppContainer 
                screenProps={{
                    t: this.t,
                    language: this.state.language,
                    setLanguage: this.changeLanguage,
                }}
            />
        );
    }
}
