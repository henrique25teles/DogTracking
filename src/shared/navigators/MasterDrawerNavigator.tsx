import React from 'react'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createAppContainer} from 'react-navigation'

import OrdersStackNavigator from './OrdersStackNavigator'
import SettingsStackNavigator from './SettingsStackNavigator'
import AboutStackNavigator from './AboutStackNavigator'

export default function MasterDrawerNavigator() {
    const createNavigator = createDrawerNavigator({
        Orders: {
            screen: OrdersStackNavigator,
            navigationOptions: ({navigation}) => ({
                drawerLabel: 'Orders'
            }),
        },
        Settings: {
            screen: SettingsStackNavigator,
            navigationOptions: ({navigation}) => ({
                drawerLabel: 'Settings'
            }),
        },
        About: {
            screen: AboutStackNavigator,
            navigationOptions: ({navigation}) => ({
                drawerLabel: 'About'
            }),
        }
    })
    
    const Navigator = createAppContainer(createNavigator)

    return <Navigator />
}