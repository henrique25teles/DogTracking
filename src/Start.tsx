import React, {Component} from 'react';
import { AsyncStorage } from 'react-native'

import AppContainer from 'routes'
import Localization from 'translations/Localization'

interface Props {
    locale: string
}

interface State {
    language: string,
}

export default class Start extends Component<Props, State> {
    constructor(props){
        super(props)
        this.state = {
            language: props.locale
        }
    }
    
    //Translate
    t = (scope: string, options: any): string => {
        return Localization.t(scope, { locale: this.state.language, ...options });
    };

    changeLanguage = (languageToSet: string): void => {
        AsyncStorage.setItem('selectedLanguage', languageToSet).then(() => {
            this.setState({language: languageToSet})
        })
    }

    render(): JSX.Element {
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
