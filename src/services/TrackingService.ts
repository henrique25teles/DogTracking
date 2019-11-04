import { OrderCompany } from "types/OrdersTypes";
import Axios from "axios";

export default async function GetTrackingInfo(trackingCode: string, orderCompany: OrderCompany) {
    switch(orderCompany) {
        case OrderCompany.Correios:
            const response = await Axios.get(`http://rastrojs-api.herokuapp.com/track/${trackingCode}`)
            
            console.log(response)
            
            const tracking = response.data

            return tracking
        case OrderCompany.TotalExpress:
            throw new Error('Não implementado ainda')
    }
}