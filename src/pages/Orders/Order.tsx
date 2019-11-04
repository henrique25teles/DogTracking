import React, { ReactNode, FunctionComponent } from 'react'
import { FlatList, StyleSheet, Button } from 'react-native'
import {ListItem, AvatarIcon, Avatar} from 'react-native-elements'

import track from 'services/TrackingService'
import Color from 'models/enums/Color'
import { OrderCompany } from 'types/OrdersTypes'
import { TabNavOptions } from 'types/NavigationInterface'
const emoji = require('node-emoji')
  
enum CountryEmoji {
    BR = ":flag-br:",
    US = ":us:"
}

const iconAdd: AvatarIcon = {
    name: "add",
    type: "material"
}

const Order: FunctionComponent<TabNavOptions> = props => {
    const state = {
        orders: [
            {name: "Pod", code: "OL789456123BR", type: "Prime", country:"BR", icon: {name: 'package', type:'octicon', color:Color.DodgerBlue }},
            {name: "Pod", code: "OL789456123BR", type: "Prime", country:"BR", icon: {name: 'earth', type:'material-community', color:Color.DodgerBlue }},
            {name: "Pod", code: "OL789456123BR", type: "Prime", country:"BR", icon: {name: 'cube-send', type:'material-community', color:Color.DodgerBlue }},
            {name: "Pod", code: "OL789456123BR", type: "Prime", country:"BR", icon: {name: 'archive', type:'evilicon', color:Color.DodgerBlue }},
            {name: "Pod", code: "OL789456123BR", type: "Prime", country:"BR", icon: {name: 'get-pocket', type:'font-awesome', color:Color.DodgerBlue }},
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
    
    function keyextractor(item, index): string {
        return index.toString()
    }

    function navigateAddOrder() {
        props.navigation.navigate('OrderAdd')
    }

    async function requestTracking() {
        try {
            const tracking = await track('LL660974473CN', OrderCompany.Correios)

            console.log(tracking)
        } catch(error) {
            console.log(error)

        }

    }

    function renderItem({item}) : ReactNode {
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

    return (
        <>
            <Button title="Vai na fé" onPress={requestTracking} />
            <FlatList 
                data={state.orders}
                keyExtractor={keyextractor.bind(this)}
                renderItem={renderItem.bind(this)}
            />
            <Avatar 
                rounded
                icon={iconAdd}
                size="medium"
                containerStyle={styles.buttonAdd}
                overlayContainerStyle={styles.buttonAddOverlay}
                onPress={navigateAddOrder}
            />
        </>
    )
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
    buttonAdd: {
        position:'absolute',
        right: 15,
        bottom: 15
    },
    buttonAddOverlay: {
        backgroundColor: Color.DodgerBlue
    }
})

export default Order
