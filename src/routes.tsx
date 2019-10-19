import React from 'react'
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'
import {createStackNavigator} from 'react-navigation-stack'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createAppContainer} from 'react-navigation'
import { Icon } from 'react-native-elements'

import {StackNavOptions, DrawerNavOptions, TabNavOptions} from 'interfaces/NavigationInterface'

import Order from 'pages/Order'
import OrderDetails from 'pages/OrderDetails'
import Settings from 'pages/Settings'
import LanguageSelect from 'pages/LanguageSelect'
import Theme from 'pages/Theme'
import About from 'pages/About'

import Color from 'models/enums/Color'
import { HeaderLeftButtonToggle } from 'shared/components/HeaderLeft'

    const OrderTabs = createMaterialTopTabNavigator({
        PendingOrders: {
            screen: Order,
            navigationOptions: (props: TabNavOptions) => ({
                title: props.screenProps.t('pendingOrders'),
                tabBarIcon: ({focused, tintColor}) => {
                    return <Icon name="truck-delivery" type="material-community" color={tintColor} />
                }
            }),
        },
        DeliveredOrders: {
            screen: Order,
            navigationOptions: (props: TabNavOptions) => ({
                title: props.screenProps.t('deliveredOrders'),
                tabBarIcon: ({focused, tintColor}) => {
                    return <Icon name="calendar-check-outline" type="material-community" color={tintColor} />
                }
            }),
        },
        AllOrders: {
            screen: Order,
            navigationOptions: (props: TabNavOptions) => ({
                title: props.screenProps.t('allOrders'),
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
                title: props.screenProps.t('orders'),
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
                title: props.screenProps.t('details'),
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
                title: props.screenProps.t('settings'),
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
                title: props.screenProps.t('settingsOptions.selectLanguage'),
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
                title: props.screenProps.t('about'),
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
                title: props.screenProps.t('themes'),
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
                drawerLabel: props.screenProps.t('orders'),
                drawerIcon: <Icon name="home" type="antdesign" />
            }),
        },
        Settings: {
            screen: SettingStack,
            navigationOptions: (props: DrawerNavOptions) => ({
                drawerLabel: props.screenProps.t('settings'),
                drawerIcon: <Icon name="settings" type="feather" />
            }),
        },
        Theme: {
            screen: ThemesStack,
            navigationOptions: (props: DrawerNavOptions) => ({
                drawerLabel: props.screenProps.t('themes'),
                drawerIcon: <Icon name="theme-light-dark" type="material-community" />,
            }),
        },
        About: {
            screen: AboutStack,
            navigationOptions: (props: DrawerNavOptions) => ({
                drawerLabel: props.screenProps.t('about'),
                drawerIcon: <Icon name="questioncircleo" type="antdesign" />
            }),
        },
    })

export default createAppContainer(drawerNavigator)

