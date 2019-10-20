import {action} from 'typesafe-actions'
import { ApplicationStatusTypes, Languages } from 'store/ducks/applicationStatus/types'

const setPreLoaded = () => action(ApplicationStatusTypes.SET_PRE_LOADED)

const setIsReady = () => action(ApplicationStatusTypes.SET_ISREADY)

const setIsReadySettings = (language: Languages) => action(ApplicationStatusTypes.SET_ISREADY_SETTINGS, {language})

const changeLanguage = (language: Languages) => action(ApplicationStatusTypes.CHANGE_LANGUAGE, {language})

export {setPreLoaded, setIsReady, setIsReadySettings, changeLanguage }