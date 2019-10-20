import React, {FunctionComponent} from 'react';
import { StyleSheet, View } from 'react-native';
import {SplashScreen} from 'expo'
import { Provider } from 'react-redux'

import Start from 'Start'
import store from 'store'

const App: FunctionComponent = () => {
  SplashScreen.preventAutoHide()

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Provider store={store}>
          <Start  />
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
