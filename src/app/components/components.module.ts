import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingComponent } from './loading/loading.component';
import { MonthlySalesChartComponent } from './monthly-sales-chart/monthly-sales-chart.component';

@NgModule({
  declarations: [
    LoadingComponent,
    MonthlySalesChartComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    LoadingComponent,
    MonthlySalesChartComponent
  ]
})
export class ComponentsModule { }
