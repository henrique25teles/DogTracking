import React, {useState} from 'react';
import { StyleSheet, StatusBar, View, AsyncStorage } from 'react-native';
import { locale } from 'expo-localization'
import {SplashScreen} from 'expo'

import Color from 'models/enums/Color';
import Start from 'Start'
import AnimatedSplash from 'assets/AnimatedSplash';

interface State {
  language: string,
  isReady: boolean
}

export default function App() {
  SplashScreen.preventAutoHide()

  const [state, setState] = useState<State>({
    language: locale,
    isReady: false
  })

  async function LoadApp() {
    AsyncStorage.getItem('selectedLanguage').then(value => {
      setTimeout(() => {
        setState({
          ...state,
          language: value || state.language,
          isReady: true
        })
        
      }, 3000);
    })
  }

  if (!state.isReady){
    LoadApp()
    return <AnimatedSplash />
  }

  return (
    <>
      <StatusBar translucent backgroundColor={Color.DodgerBlue} />
      <View style={styles.container}>
        <View style={styles.content}>
          <Start locale={state.language} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    height: '100%',
    width: '100%',
  }
});
