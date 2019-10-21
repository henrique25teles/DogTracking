import { ModelBase } from "models/ModelBase";

export class OrderDetail implements ModelBase {
    Id: string
    Locale: string
    Status: string
    Observation: string
    TrackedAt: Date
}