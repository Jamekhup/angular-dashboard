import { AfterViewInit, Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-productclass',
  standalone: true,
  imports: [],
  templateUrl: './productclass.component.html',
  styles: ``
})
export class ProductclassComponent implements AfterViewInit {
  ngAfterViewInit() {
    const ctx = document.getElementById('productClass') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Electronics', 'Clothes', 'Beauty Care', 'Books','Toys'],
        datasets: [{
          label: 'Votes',
          data: [12, 19, 3, 5,12,4],
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 2,
        }]
      },
      options: {
        responsive: true,
        cutout: '60%',
        plugins: {
          legend: {
            position: 'left',
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => {
                return `${tooltipItem.label}: ${tooltipItem.raw}`;
              }
            }
          }
        }
      },
    });
  }
}
