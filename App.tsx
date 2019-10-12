import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import * as Localization from 'expo-localization'
import Color from 'models/enums/Color';
import Navigator from 'routes'

export default function App() {
  //console.log(Localization);
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
    flex: 1
  },
  content: {
    height: '100%',
    width: '100%',
  }
});
