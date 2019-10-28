export interface SettingsProps {
    language: string,
    selectLanguage: string,
    systemDefault: string,
}

export interface LocalizationProps {
    order: string,
    orders: string,
    pendingOrders: string,
    deliveredOrders: string,
    allOrders: string,
    details: string,
    settings: string,
    settingsOptions: SettingsProps,
    themes: string,
    about: string,
}

export interface LocalizedStrings {
    "en": LocalizationProps,
    "en-US": LocalizationProps,
    "pt": LocalizationProps,
    "pt-BR": LocalizationProps,
    "pt-PT": LocalizationProps,
}
