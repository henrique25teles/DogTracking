import { ModelBase } from "models/ModelBase";
import { OrderDetail } from "./OrderDetail";

export class Order implements ModelBase {
    Id: string
    Code: string;
    IsDelivered: boolean;
    PostedAt: Date;
    UpdatedAt: Date;
    IsInvalid: boolean;
    Details: OrderDetail
}
