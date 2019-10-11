import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';

import Color from './src/models/enums/Color';
import Navigator from './src/shared/navigators/MasterDrawerNavigator';

export default function App() {
  return (
    <>
      <StatusBar translucent backgroundColor={Color.DodgerBlue} />
      <View style={styles.container}>
        <View style={styles.content}>
          <Navigator />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    //marginTop: StatusBar.currentHeight,
    //marginBottom: StatusBar.currentHeight,
    // height: '100%',
    // width: '100%',
    flex: 1
  },
  content: {
    height: '100%',
    width: '100%',
  }
});
