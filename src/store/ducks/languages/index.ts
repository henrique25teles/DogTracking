import {LanguagesTypes} from 'store/ducks/languages/types'

function changeLanguage(language) {
    return {
        type: LanguagesTypes.CHANGE_LANGUAGE,
        payload: language
    }
}

function changeLocale(locale) {
    return {
        type: LanguagesTypes.CHANGE_LOCALE,
        payload: locale
    }
}