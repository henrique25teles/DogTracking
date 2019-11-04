export interface OrdersProps {
    AddOrder: string
    AllOrders: string
    Carrier: string
    DeliveredOrders:string
    Details: string
    Order: string
    OrderName: string
    OrderNamePlaceholder: string
    Orders: string
    PendingOrders: string
    TrackingNumber: string
    TrackingNumberPlaceholder: string
}

export interface SettingsProps {
    Settings: string
    Language: string
    SelectLanguage: string
    SystemDefault: string
}

export interface ThemesProps {
    Themes: string
}

export interface AboutProps {
    About: string
}

export class LocalizationProps {
    Order: OrdersProps 
    Settings: SettingsProps
    Themes: ThemesProps
    About: AboutProps
}

export interface LocalizedStrings {
    "en": LocalizationProps
    "en-US": LocalizationProps
    "pt": LocalizationProps
    "pt-BR": LocalizationProps
    "pt-PT": LocalizationProps
}
