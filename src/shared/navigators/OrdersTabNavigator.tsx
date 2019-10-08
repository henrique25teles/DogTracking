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

function OrdersTabNavigator() : JSX.Element {
    const Navigator = createAppContainer(
        createMaterialTopTabNavigator({
            PendentOrders: {
                screen: Order
            },
            DeliveredOrders: {
                screen: Order
            },
            AllOrders: {
                screen: Order
            }
        })
    )
    
    return <Navigator />
}


export default OrdersTabNavigator
