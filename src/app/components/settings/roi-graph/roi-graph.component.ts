import { Component } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';  // Import the ChartsModule
@Component({
  selector: 'app-roi-graph',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './roi-graph.component.html',
  styleUrl: './roi-graph.component.css'
})
export class RoiGraphComponent {
  barChartType: ChartType = 'bar';

  barChartData: ChartConfiguration['data'] = {
    labels: ['2021','2022', '2023', '2024'],
    datasets: [
      {
        label: 'Sample Data',
        data: [10, 20, 15, 25],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
      }
    ]
  }
  barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'ROI Trend'
      }
    }
  };
}
