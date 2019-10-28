import { Reducer } from 'redux'
import {SettingsState, Language, SettingsActionTypes} from 'types/SettingsTypes'
import {locale as deviceLocale} from 'expo-localization'

const languages: Language[] = [
    {Id: 1, Locale: deviceLocale, Name: 'System', Symbol:':round_pushpin:' },
    {Id: 2, Locale: 'pt-BR', Name: 'Português Brasileiro', Symbol: ':flag-br:'},
    {Id: 3, Locale: 'en-US', Name: 'English US', Symbol: ':us:'},
]

const INITIAL_STATE: SettingsState = {
    SelectedLanguage: languages[0],
    Languages: languages
}

const reducer: Reducer<SettingsState> = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SettingsActionTypes.CHANGE_LANGUAGE:
            return {...state, SelectedLanguage: action.payload.language}
        default: 
            return state
    }
}

export default reducer
