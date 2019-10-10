import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer, NavigationContainer} from 'react-navigation'
import OrdersTabNavigator from './OrdersTabNavigator'
import OrderDetails from '../../pages/OrderDetails'


const OrdersStackNavigator = createAppContainer(
    createStackNavigator({
        OrderTab: {
            screen: OrdersTabNavigator,
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
)

export default OrdersStackNavigator