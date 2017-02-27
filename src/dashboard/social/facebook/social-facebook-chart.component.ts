import { Component, OnInit, OnDestroy } from '@angular/core';

import * as _ from 'lodash';

import { SalesService } from '../../../services/sales.service';

@Component({
    selector: 'social-facebook-chart',
    templateUrl: './social-facebook-chart.component.html',
    styleUrls: ['./social-facebook-chart.component.scss']
})
export class SocialFacebookChartComponent implements OnInit, OnDestroy {

  
    // lineChart
    public lineChartData:Array<any> = [
      {data: [], label: 'Facebook'}
    ];
    public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public lineChartOptions:any = {
      responsive: true,
      padding:0,
      legend: {
        display: false,
        fontColor:"white"
      },
      tooltips: {
        enabled: false
      },
      scales: { 
        yAxes: [{
            ticks: {
                fontColor: "white"
            }
        }],
        xAxes: [{
            ticks: {
                fontColor: "white"
            }
        }]
      }
    };
    public lineChartColors:Array<any> = [
      {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        borderColor: 'rgba(255, 255, 255, 1)',
        pointBackgroundColor: 'rgba(255, 255, 255, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 255, 255, 0.8)',
      }
    ];
    public lineChartLegend:boolean = true;
    public lineChartType:string = 'line';

    constructor(private salesService:SalesService) {
      this.salesService.getSocial().then((result) => {
        this.lineChartData = result;
      });
    }

    ngOnInit() {
      
    }
   
    // events
    public chartClicked(e:any):void {
      console.log(e);
    }
   
    public chartHovered(e:any):void {
      console.log(e);
    }

    ngOnDestroy() {

    }
}