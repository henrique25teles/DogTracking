import React from 'react'

export interface LocalizationContextProps {
    language: string,
    setLanguage: Function
}

export default React.createContext<LocalizationContextProps>(null);