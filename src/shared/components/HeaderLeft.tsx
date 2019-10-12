import React from 'react'
import {TouchableOpacity} from 'react-native'
import {Icon} from 'react-native-elements'

import Color from '../../models/enums/Color'
import { 
    NavigationState, 
    NavigationParams, 
    NavigationScreenProp 
} from 'react-navigation'

function HeaderLeftButtonToggle(props: NavigationScreenProp<NavigationState, NavigationParams>) {
    return (
    <Icon 
        name="menu-fold" 
        type="antdesign" 
        Component={TouchableOpacity}
        containerStyle={{paddingLeft: 5}}
        color={Color.GhostWhite}
        onPress={props.toggleDrawer}
    />)
}

export {HeaderLeftButtonToggle}