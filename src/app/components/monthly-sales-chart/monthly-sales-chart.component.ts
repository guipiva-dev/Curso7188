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
    )
  }

  render() {
    var el: any = document.getElementById("myChart");
    var ctx = el.getContext('2d');

    var myChart = new Chart(ctx, {
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
