import React, {FunctionComponent, useState} from 'react';
import { View, Picker, StyleSheet, Alert } from 'react-native';
import { Input, Button } from 'react-native-elements';

import Translate from 'translations/Translate';
import { StackNavOptions } from 'types/NavigationInterface';
import { OrderCompany } from 'types/OrdersTypes';
import trackOrder from 'services/TrackingService'

const OrderAdd: FunctionComponent<StackNavOptions> = props => {
    const [shippingCompany, setShippingCompany] = useState<OrderCompany>(OrderCompany.Correios)
    const [trackingNumber, setTrackingNumber] = useState<string>('')
    const [orderName, setOrderName] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const shippingCompanyItems: Array<{label:string, value:OrderCompany}> = [
      {label: 'Correios', value: OrderCompany.Correios},
      {label: 'Total Express', value: OrderCompany.TotalExpress},
    ]

    function changeCarrier(itemValue: OrderCompany, itemIndex: number): void {
        setShippingCompany(itemValue)
    }

    async function addNewOrder() {
        setIsLoading(true)
        
        try {
            const tracking = await trackOrder(trackingNumber, shippingCompany)
    
            console.log(tracking)
        } catch(error) {
            //console.log(error.response)
            if (error.response.data.code == 404){
                Alert.alert('Erro', 'Não encontrado')
            } else if (error.response.data.code == 422) {
                Alert.alert(`Erro...`, 'Código Inválido')
            }
        } finally {
            setIsLoading(false)
        }
    }

    function goBack() {
        props.navigation.goBack()
    }

    const saveIcon = {
        name: 'content-save-outline',
        type: 'material-community',
    }

    const backIcon = {
        name: 'backspace-outline',
        type: 'material-community',
    }

    return (
        <View>
            <Input 
                label={props.screenProps.t(Translate.Order.OrderName)}
                placeholder={props.screenProps.t(Translate.Order.OrderNamePlaceholder)}
                containerStyle={styles.row}
                value={orderName}
                onChangeText={setOrderName}
            />
            <Input 
                label={props.screenProps.t(Translate.Order.TrackingNumber)}
                placeholder={props.screenProps.t(Translate.Order.TrackingNumberPlaceholder)}
                containerStyle={styles.row}
                value={trackingNumber}
                onChangeText={setTrackingNumber}
            />
            <View style={styles.row}>
                <Picker
                    mode="dialog"
                    selectedValue={shippingCompany}
                    onValueChange={changeCarrier}
                >
                    {
                        shippingCompanyItems.map((shipComp, index) => (
                            <Picker.Item 
                                key={index.toString()}
                                value={shipComp.value}
                                label={shipComp.label}
                            />
                        ))
                    }
                </Picker>
            </View>
            <View style={[styles.row, styles.buttons]}>
                    <Button 
                        iconRight={true}
                        icon={saveIcon}
                        onPress={addNewOrder}
                        disabled={isLoading}
                    />
                    <Button
                        type="outline"
                        iconRight={true}
                        icon={backIcon}
                        onPress={goBack}
                        disabled={isLoading}
                    />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        padding: '1%'
    },
    buttons: {
        flexDirection: 'row'
    }
})

export default OrderAdd
