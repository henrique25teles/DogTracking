import { Reducer } from 'redux'
import { OrdersActionTypes, OrdersState } from 'types/OrdersTypes'

const INITIAL_STATE: OrdersState = {
    Orders: [],
}

const reducer: Reducer<OrdersState> = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case OrdersActionTypes.ADD_ORDER:
            state.Orders.push(action.payload.order)
            
            return {...state}
        case OrdersActionTypes.UPDATE_ORDER:
            const orderToUpdate = state.Orders.find(order => order.Id === action.payload.order.Id)
            orderToUpdate.Details = {...action.payload.order.Details}
            
            return {...state}
        case OrdersActionTypes.DELETE_ORDER:
            return {
                ...state,
                Orders:[
                    ...state.Orders.filter(order => order.Id !== action.payload.order.Id)
                ],
            }
        default: 
            return state
    }
}

export default reducer
