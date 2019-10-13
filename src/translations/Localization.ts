import * as Localization from 'expo-localization'
import i18n from 'i18n-js'

import {LocalizedStrings, i18nProps} from 'translations/interfaces'

import en_US from 'translations/en-US'
import pt_BR from 'translations/pt-BR'

const localizedStrings : LocalizedStrings = {
    "en": en_US,
    "en-US": en_US,
    "pt": pt_BR,
    "pt-BR": pt_BR,
    "pt-PT": pt_BR,
}

i18n.fallbacks = true
i18n.translations = localizedStrings
i18n.defaultLocale = 'en'

export default (locale?: string) : i18nProps => {
    i18n.locale = locale || Localization.locale;
    return i18n;
} ;