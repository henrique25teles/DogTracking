import {combineReducers} from 'redux'

import orders from 'store/ducks/orders'
import settings from 'store/ducks/settings'

export default combineReducers({
    orders,
    settings,
})