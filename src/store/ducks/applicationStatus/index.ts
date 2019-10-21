import { Reducer } from 'redux'
import { ApplicationStatusTypes, ApplicationStatusState } from 'store/ducks/applicationStatus/types'
import {locale as deviceLocale} from 'expo-localization'

const INITIAL_STATE: ApplicationStatusState = {
    isLoading: true,
    isReady: false,
    selectedLanguage: {id: 1, locale: deviceLocale, name: 'System', symbol:':round_pushpin:' },
    Languages: [
        {id: 1, locale: deviceLocale, name: 'System', symbol:':round_pushpin:' },
        {id: 2, locale: 'pt-BR', name: 'Português Brasileiro', symbol: ':flag-br:'},
        {id: 3, locale: 'en-US', name: 'English US', symbol: ':us:'},
    ]
}

const reducer: Reducer<ApplicationStatusState> = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ApplicationStatusTypes.SET_PRE_LOADED:
            return {...state, isLoading: false}
        case ApplicationStatusTypes.SET_ISREADY:
            return {... state, isReady: true}
        case ApplicationStatusTypes.SET_ISREADY_SETTINGS:
            return {... state, isReady: true, selectedLanguage: action.payload.language}
        case ApplicationStatusTypes.CHANGE_LANGUAGE:
            return {... state, selectedLanguage: action.payload.language}
        default: 
            return state
    }
}

export default reducer
