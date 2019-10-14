import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';

import Color from 'models/enums/Color';
import Start from 'Start'

export default function App() {

  return (
    <>
      <StatusBar translucent backgroundColor={Color.DodgerBlue} />
      <View style={styles.container}>
        <View style={styles.content}>
          <Start />
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
