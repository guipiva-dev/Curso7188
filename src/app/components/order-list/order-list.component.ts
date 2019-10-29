import { NavController } from '@ionic/angular';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { OrderModel } from 'src/app/models/order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {

  orders: OrderModel[];

  constructor(private dataService: DataService,
    private navCtrl: NavController) { }

  ngOnInit() {

    this.dataService.getOrders()
      .subscribe(
        (res) => {
          this.orders = res;
        },
        (err) => {
          console.log(err);
        }
      );
  }

  goToOrder(order: string) {
    this.navCtrl.navigateRoot(`/orders/${order}`);
  }

}
