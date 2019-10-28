import i18n from 'i18n-js'
const emoji = require('node-emoji')

import {LocalizedStrings} from 'types/TranslationInterface'

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

export default i18n