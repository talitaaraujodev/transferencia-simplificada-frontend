import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { faChartSimple, faListUl } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  chart!: Chart;
  faChart = faChartSimple;
  faList = faListUl
  ngOnInit(): void {
    this.createChart();
  }
  createChart() {
    this.chart = new Chart('chartTransfers', {
      type: 'bar', // this denotes tha type of chart
      data: {
        labels: [
          'Janeiro',
          'Fevereiro',
          'Marco',
          'Abril',
          'Maio',
          'Junho',
          'Julho',
        ],
        datasets: [
          {
            label: 'Tranferências',
            data: [10, 20, 26, 40, 15, 17, 11],
            borderWidth: 1,
            backgroundColor: '#5B86E5',
            borderColor: '#5B86E5',
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function (value, index, ticks) {
                return 'R$' + value;
              },
            },
          },
        },
      },
    });
  }
}
