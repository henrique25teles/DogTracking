

export interface LanguageProps {
    id: string,
    name: string,
}

export interface Language {
    selectedLanguage: LanguageProps,
    languages: Array<LanguageProps>
}

export interface SettingsState {
    language: Language,
}