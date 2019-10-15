import i18n from 'i18n-js'

import {LocalizedStrings} from 'interfaces/TranslationInterface'

import en_US from 'translations/en-US'
import pt_BR from 'translations/pt-BR'
import { LanguageProps } from 'interfaces/SettingsInterface'

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

export const supportedLanguages : Array<LanguageProps> = [
    {id: 'system', name: 'System'},
    {id: 'pt-BR', name: 'Português Brasileiro'},
    {id: 'en-US', name: 'English US'},
]
export default i18n