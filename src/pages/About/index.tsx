import React from 'react'
import { View, Text, Button, AsyncStorage } from 'react-native'

const About = () => {
    function loadAllKeys() {
        AsyncStorage.getAllKeys().then(keys => {
            console.log(keys)
        })
    }

    function clearAllKeys() {
        AsyncStorage.clear()
    }

    function getPersistRoot() {
        AsyncStorage.getItem('persist:root').then(value => {
            console.log(value)
        })
    }

    return (
        <View>
            <Text>Aboute Page</Text>
            <Button title="Load all keys" onPress={loadAllKeys} />
            <Button title="Clear all keys" onPress={clearAllKeys} />
            <Button title="Get Persist Root" onPress={getPersistRoot} />
        </View>
    )
}

export default About
