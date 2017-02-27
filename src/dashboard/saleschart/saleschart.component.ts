import { Component, OnInit, OnDestroy } from '@angular/core';

import { SalesService } from '../../services/sales.service';

@Component({
  selector: 'sales-chart',
  templateUrl: './saleschart.component.html',
  styleUrls: ['./saleschart.component.scss']
})
export class SalesChartComponent implements OnInit, OnDestroy {
  
  // lineChart
  public lineChartData:Array<any> = [
    {data: [], label: 'Series A'},
    {data: [], label: 'Series B'}
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions:any = {
    responsive: true,
    padding:0
  };
  public lineChartColors:Array<any> = [
    {
      backgroundColor: 'rgba(80, 225, 220, 0.6)',
      borderColor: 'rgba(80, 225, 220, 1)',
      pointBackgroundColor: 'rgba(80, 225, 220, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(80, 225, 220, 0.8)',
    },
    {
      backgroundColor: 'rgba(80, 147, 225, 0.6)',
      borderColor: 'rgba(80, 147, 225, 1)',
      pointBackgroundColor: 'rgba(80, 147, 225, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(80, 147, 225, 0.8)',
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  constructor(private salesService:SalesService) {
    this.salesService.get().then((result) => {
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