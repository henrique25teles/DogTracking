import React from 'react'

export interface LocalizationContextProps {
    language: string,
    changeLanguage: Function
}

export default React.createContext<LocalizationContextProps>(null);