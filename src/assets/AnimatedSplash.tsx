import React, { useEffect } from 'react'
import { View, Image, StyleSheet, Dimensions } from 'react-native'
import {SplashScreen} from 'expo'

import AnimatedBone from 'assets/AnimatedBone'
const SplashImage = require('./splash.png')

export default function AnimatedSplash() {

    useEffect(() => {
        //Espera a Tela ser Renderizada antes de ocultar a splash screen
        setTimeout(() => {
            SplashScreen.hide();
        }, 500);
    }, [])

  return (
    <View style={styles.container}>
        <Image style={styles.image} source={SplashImage} />
        <View style={styles.bone}>
            <AnimatedBone />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        resizeMode: 'cover',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    bone: {
        position: 'absolute',
        bottom: 25,
        left: Dimensions.get('screen').width / 2 - 32
        
    }
});