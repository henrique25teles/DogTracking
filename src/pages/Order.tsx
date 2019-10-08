import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
  } from 'react-navigation';
  
interface Props {
navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class Order extends Component<Props>{
    public static navigationOptions = {
        title: 'Order',
    };

    render(){
        console.log(this.props.navigation);
        return (
            <View>
                <Text>This is order page</Text>
                <Button title="Navigate" onPress={() => this.props.navigation.navigate('OrderDetails')} />
            </View>
        )
    }
}

export default Order
