import { Component } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';  // Import the ChartsModule
import { ChartConfiguration, ChartType } from 'chart.js';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgChartsModule,MatToolbarModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  barChartType: ChartType = 'bar';
  lineChartType: ChartType = 'line';

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
        text: 'Chart 1'
      }
    }
  };

  lineChartData: ChartConfiguration['data'] = {
    labels: ['2021','2022', '2023', '2024'],
    datasets: [
      {
        label: 'Sample Data',
        data: [100, 90, 120, 130],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
      }
    ]
  }
  lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Chart 2'
      }
    }
  };
  barChartData2: ChartConfiguration['data'] = {
    labels: ['2021','2022', '2023', '2024'],
    datasets: [
      {
        label: 'Sample Data',
        data: [10, 20, 15, 25],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
      }
    ]
  }
  barChartOptions2: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Chart 1'
      }
    }
  };
}
