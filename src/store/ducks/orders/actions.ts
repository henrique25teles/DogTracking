import {action} from 'typesafe-actions'
import { Order, OrdersActionTypes } from 'types/OrdersTypes'

const addOrder = (order: Order) => action(OrdersActionTypes.ADD_ORDER, { order })

const updateOrder = (order: Order) => action(OrdersActionTypes.UPDATE_ORDER, { order })

const deleteOrder = (order: Order) => action(OrdersActionTypes.DELETE_ORDER, { order })

export { addOrder, updateOrder, deleteOrder }
