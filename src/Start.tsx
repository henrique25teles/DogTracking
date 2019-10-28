import React, {FunctionComponent, useState} from 'react';
import { StatusBar } from 'react-native'
import { useSelector } from 'react-redux';
import {AppLoading} from 'expo'
import {Asset} from 'expo-asset'
import * as Font from 'expo-font'
import { Ionicons, Entypo, AntDesign, MaterialCommunityIcons, FontAwesome5, FontAwesome, Octicons, MaterialIcons } from '@expo/vector-icons';

import AppContainer from 'routes'
import Localization from 'translations/Localization'
import Color from 'models/enums/Color';
import { ApplicationState } from 'store';
import { Language } from 'types/SettingsTypes';
import AnimatedSplash from 'assets/AnimatedSplash';

const Start:FunctionComponent = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [isReady, setIsReady] = useState<boolean>(false)
    const selectedLanguage = useSelector<ApplicationState, Language>(state => state.settings.SelectedLanguage)
    const languages = useSelector<ApplicationState, Language[]>(state => state.settings.Languages)

    console.log(`Primeiro ${selectedLanguage}`)

    async function _loadResourcesAsync() {
        await Promise.all([
          Asset.fromModule(require('./assets/bone.png')).downloadAsync(),
          Asset.fromModule(require('./assets/splash.png')).downloadAsync(),
          Font.loadAsync(MaterialIcons.font),
          Font.loadAsync(Ionicons.font),
          Font.loadAsync(MaterialCommunityIcons.font),
          Font.loadAsync(Entypo.font),
          Font.loadAsync(AntDesign.font),
          Font.loadAsync(FontAwesome.font),
          Font.loadAsync(FontAwesome5.font),
          Font.loadAsync(Octicons.font),
        ]);
      };

    function setPreLoaded() {
        setIsLoading(false)
    }

    async function loadApplication() {
    console.log(`Segundo ${selectedLanguage}`)

        setTimeout(() => {
            console.log('tá passando por aqui')
            setIsReady(true)
        }, 3500);
    }
    
    //Translate
    function t(scope: string, options: any): string {
        return Localization.t(scope, { locale: selectedLanguage.Locale, ...options });
    };

    //Pre Loading
    if (isLoading) {
        return (
            <AppLoading 
                startAsync={_loadResourcesAsync}
                onFinish={setPreLoaded}
                onError={console.log}
                autoHideSplash={false}
            />
        )
    }

    //Loading
    if (!isReady){
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


export default Start