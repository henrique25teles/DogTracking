import React from 'react'
import {
    createMaterialTopTabNavigator, 
    NavigationMaterialTabOptions,
    NavigationTabProp,

} from 'react-navigation-tabs'
import {
    createAppContainer,
    NavigationRouteConfig,
    NavigationRouteConfigMap,
    NavigationRoute,
    NavigationParams
} from 'react-navigation'

import Order from '../../pages/Order'

    const OrdersTabNavigator = createAppContainer(
        createMaterialTopTabNavigator({
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
    )
    
export default OrdersTabNavigator
