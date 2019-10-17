import React, { Component } from 'react'
import { View, Text } from 'react-native'
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
  } from 'react-navigation'
import {Button} from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler';
const emoji = require('node-emoji')
  
interface Props {
navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class Order extends Component<Props>{
    public static navigationOptions = {
        title: 'Order',
    };

    render(){
        return (
            <View>
                <Text>This is order page</Text>
                <Button 
                    title="See details page" 
                    onPress={() => this.props.navigation.navigate('OrderDetail')}
                    containerStyle={{width: '60%', justifyContent: 'center', alignItems: 'center'}}
                />
                <Text style={{fontSize:28}}>OI SIRLENE</Text>
                <TextInput onChangeText={text => console.log(text)} />
            </View>
        )
    }
}

export default Order
