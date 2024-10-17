import { AfterViewInit, Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-customersatisfaction',
  standalone: true,
  imports: [],
  templateUrl: './customersatisfaction.component.html',
  styles: ``
})
export class CustomersatisfactionComponent implements AfterViewInit {
  ngAfterViewInit() {
    const ctx = document.getElementById('customerSatisfaction') as HTMLCanvasElement;

    const profit = ctx.getContext('2d')?.createLinearGradient(0, 0, 0, 100);
     if (profit) {
       profit.addColorStop(0, 'rgba(15,193,27, 0.3)');
       profit.addColorStop(1, 'rgba(21,165,45, 0.1)');
     }

     const sale = ctx.getContext('2d')?.createLinearGradient(33,15,252, 100);
     if (sale) {
       sale.addColorStop(0, 'rgba(33,15,252,0.3)');
       sale.addColorStop(1, 'rgba(33,15,252, 0.1)');
     }

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['One', 'Two', 'Three','four'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [6,9,5,8],
            borderColor:'rgba(21,165,45, 0.8)',
            backgroundColor: profit, 
            fill: true, 
            borderWidth: 2,
            tension: 0.5,
          },
          {
            label: 'Dataset 2',
            data: [3,5,8,7],
            borderColor: 'rgba(33,15,253, 0.6)',
            backgroundColor: sale, 
            fill: true, 
            borderWidth: 2,
            tension: 0.5,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          y: {
            display:false,
            beginAtZero: true,
          },
          x:{
            display:false,
            min:0
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
}
