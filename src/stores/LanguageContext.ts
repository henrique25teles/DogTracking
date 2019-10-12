import React from 'react'
import localizationApi from 'translations/Localization'

import {LocalizationProps} from 'translations/interfaces'

export interface LocalizationContextProps {
    language: LocalizationProps,
    setLanguage: Function
}

// const localizationApi = Localization;

// const toggleLanguage = (locale: string) => Localization(locale);

export const defaultLanguage : LocalizationProps = {
    menu: {
        orders: localizationApi.t('menu.orders'),
        settings: localizationApi.t('menu.settings'),
        about: localizationApi.t('menu.about'),
        theme: localizationApi.t('menu.theme')
    }
}

export default React.createContext<LocalizationContextProps>(null);