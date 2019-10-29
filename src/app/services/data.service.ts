import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { OrderModel } from '../models/order.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl: string = 'http://localhost:7188';

  constructor(private http: HttpClient) { }

  public authenticate(data: any) {
    return this.http.post(`${this.baseUrl}/v1/login`, data);
  }

  public getMonthlySalesChartData() {
    return this.http.get(`${this.baseUrl}/v1/reports/ms`);
  }

  public getOrders(): Observable<OrderModel> {
    return this.http.get<OrderModel>(`${this.baseUrl}/v1/orders/`);
  }

  public getOrder(order: string): Observable<OrderModel> {
    return this.http.get<OrderModel>(`${this.baseUrl}/v1/orders/${order}`);
  }


}
