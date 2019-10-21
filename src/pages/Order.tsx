import React, { Component, ReactNode } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
  } from 'react-navigation'
import {ListItem, AvatarIcon} from 'react-native-elements'
import Color from 'models/enums/Color'
import { SplashScreen } from 'expo'
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
                {name: "Novo", code: "OL879549875BR", type: "Express-Delivery Track Law", country:"BR", icon: {name: 'road-variant', type:'material-community', color:Color.DodgerBlue }},
                {name: "Teste", code: "OL789546849BR", type: "Sedex", country:"BR", icon: {name: 'truck-fast', type:'material-community', color:Color.DodgerBlue }},
                {name: "Concluido", code: "OL789546849BR", type: "Ola", country:"US", icon: {name: 'flag-checkered', type:'font-awesome', color:Color.DodgerBlue }},
                {name: "Caixa", code: "OL789546849BR", type: "Ola", country:"US", icon: {name: 'package-variant', type:'material-community', color:Color.DodgerBlue }},
                {name: "Aviao", code: "OL789546849BR", type: "Ola", country:"US", icon: {name: 'airplane-landing', type:'material-community', color:Color.DodgerBlue }},
                {name: "Outro Aviao", code: "OL879549875BR", type: "Express", country:"BR", icon: {name: 'airplane', type:'material-community', color:Color.DodgerBlue }},
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
                leftAvatar={{
                    icon:item.icon, 
                    size: 'medium', 
                    containerStyle:{
                        borderColor:Color.DodgerBlue,
                        borderWidth: 1,
                    },
                    overlayContainerStyle: {
                        backgroundColor: Color.GhostWhite,
                    }
                }}
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
        SplashScreen.hide()

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
    },
})

export default Order
