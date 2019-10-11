import React from 'react'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createAppContainer} from 'react-navigation'

import OrdersStackNavigator from './OrdersStackNavigator'
import SettingsStackNavigator from './SettingsStackNavigator'
import AboutStackNavigator from './AboutStackNavigator'
import ThemeStackNavigator from './ThemeStackNavigator'
import { Icon } from 'react-native-elements'

export default function MasterDrawerNavigator() {
    const createNavigator = createDrawerNavigator({
        Orders: {
            screen: ({navigation}) => <OrdersStackNavigator toogleDrawer={navigation.toggleDrawer} />,
            navigationOptions: ({navigation}) => ({
                drawerLabel: 'Orders',
                drawerIcon: <Icon name="home" type="antdesign" />
            }),
        },
        Settings: {
            screen: ({navigation}) => <SettingsStackNavigator toogleDrawer={navigation.toggleDrawer} />,
            navigationOptions: ({navigation}) => ({
                drawerLabel: 'Settings',
                drawerIcon: <Icon name="settings" type="feather" />
            }),
        },
        About: {
            screen: AboutStackNavigator,
            navigationOptions: ({navigation}) => ({
                drawerLabel: 'About',
                drawerIcon: <Icon name="questioncircleo" type="antdesign" />
            }),
        },
        Theme: {
            screen: ({navigation}) => <ThemeStackNavigator toogleDrawer={navigation.toggleDrawer} />,
            navigationOptions: ({navigation}) => ({
                drawerLabel: 'Theme',
                drawerIcon: <Icon name="theme-light-dark" type="material-community" />,
            }),
        }
    })
    
    const Navigator = createAppContainer(createNavigator)

    return <Navigator />
}