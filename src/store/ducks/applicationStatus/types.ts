export enum ApplicationStatusTypes {
    SET_PRE_LOADED = '@applicationStatus/SET_PRE_LOADED',
    SET_ISREADY = '@applicationStatus/SET_ISREADY',
    SET_ISREADY_SETTINGS = '@applicationStatus/SET_ISREADY_SETTINGS',
    CHANGE_LANGUAGE = '@applicationStatus/CHANGE_LANGUAGE',
}

export interface Languages {
    id: number
    locale: string
    name: string
    symbol: string
}

export interface ApplicationStatusState {
    readonly isLoading: boolean
    readonly isReady: boolean
    readonly selectedLanguage: Languages
    readonly Languages: Languages[]
}