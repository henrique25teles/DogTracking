import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'
import { TouchableOpacity } from 'react-native'
import {Icon} from 'react-native-elements'

import Color from '../../models/enums/Color'
import Order from '../../pages/Order'
import OrderDetails from '../../pages/OrderDetails'

interface Props {
    toogleDrawer: Function
}

export default function OrdersStackNavigator(props: Props) {
    ///Creation of tab navigator.
    /// It'll go inside of the Stack Navigator behind
    const OrderNavigator = createMaterialTopTabNavigator({
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

    ///Creating stack navigator
    const createNavigator = createStackNavigator({
        OrderTab: {
            screen: OrderNavigator,
            navigationOptions: ({navigation}) => ({
                title: 'Orders',
                headerLeft: () => (
                    <Icon 
                        name="menu-fold" 
                        type="antdesign" 
                        Component={TouchableOpacity}
                        containerStyle={{paddingLeft: 5}}
                        color={Color.GhostWhite}
                        onPress={() => props.toogleDrawer()} 
                    />
                ),
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
    
    const Navigator = createAppContainer(createNavigator)

    return <Navigator />
}