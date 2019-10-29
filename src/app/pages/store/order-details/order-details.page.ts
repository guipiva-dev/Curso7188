import { StatusUtils } from './../../../utils/status.utils';
import { SecurityUtils } from './../../../utils/security.utils';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OrderModel } from 'src/app/models/order.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {

  order: OrderModel;

  constructor(private dataService: DataService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let number = this.route.snapshot.paramMap.get('number');
    this.dataService.getOrder(number)
      .subscribe(
        (res) => {
          this.order = res;
        },
        (err) => {
          console.log(err);
        }
      );
  }

  isManager(): boolean {
    return SecurityUtils.isInRole('manager');
  }

  translatedOrderStatus(status: string): string {
    return StatusUtils.convert(status);
  }
}
