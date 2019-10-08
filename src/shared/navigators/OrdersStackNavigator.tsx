import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import OrdersTabNavigator from './OrdersTabNavigator'
import OrderDetails from '../../pages/OrderDetails'


function OrdersStackNavigator() : JSX.Element {
    const Navigator = createAppContainer(
        createStackNavigator({
            OrdersTabNavigator,
            OrderDetails
        })
    )
    
    return (
        <Navigator />
    )
}

export default OrdersStackNavigator