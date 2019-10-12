import React from 'react'
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'
import {createStackNavigator} from 'react-navigation-stack'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createAppContainer} from 'react-navigation'
import { Icon } from 'react-native-elements'

import Order from 'pages/Order'
import OrderDetails from 'pages/OrderDetails'
import Settings from 'pages/Settings'
import Theme from 'pages/Theme'
import About from 'pages/About'

import Color from 'models/enums/Color'

export default function MasterDrawerNavigator() {
    const OrderTabs = createMaterialTopTabNavigator({
        PendentOrders: {
            screen: Order,
            navigationOptions: () => ({
                title: 'Pendent'
            }),
        },
        DeliveredOrders: {
            screen: Order,
            navigationOptions: () => ({
                title: 'Delivered'
            }),
        },
        AllOrders: {
            screen: Order,
            navigationOptions: () => ({
                title: 'All'
            }),
        }
    })
    
    const OrdersStack = createStackNavigator({
        OrderTab: {
            screen: OrderTabs,
            navigationOptions: ({navigation}) => ({
                title: 'Orders',
                headerStyle: {
                    backgroundColor: Color.DodgerBlue,
                },
                headerTintColor: Color.GhostWhite,
            })
        },
        OrderDetail: {
            screen: OrderDetails,
            navigationOptions: ({navigation}) => ({
                title: 'Order Details',
                headerStyle: {
                    backgroundColor: Color.DodgerBlue.toLowerCase(),
                },
                headerTintColor: Color.GhostWhite.toLowerCase(),
            })
        }
    })

    const SettingStack = createStackNavigator({
        SettingsHome: {
            screen: Settings,
            navigationOptions: ({navigation}) => ({
                title: 'Settings',
                //headerLeft: createHeaderLeftToggle(props),
                headerStyle: {
                    backgroundColor: Color.DodgerBlue,
                },
                headerTintColor: Color.GhostWhite,
            })
        }
    })

    const AboutStack = createStackNavigator({
        About
    })

    const ThemesStack = createStackNavigator({
        ThemeHome: {
            screen: Theme,
            navigationOptions: ({navigation}) => ({
                title: 'Themes',
                //headerLeft: createHeaderLeftToggle(props),
                headerStyle: {
                    backgroundColor: Color.DodgerBlue,
                },
                headerTintColor: Color.GhostWhite,
            })
        }
    })
    
    const drawerNavigator = createDrawerNavigator({
        Orders: {
            screen: OrdersStack,
            navigationOptions: ({navigation}) => ({
                drawerLabel: 'Orders',
                drawerIcon: <Icon name="home" type="antdesign" />
            }),
        },
        Settings: {
            screen: SettingStack,
            navigationOptions: ({navigation}) => ({
                drawerLabel: 'Settings',
                drawerIcon: <Icon name="settings" type="feather" />
            }),
        },
        Theme: {
            screen: ThemesStack,
            navigationOptions: ({navigation}) => ({
                drawerLabel: 'Theme',
                drawerIcon: <Icon name="theme-light-dark" type="material-community" />,
            }),
        },
        About: {
            screen: AboutStack,
            navigationOptions: ({navigation}) => ({
                drawerLabel: 'About',
                drawerIcon: <Icon name="questioncircleo" type="antdesign" />
            }),
        },
    })
    
    const Navigator = createAppContainer(drawerNavigator)

    return <Navigator />
}
