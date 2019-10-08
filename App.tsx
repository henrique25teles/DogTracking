import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import Navigator from './src/shared/navigators/MasterDrawerNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //marginTop: StatusBar.currentHeight,
    //marginBottom: StatusBar.currentHeight,
    height: '100%',
    width: '100%',
  },
});
