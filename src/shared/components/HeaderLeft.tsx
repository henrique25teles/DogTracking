import React from 'react'
import {TouchableOpacity} from 'react-native'
import {Icon} from 'react-native-elements'

import Color from '../../models/enums/Color'
import HeaderLeftProps from '../interfaces/HeaderLeftProps'

function createHeaderLeftToggle(props: HeaderLeftProps) {
    return (
    <Icon 
        name="menu-fold" 
        type="antdesign" 
        Component={TouchableOpacity}
        containerStyle={{paddingLeft: 5}}
        color={Color.GhostWhite}
        onPress={() => props.toogleDrawer()} 
        hitSlop={{top:50, bottom: 50, left: 50, right: 100}}
    />)
}

export {createHeaderLeftToggle}