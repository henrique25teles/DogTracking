export enum SettingsActionTypes {
    CHANGE_LANGUAGE = '@settings/CHANGE_LANGUAGE',
}

export interface Language {
    Id: number
    Locale: string
    Name: string
    Symbol: string
}

export interface SettingsState {
    SelectedLanguage: Language,
    Languages: Language[],
}