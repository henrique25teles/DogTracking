import React, {useState} from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';

import Color from 'models/enums/Color';
import LanguageContext, {defaultLanguage} from 'stores/LanguageContext'
import {LocalizationProps} from 'translations/interfaces'
import Navigator from 'routes'

export default function App() {
  const [language, setLanguage] = useState<LocalizationProps>(defaultLanguage)

  return (
    <>
      <StatusBar translucent backgroundColor={Color.DodgerBlue} />
      <View style={styles.container}>
        <View style={styles.content}>
          <LanguageContext.Provider value={{language, setLanguage}}>
            <Navigator />
          </LanguageContext.Provider>
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
