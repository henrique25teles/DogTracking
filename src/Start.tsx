import React, {FunctionComponent} from 'react';
import { AsyncStorage, StatusBar, View, Text } from 'react-native'
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AppContainer from 'routes'
import Localization from 'translations/Localization'
import Color from 'models/enums/Color';
import { ApplicationState } from 'store';
import { Languages } from 'store/ducks/applicationStatus/types';
import * as ApplicationStatusActions from 'store/ducks/applicationStatus/actions'
import AnimatedSplash from 'assets/AnimatedSplash';
import {AppLoading} from 'expo'
import {Asset} from 'expo-asset'

interface StateProps {
    isLoading: boolean
    isReady: boolean
    selectedLanguage: Languages
    languages: Languages[]
  }
  
interface DispatchProps {
    setPreLoaded(): void
    setIsReady(): void
    setIsReadySettings(language: Languages) : void
}

type Props = StateProps & DispatchProps

const Start:FunctionComponent<Props> = (props) => {

    async function _loadResourcesAsync() {
        await Promise.all([
          Asset.loadAsync([
            require('./assets/bone.png'),
            require('./assets/splash.png'),
          ]),
        ]);
      };

    async function loadApplication() {
        const selectedLanguage = await AsyncStorage.getItem('selectedLanguage');

        if (selectedLanguage) {
            const languageToSet = props.languages.find(lang => lang.id === parseInt(selectedLanguage));
            
            if (languageToSet.id !== props.selectedLanguage.id){
                props.setIsReadySettings(languageToSet);
            } else {
                props.setIsReady();
            }
        } else {
            await AsyncStorage.setItem('selectedLanguage', props.selectedLanguage.id.toString())
            props.setIsReady();
        }
    }
    
    //Translate
    function t(scope: string, options: any): string {
        return Localization.t(scope, { locale: props.selectedLanguage.locale, ...options });
    };

    //Pre Loading
    if (props.isLoading) {
        return (
            <AppLoading 
                startAsync={_loadResourcesAsync}
                onFinish={props.setPreLoaded}
                onError={console.log}
                autoHideSplash={false}
            />
        )
    }

    //Loading
    if (!props.isReady){
        loadApplication()
        return <AnimatedSplash />
    }

    //Aplication
    return (
        <>
            <StatusBar translucent backgroundColor={Color.DodgerBlue} />
            <AppContainer
                screenProps={{
                    t: t,
                }}
            />
        </>
    );
}

const mapStateToProps = (state: ApplicationState) => {
    return {
        isLoading: state.applicationStatus.isLoading,
        isReady: state.applicationStatus.isReady,
        selectedLanguage: state.applicationStatus.selectedLanguage,
        languages: state.applicationStatus.Languages,
    }
};
  
const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({
        ...ApplicationStatusActions,
    }, dispatch)

}


export default connect(mapStateToProps, mapDispatchToProps)(Start)