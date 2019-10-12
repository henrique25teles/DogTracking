interface MenuProps {
    orders: string,
    settings: string,
    theme: string,
    about: string
}

export interface LocalizationProps {
    menu: MenuProps,
}

export interface LocalizedStrings {
    "en": LocalizationProps,
    "en-US": LocalizationProps,
    "pt": LocalizationProps,
    "pt-BR": LocalizationProps,
    "pt-PT": LocalizationProps,
}