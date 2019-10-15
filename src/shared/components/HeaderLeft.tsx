import React from 'react'
import {TouchableOpacity} from 'react-native'
import {Icon} from 'react-native-elements'

import Color from '../../models/enums/Color'
import {StackNavOptions} from 'routes'

function HeaderLeftButtonToggle(props: StackNavOptions) {
    return (
    <Icon 
        name="menu-fold" 
        type="antdesign" 
        Component={TouchableOpacity}
        containerStyle={{paddingLeft: 5}}
        color={Color.GhostWhite}
        onPress={props.navigation.toggleDrawer}
    />)
}

export {HeaderLeftButtonToggle}