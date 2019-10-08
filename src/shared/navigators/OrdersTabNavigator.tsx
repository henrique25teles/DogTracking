import {createMaterialTopTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'

import Order from '../../pages/Order'

const OrdersTabNavigator = createAppContainer(
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

export default OrdersTabNavigator