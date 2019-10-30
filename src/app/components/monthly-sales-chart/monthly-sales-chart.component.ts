import { DataService } from './../../services/data.service';
import { Component, AfterViewInit } from '@angular/core';

declare var Chart: any;

@Component({
  selector: 'app-monthly-sales-chart',
  templateUrl: './monthly-sales-chart.component.html',
  styleUrls: ['./monthly-sales-chart.component.scss'],
})
export class MonthlySalesChartComponent implements AfterViewInit {

  data: any;
  constructor(private dataService: DataService) { }

  ngAfterViewInit() {
    this.dataService.getMonthlySalesChartData()
    .subscribe(
      (res) => {
        this.data = res;
        this.render();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  render() {
    const el: any = document.getElementById('myChart');
    const ctx = el.getContext('2d');

    const myChart = new Chart(ctx, {
      type: 'bar',
      data: this.data,
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }
}
