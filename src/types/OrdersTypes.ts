export enum OrdersActionTypes {
    ADD_ORDER = '@orders/ADD_ORDER',
    UPDATE_ORDER = '@orders/UPDATE_ORDER',
    DELETE_ORDER = '@orders/DELETE_ORDER',
}

export enum OrderCompany {
    Correios,
    TotalExpress
}

export interface OrderDetail {
    Id: string
    Locale: string
    Status: string
    Observation: string
    TrackedAt: Date
}

export interface Order {
    Id: string
    Code: string
    IsDelivered: boolean
    PostedAt: Date
    UpdatedAt: Date
    IsInvalid: boolean
    Details: OrderDetail[]
}

export interface OrdersState {
    Orders: Order[],
}