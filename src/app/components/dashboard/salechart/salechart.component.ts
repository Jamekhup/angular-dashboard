import { Component, AfterViewInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChartLine, faCircleXmark, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-salechart',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './salechart.component.html',
  styles: ``
})
export class SalechartComponent implements AfterViewInit {
  faChartLine=faChartLine;
  faCircleXmark=faCircleXmark;
  faCaretUp=faCaretUp;

  ngAfterViewInit() {
    const ctx = document.getElementById('saleChart') as HTMLCanvasElement;

     // Create a linear gradient
     const gradient = ctx.getContext('2d')?.createLinearGradient(33,15,252, 100);
     if (gradient) {
       gradient.addColorStop(0, 'rgba(33,15,252,0.3)');
       gradient.addColorStop(1, 'rgba(33,15,252, 0.1)');
     }

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['One', 'Two', 'Three'],
        datasets: [{
          label: 'Sales',
          data: [65, 35, 76],
          fill: true, 
          backgroundColor: gradient, 
          borderColor: 'rgba(33,15,253, 0.6)', 
          borderWidth: 2,
          tension: 0.5,
          pointRadius: 0
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            display:false,
            min: 0,
          },
          x:{
            display:false
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
