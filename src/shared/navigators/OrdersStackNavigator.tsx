import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

import OrdersTabNavigator from './OrdersTabNavigator'
import OrderDetails from '../../pages/OrderDetails'

const OrdersStackNavigator = createAppContainer(
    createStackNavigator({
        OrdersTabNavigator,
        OrderDetails
    })
)

export default OrdersStackNavigator