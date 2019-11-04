import React from 'react'
import {TouchableOpacity, StyleSheet} from 'react-native'
import {Icon} from 'react-native-elements'

import Color from 'models/enums/Color'
import {StackNavOptions} from 'types/NavigationInterface'

function HeaderLeftButtonToggle(props: StackNavOptions) {
    return (
        <Icon 
            name="menu-fold" 
            type="antdesign" 
            Component={TouchableOpacity}
            containerStyle={styles.container}
            color={Color.GhostWhite}
            onPress={props.navigation.toggleDrawer}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 5,
    }
})

export {HeaderLeftButtonToggle}