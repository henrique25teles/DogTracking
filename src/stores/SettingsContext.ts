import React from 'react'
import Localization from 'translations/Localization';

const languageApi = Localization();

export interface LanguageProps {
    id: string,
    name: string,
}

interface Language {
    selectedLanguage: LanguageProps,
    languages: Array<LanguageProps>
}

export interface SettingsState {
    language: Language,
}

export const supportedLanguages : Array<LanguageProps> = [
    {id: 'system', name: languageApi.t('settingsOptions.systemDefault')},
    {id: 'pt-BR', name: 'Português Brasileiro'},
    {id: 'en-US', name: 'English US'},
]

const store = {
    state: {
      language: {
          id: 'pt-BR',
          name: 'Português Brasileiro'
      },
      languages: [
        {id: 'pt-BR', name: 'Português Brasileiro'},
        {id: 'en-US', name: 'English US'},
      ],
    }
  };

export default React.createContext<SettingsState>(null)