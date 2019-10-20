import i18n from 'i18n-js'
const emoji = require('node-emoji')

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

export const defaultLocale = i18n.defaultLocale = 'en'

export const supportedLanguages : Array<LanguageProps> = [
    {id: 'system', name: 'System', symbol:`${emoji.get(':round_pushpin:')}` },
    {id: 'pt-BR', name: 'Português Brasileiro', symbol: `${emoji.get(':flag-br:')}`},
    {id: 'en-US', name: 'English US', symbol: `${emoji.get(':us:')}`},
]
export default i18n