import { Reducer } from 'redux'
import { OrdersActionTypes, OrdersState } from 'types/OrdersTypes'

const INITIAL_STATE: OrdersState = {
    Orders: [],
}

const reducer: Reducer<OrdersState> = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case OrdersActionTypes.ADD_ORDER:
            return {...state, Orders: [...state.Orders, action.payload.order]}
        case OrdersActionTypes.UPDATE_ORDER:
            return {
                ...state, 
                Orders:[
                    ...state.Orders.filter(order => order.Id !== action.payload.order.Id),
                    action.payload.order
                ],
            }
        case OrdersActionTypes.DELETE_ORDER:
            return {
                ...state,
                Orders:[
                    ...state.Orders.filter(order => order.Id !== action.payload.order.Id),
                    action.payload.order
                ],
            }
        default: 
            return state
    }
}

export default reducer
