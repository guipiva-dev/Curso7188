import { CustomerModel } from './customer.model';
import { OrderItemModel } from './order-item.model';

export class OrderModel {
    
    constructor(
        public _number: string,
        public date: string,
        public status: string,
        public total: number,
        public customer: CustomerModel,
        public items: OrderItemModel[]
    ) {
        
    }
}