import React, { Component, ReactNode } from 'react'
import { View, Text, FlatList, ListRenderItem, StyleSheet } from 'react-native'
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
  } from 'react-navigation'
import {Button, ListItem, AvatarIcon} from 'react-native-elements'
import { IconProps } from 'react-native-vector-icons/Icon'
import Color from 'models/enums/Color'
const emoji = require('node-emoji')
  
enum CountryEmoji {
    BR = ":flag-br:",
    US = ":us:"
}

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface OrderModel {
    name: string
    code: string
    type: string
    country: string
    icon: AvatarIcon
}

interface State {
    orders: OrderModel[]
}

class Order extends Component<Props, State>{
    constructor(props) {
        super(props)
        this.state = {
            orders: [
                {name: "Pod", code: "OL789456123BR", type: "Prime", country:"BR", icon: {name: 'package', type:'octicon', color:Color.DodgerBlue }},
                {name: "Fone", code: "OL159519879BR", type: "Pac", country:"BR", icon: {name: 'truck-check', type:'material-community', color:Color.DodgerBlue }},
                {name: "Bebe", code: "OL879549875BR", type: "Express", country:"US", icon: {name: 'truck-delivery', type:'material-community', color:Color.DodgerBlue }},
                {name: "Teste", code: "OL789546849BR", type: "Sedex", country:"BR", icon: {name: 'truck-fast', type:'material-community', color:Color.DodgerBlue }},
            ]
        }
    }
    
    keyextractor(item, index): string {
        return index.toString()
    }

    renderItem({item}) : ReactNode {
        const countryEmoji = emoji.get(CountryEmoji[item.country])

        return (
            <ListItem 
                title={item.name} 
                subtitle={item.code}
                leftAvatar={{icon:item.icon}}
                rightSubtitle={countryEmoji}
                rightSubtitleStyle={styles.rightSubtitleStyle}
                rightContentContainerStyle={styles.rightContentContainerStyle}
                rightTitle={` ${item.type} `}
                rightTitleStyle={styles.rightTitleStyle}
                bottomDivider
            />
        )
    }

    render(): JSX.Element {
        return (
            <FlatList 
                data={this.state.orders}
                keyExtractor={this.keyextractor.bind(this)}
                renderItem={this.renderItem.bind(this)}
            />
        )
    }
}

const styles = StyleSheet.create({
    rightContentContainerStyle: {
        flexDirection: 'column'
    },
    rightTitleStyle: {
        borderWidth: 1, 
        borderRadius: 8, 
        borderColor: '#bbbbbb'
    },
    rightSubtitleStyle: {
        fontSize: 16
    }
})

export default Order
