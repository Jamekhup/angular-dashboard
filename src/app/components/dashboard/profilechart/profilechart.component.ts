import { Component, AfterViewInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChartLine, faCircleXmark, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-profilechart',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './profilechart.component.html',
  styles: ``
})
export class ProfilechartComponent implements AfterViewInit{
  faChartLine=faChartLine;
  faCircleXmark=faCircleXmark;
  faCaretUp=faCaretUp;

  ngAfterViewInit() {
    const ctx = document.getElementById('profitChart') as HTMLCanvasElement;

     // Create a linear gradient
     const gradient = ctx.getContext('2d')?.createLinearGradient(0, 0, 0, 100);
     if (gradient) {
       gradient.addColorStop(0, 'rgba(15,193,27, 0.3)');
       gradient.addColorStop(1, 'rgba(21,165,45, 0.1)');
     }

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['One', 'Two', 'Three'],
        datasets: [{
          label: 'Sales',
          data: [25, 76, 65],
          fill: true, 
          backgroundColor: gradient, 
          borderColor: 'rgba(21,165,45, 0.8)', 
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
