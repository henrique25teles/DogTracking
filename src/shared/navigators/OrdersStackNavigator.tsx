import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'
//import OrdersTabNavigator from './OrdersTabNavigator'
import Order from '../../pages/Order'
import OrderDetails from '../../pages/OrderDetails'

export default function OrdersStackNavigator() {
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

    const createNavigator = createStackNavigator({
        OrderTab: {
            screen: OrderNavigator,
            navigationOptions: ({navigationOptions}) => ({
                title: 'Orders'
            })
        },
        OrderDetail: {
            screen: OrderDetails,
            navigationOptions: ({navigationOptions}) => ({
                title: 'Order Details'
            })
        }
    })
    
    const Navigator = createAppContainer(createNavigator)

    return <Navigator />
}