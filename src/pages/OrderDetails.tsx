import React, {Component} from 'react'
import { View, Text } from 'react-native'
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
  } from 'react-navigation';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class OrderDetails extends Component<Props> {
    public static navigationOptions = {
        title: 'Order Details',
    };

    render(){
        return (
            <View>
                <Text>This is details Order</Text>
            </View>
        )
    }
}

export default OrderDetails
