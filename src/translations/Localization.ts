import * as Localization from 'expo-localization'
import i18n from 'i18n-js'

import {LocalizationProps, LocalizedStrings} from 'translations/interfaces'

const en_US: LocalizationProps = require('translations/en-US.json')
const pt_BR: LocalizationProps = require('translations/pt-BR.json')

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
i18n.locale = Localization.locale

export default i18n;