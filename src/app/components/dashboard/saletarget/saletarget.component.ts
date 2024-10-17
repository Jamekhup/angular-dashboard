import { AfterViewInit, Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-saletarget',
  standalone: true,
  imports: [],
  templateUrl: './saletarget.component.html',
  styles: ``
})
export class SaletargetComponent implements AfterViewInit{
  ngAfterViewInit() {
    const ctx = document.getElementById('myDoughnutChart') as HTMLCanvasElement;

    // Set up data values
    const dataValue = 80; 
    const totalValue = 100; 
    const backgroundColor = 'rgba(1,221,151, 0.5)'; 
    const dataColor = 'rgba(1,221,151, 1)'; 

    const myDoughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Reach', 'Not Reach'], 
        datasets: [{
          label: 'Votes',
          data: [dataValue, totalValue - dataValue], 
          backgroundColor: [dataColor, backgroundColor], 
          borderColor: [
            'rgba(255, 255, 255, 1)'
          ],
          borderWidth: 2,
        }]
      },
      options: {
        responsive: true,
        cutout: '60%', 
        plugins: {
          legend: {
            display:false
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => {
                return `${tooltipItem.label}: ${tooltipItem.raw}`; 
              }
            }
          },
        }
      },
      plugins: [{
        id: 'doughnutText', 
        beforeDraw: (chart) => {
          const ctx = chart.ctx;
          const width = chart.width;
          const height = chart.height;
          const fontSize = (height / 90).toFixed(2);
          const text = `${dataValue}`; 
          ctx.restore();
          ctx.font = `${fontSize}em sans-serif`;
          ctx.textBaseline = 'middle';
          const textX = Math.round((width - ctx.measureText(text).width) / 2); 
          const textY = height / 2;
          ctx.fillText(text + '%', textX, textY); 
          ctx.save();
        }
      }]
    });
  }
}
