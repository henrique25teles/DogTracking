import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

import Settings from '../../pages/Settings'
import HeaderLeftProps from '../interfaces/HeaderLeftProps'
import { createHeaderLeftToggle } from '../components/HeaderLeft'
import Color from '../../models/enums/Color'

function SettingsStackNavigator(props: HeaderLeftProps){
    const createNavigator = createStackNavigator({
        SettingsHome: {
            screen: Settings,
            navigationOptions: ({navigation}) => ({
                title: 'Settings',
                headerLeft: createHeaderLeftToggle(props),
                headerStyle: {
                    backgroundColor: Color.DodgerBlue,
                },
                headerTintColor: Color.GhostWhite,
            })
        }
    })

    const Navigator = createAppContainer(createNavigator)

    return <Navigator />
}

export default SettingsStackNavigator