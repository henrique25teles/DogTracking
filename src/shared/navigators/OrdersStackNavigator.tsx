import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'

import Color from '../../models/enums/Color'
import HeaderLeftProps from '../interfaces/HeaderLeftProps'
import {createHeaderLeftToggle} from '../components/HeaderLeft'
import Order from '../../pages/Order'
import OrderDetails from '../../pages/OrderDetails'

export default function OrdersStackNavigator(props: HeaderLeftProps) {
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
                headerLeft: createHeaderLeftToggle(props),
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