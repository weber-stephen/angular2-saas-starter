import { Component } from '@angular/core';

import { ChartType } from 'angular2-chartist';

import * as Chartist from 'chartist';

declare var require: any;

import { SalesService } from '../../services/sales.service';

@Component({
  selector: 'sales-chart',
  templateUrl: './saleschart.component.html',
  styleUrls: ['./saleschart.component.scss']
})
export class SalesChartComponent {
  data: Promise<Chartist.IChartistData>;
  type: ChartType;
  options: any;

  constructor(private salesService:SalesService) {
    this.data = this.salesService.get();
    this.type = 'Line';
    this.options = {
      showArea:true,
      low:0,
      high:1500,
      fullWidth:true,
      axisX: {
          offset:30
      },
      axisY: {
          offset:30,
          labelInterpolationFnc:function(value){
              return 0 === value?null:value;
          }
      },
      scaleMinSpace:50,
      chartPadding: {
          left:10,
          right:50,
          top:40
      }
    };
  }
}