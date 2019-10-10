import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'
import { TouchableOpacity } from 'react-native'
import {Icon} from 'react-native-elements'

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
                        name="menuunfold" 
                        type="antdesign" 
                        Component={TouchableOpacity}
                        onPress={() => props.toogleDrawer()} 
                    />
                )
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