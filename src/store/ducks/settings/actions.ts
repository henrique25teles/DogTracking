import {action} from 'typesafe-actions'
import {SettingsActionTypes, Language} from 'types/SettingsTypes'

export const changeLanguage = (language: Language) => action(SettingsActionTypes.CHANGE_LANGUAGE, { language })
