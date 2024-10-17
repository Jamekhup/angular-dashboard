import { Component, AfterViewInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Chart,ChartOptions } from 'chart.js/auto';
import { weeklySaleTypes } from '../../../models/type';

@Component({
  selector: 'app-weeklysales',
  standalone: true,
  imports: [],
  templateUrl: './weeklysales.component.html',
  styles: ``
})
export class WeeklysalesComponent implements AfterViewInit, OnChanges {

  @Input() weeklySales!:weeklySaleTypes;
  chart: any;

  ngAfterViewInit() {
    this.createChart();
    console.log(this.weeklySales);
  }

 
  

  ngOnChanges(changes: SimpleChanges) {
    if (changes['weeklySales'] && this.chart) {
      this.updateChartData();
    }
  }

  createChart() {
    
    const ctx = document.getElementById('weeklySale') as HTMLCanvasElement;

    if (!ctx) {
      return;
    }

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
        datasets: [{
          data: [
            this.weeklySales?.monday || 0, 
            this.weeklySales?.tuesday || 0, 
            this.weeklySales?.wednesday || 0, 
            this.weeklySales?.thursday || 0, 
            this.weeklySales?.friday || 0, 
            this.weeklySales?.saturday || 0,
        ],
          backgroundColor: [ 
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            display:false
          },
          x:{
            display:true
          }
        },
        plugins:{
          legend: {
            display: false 
          }
        }
      },
    });
  }


  updateChartData() {
    this.chart.data.datasets[0].data = [
      this.weeklySales.monday,
      this.weeklySales.tuesday,
      this.weeklySales.wednesday,
      this.weeklySales.thursday,
      this.weeklySales.friday,
      this.weeklySales.saturday
    ];
    this.chart.update();
  }
}
