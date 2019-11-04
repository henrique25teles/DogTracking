import React from 'react'
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'
import {createStackNavigator} from 'react-navigation-stack'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createAppContainer} from 'react-navigation'
import { Icon } from 'react-native-elements'


import Order from 'pages/Orders/Order'
import OrderDetails from 'pages/Orders/OrderDetails'
import OrderAdd from 'pages/Orders/OrderAdd'
import Settings from 'pages/Settings/'
import LanguageSelect from 'pages/Settings/LanguageSelect'
import Theme from 'pages/Themes/'
import About from 'pages/About/'
import { HeaderLeftButtonToggle } from 'shared/components/HeaderLeft'

import {StackNavOptions, DrawerNavOptions, TabNavOptions} from 'types/NavigationInterface'
import {LocalizationProps} from 'types/TranslationInterface'

import Color from 'models/enums/Color'
import Translate from 'translations/Translate'

    const OrderTabs = createMaterialTopTabNavigator({
        PendingOrders: {
            screen: Order,
            navigationOptions: (props: TabNavOptions) => ({
                title: props.screenProps.t(Translate.Order.PendingOrders),
                tabBarIcon: ({focused, tintColor}) => {
                    return <Icon name="truck-delivery" type="material-community" color={tintColor} />
                }
            }),
        },
        DeliveredOrders: {
            screen: Order,
            navigationOptions: (props: TabNavOptions) => ({
                title: props.screenProps.t(Translate.Order.DeliveredOrders),
                tabBarIcon: ({focused, tintColor}) => {
                    return <Icon name="calendar-check-outline" type="material-community" color={tintColor} />
                }
            }),
        },
        AllOrders: {
            screen: Order,
            navigationOptions: (props: TabNavOptions) => ({
                title: props.screenProps.t(Translate.Order.AllOrders),
                tabBarIcon: ({focused, tintColor}) => {
                    return <Icon name="earth" type="material-community" color={tintColor} />
                }
            }),
        }
    }, {
        //tabBarComponent: MaterialTopTabBar,
        tabBarOptions: {
            allowFontScaling: true,
            indicatorStyle: {
                //backgroundColor: Color.GhostWhite,
            },
            tabStyle: {
                flexDirection: 'row',
            },
            style: {
                backgroundColor: '#3399ff',
            },
            showIcon: true,
        }
    })
    
    const OrdersStack = createStackNavigator({
        OrderTab: {
            screen: OrderTabs,
            navigationOptions: (props: StackNavOptions) => ({
                title: props.screenProps.t(Translate.Order.Orders),
                headerStyle: {
                    backgroundColor: Color.DodgerBlue,
                },
                headerLeft: <HeaderLeftButtonToggle {...props} />,
                headerTintColor: Color.GhostWhite,
            })
        },
        OrderDetail: {
            screen: OrderDetails,
            navigationOptions: (props: StackNavOptions) => ({
                title: props.screenProps.t(Translate.Order.Details),
                headerStyle: {
                    backgroundColor: Color.DodgerBlue.toLowerCase(),
                },
                headerTintColor: Color.GhostWhite.toLowerCase(),
            })
        },
        OrderAdd: {
            screen: OrderAdd,
            navigationOptions: (props: StackNavOptions) => ({
                title: props.screenProps.t(Translate.Order.AddOrder),
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
            navigationOptions: (props: StackNavOptions) => ({
                title: props.screenProps.t(Translate.Settings.Settings),
                headerLeft: <HeaderLeftButtonToggle {...props} />,
                headerStyle: {
                    backgroundColor: Color.DodgerBlue,
                },
                headerTintColor: Color.GhostWhite,
            })
        },
        LanguageSelect: {
            screen: LanguageSelect,
            navigationOptions: (props: StackNavOptions) => ({
                title: props.screenProps.t(Translate.Settings.SelectLanguage),
                headerStyle: {
                    backgroundColor: Color.DodgerBlue,
                },
                headerTintColor: Color.GhostWhite,
            })
        }
    })

    const AboutStack = createStackNavigator({
        About: {
            screen: About,
            navigationOptions: (props: StackNavOptions) => ({
                title: props.screenProps.t(Translate.About.About),
                headerLeft: <HeaderLeftButtonToggle {...props} />,
                headerStyle: {
                    backgroundColor: Color.DodgerBlue,
                },
                headerTintColor: Color.GhostWhite,
            }),
        }
    })

    const ThemesStack = createStackNavigator({
        ThemeHome: {
            screen: Theme,
            navigationOptions: (props: StackNavOptions) => ({
                title: props.screenProps.t(Translate.Themes.Themes),
                headerLeft: <HeaderLeftButtonToggle {...props} />,
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
            navigationOptions: (props: DrawerNavOptions) => ({
                drawerLabel: props.screenProps.t(Translate.Order.Orders),
                drawerIcon: <Icon name="home" type="antdesign" />
            }),
        },
        Settings: {
            screen: SettingStack,
            navigationOptions: (props: DrawerNavOptions) => ({
                drawerLabel: props.screenProps.t(Translate.Settings.Settings),
                drawerIcon: <Icon name="settings" type="feather" />
            }),
        },
        Theme: {
            screen: ThemesStack,
            navigationOptions: (props: DrawerNavOptions) => ({
                drawerLabel: props.screenProps.t(Translate.Themes.Themes),
                drawerIcon: <Icon name="theme-light-dark" type="material-community" />,
            }),
        },
        About: {
            screen: AboutStack,
            navigationOptions: (props: DrawerNavOptions) => ({
                drawerLabel: props.screenProps.t(Translate.About.About),
                drawerIcon: <Icon name="questioncircleo" type="antdesign" />
            }),
        },
    })

export default createAppContainer(drawerNavigator)

