import React, {useContext} from 'react'
import {createMaterialTopTabNavigator} from 'react-navigation-tabs/'
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
import { HeaderLeftButtonToggle } from 'shared/components/HeaderLeft'
import LanguageContext from 'stores/LanguageContext'
import Localization from 'translations/Localization'
import LanguageSelect from 'pages/LanguageSelect'

export default function MasterDrawerNavigator() : JSX.Element {
    const languageContext = useContext(LanguageContext)
    const languageApi = Localization(languageContext.language)

    const OrderTabs = createMaterialTopTabNavigator({
        PendingOrders: {
            screen: Order,
            navigationOptions: () => ({
                title: languageApi.t('pendingOrders'),
                tabBarIcon: ({focused, tintColor}) => {
                    return <Icon name="truck-delivery" type="material-community" color={tintColor} />
                }
            }),
        },
        DeliveredOrders: {
            screen: Order,
            navigationOptions: () => ({
                title: languageApi.t('deliveredOrders'),
                tabBarIcon: ({focused, tintColor}) => {
                    return <Icon name="calendar-check-outline" type="material-community" color={tintColor} />
                }
            }),
        },
        AllOrders: {
            screen: Order,
            navigationOptions: () => ({
                title: languageApi.t('allOrders'),
                tabBarIcon: ({focused, tintColor}) => {
                    return <Icon name="earth" type="material-community" color={tintColor} />
                }
            }),
        }
    }, {
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
            navigationOptions: ({navigation}) => ({
                title: languageApi.t('orders'),
                headerStyle: {
                    backgroundColor: Color.DodgerBlue,
                },
                headerLeft: <HeaderLeftButtonToggle {...navigation} />,
                headerTintColor: Color.GhostWhite,
            })
        },
        OrderDetail: {
            screen: OrderDetails,
            navigationOptions: ({navigation}) => ({
                title: languageApi.t('details'),
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
                title: languageApi.t('settings'),
                headerLeft: <HeaderLeftButtonToggle {...navigation} />,
                headerStyle: {
                    backgroundColor: Color.DodgerBlue,
                },
                headerTintColor: Color.GhostWhite,
            })
        },
        LanguageSelect: {
            screen: LanguageSelect,
            navigationOptions: ({navigation}) => ({
                title: languageApi.t('settingsOptions.selectLanguage'),
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
            navigationOptions: ({navigation}) => ({
                title: languageApi.t('about'),
                headerLeft: <HeaderLeftButtonToggle {...navigation} />,
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
            navigationOptions: ({navigation}) => ({
                title: languageApi.t('themes'),
                headerLeft: <HeaderLeftButtonToggle {...navigation} />,
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
                drawerLabel: languageApi.t('orders'),
                drawerIcon: <Icon name="home" type="antdesign" />
            }),
        },
        Settings: {
            screen: SettingStack,
            navigationOptions: ({navigation}) => ({
                drawerLabel: languageApi.t('settings'),
                drawerIcon: <Icon name="settings" type="feather" />
            }),
        },
        Theme: {
            screen: ThemesStack,
            navigationOptions: ({navigation}) => ({
                drawerLabel: languageApi.t('themes'),
                drawerIcon: <Icon name="theme-light-dark" type="material-community" />,
            }),
        },
        About: {
            screen: AboutStack,
            navigationOptions: ({navigation}) => ({
                drawerLabel: languageApi.t('about'),
                drawerIcon: <Icon name="questioncircleo" type="antdesign" />
            }),
        },
    }, {
        unmountInactiveRoutes: false
    })
    
    const Navigator = createAppContainer(drawerNavigator)

    return <Navigator />
}
