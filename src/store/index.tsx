import {createStore, Store, Reducer} from 'redux'
import {persistStore, persistReducer, PersistConfig, Persistor} from 'redux-persist'
import { PersistPartial } from 'redux-persist/es/persistReducer'
import { AsyncStorage } from 'react-native'

import rootReducer from 'store/ducks/rootReducer'
import { OrdersState } from 'types/OrdersTypes'
import { SettingsState } from 'types/SettingsTypes'

export interface ApplicationState {
    orders: OrdersState
    settings: SettingsState
}

const persistConfig: PersistConfig<ApplicationState> = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer: Reducer<ApplicationState & PersistPartial> = persistReducer<ApplicationState>(persistConfig, rootReducer)

const store: Store<ApplicationState> = createStore(persistedReducer)

export const persistor: Persistor = persistStore(store)

export default store
