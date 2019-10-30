import { CustomerModel } from './customer.model';
import { OrderItemModel } from './order-item.model';

export class OrderModel {
    constructor(
        // tslint:disable-next-line:variable-name
        public _number: string,
        public date: string,
        public status: string,
        public total: number,
        public discount: number,
        public deliveryFee: number,
        public customer: CustomerModel,
        public items: OrderItemModel[]
    ) {
    }
}
