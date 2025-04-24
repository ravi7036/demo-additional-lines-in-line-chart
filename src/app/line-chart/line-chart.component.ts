import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  standalone: false
})
export class LineChartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  
  chartOptions: Highcharts.Options = {
    // Basic chart configuration
    title: { text: 'Chart with Vertical Lines' },
    series: [{
      type: 'line',
      data: [0, 10, 30, 20, 40, 50, 70, 60, 80, 90, 100]
    }],
    
    // Adding vertical lines
    xAxis: {
      plotLines: [{
        color: 'red',
        width: 3,
        value: 2, // X-axis value where the line should appear
        label: {
          text: 'first 10 meters',
          align: 'left',
          style: {
            color: 'gray'
          },
          
        },
        zIndex: 5 // To make sure it appears above the series
      },{
        color: 'yellow',
        width: 3,
        value: 4, // X-axis value where the line should appear
        label: {
          text: 'first 10 meters',
          align: 'left',
          style: {
            color: 'gray'
          },
          
        },
        zIndex: 5 // To make sure it appears above the series
      },
      {
        color: 'green',
        width: 3,
        value: 6,
        //dashStyle: 'Dash', // Makes it a dashed line
        label: {
          text: 'last 10 meters',
          align: 'left',
          y: 50
        }
      },
      {
        color: 'yellow',
        width: 3,
        value: 8,
        //dashStyle: 'Dash', // Makes it a dashed line
        label: {
          text: 'last 10 meters',
          align: 'left',
          y: 50
        }
      },{
        color: 'red',
        width: 3,
        value: 10,
        //dashStyle: 'Dash', // Makes it a dashed line
        label: {
          text: 'last 10 meters',
          align: 'left',
          y: 50
        }
      }]
    }
  };
}