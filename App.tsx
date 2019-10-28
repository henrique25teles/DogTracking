import React, {FunctionComponent} from 'react';
import { StyleSheet, View } from 'react-native';
import {SplashScreen} from 'expo'
import { Provider } from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'

import Start from 'Start'
import store, { persistor } from 'store'

const App: FunctionComponent = () => {
  SplashScreen.preventAutoHide()

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Start  />
          </PersistGate>
        </Provider>
      </View>
    </View>
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

export default App
