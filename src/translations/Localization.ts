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
i18n.defaultLocale = 'en'

export const supportedLanguages : Array<LanguageProps> = [
    {id: 'system', name: `${emoji.get(':round_pushpin:')} System`},
    {id: 'pt-BR', name: `${emoji.get(':flag-br:')}  Português Brasileiro`},
    {id: 'en-US', name: `${emoji.get(':us:')}  English US`},
]
export default i18n