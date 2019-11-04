import { 
    LocalizationProps, 
    OrdersProps, 
    SettingsProps, 
    ThemesProps, 
    AboutProps 
} from "types/TranslationInterface";

const Order: OrdersProps = {
    AddOrder: "Order.AddOrder",
    AllOrders: "Order.AllOrders",
    Carrier: "Order.Carrier",
    DeliveredOrders: "Order.DeliveredOrders",
    Details: "Order.Details",
    Order: "Order.Order",
    OrderName: "Order.OrderName",
    OrderNamePlaceholder: "Order.OrderNamePlaceholder",
    Orders: "Order.Orders",
    PendingOrders: "Order.PendingOrders",
    TrackingNumber: "Order.TrackingNumber",
    TrackingNumberPlaceholder: "Order.TrackingNumberPlaceholder",
}

const Settings: SettingsProps = {
    Language: "Settings.Language",
    SelectLanguage: "Settings.SelectLanguage",
    Settings: "Settings.Settings",
    SystemDefault: "Settings.SystemDefault", 
}

const Themes: ThemesProps = {
    Themes: "Themes.Themes",
}

const About: AboutProps = {
    About: "About.About",
}

const Translate: LocalizationProps = {
    Order,
    Settings,
    Themes,
    About,
}

export default Translate
