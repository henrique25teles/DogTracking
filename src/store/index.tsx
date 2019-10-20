import {createStore, Store} from 'redux'

import rootReducer from 'store/ducks/rootReducer'
import { ApplicationStatusState } from 'store/ducks/applicationStatus/types'

export interface ApplicationState {
    applicationStatus: ApplicationStatusState
}

const store: Store<ApplicationState> = createStore(rootReducer)

export default store
