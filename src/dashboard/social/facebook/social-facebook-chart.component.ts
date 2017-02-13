import { Component, OnInit, OnDestroy } from '@angular/core';

import { ChartType } from 'angular2-chartist';

import * as Chartist from 'chartist';

declare var require: any;

import * as _ from 'lodash';

@Component({
    selector: 'social-facebook-chart',
    templateUrl: './social-facebook-chart.component.html',
    styleUrls: ['./social-facebook-chart.component.scss']
})
export class SocialFacebookChartComponent implements OnInit, OnDestroy {
    
    data: Chartist.IChartistData;
    type: ChartType;
    options: any;

    constructor() {

    }

    ngOnInit() {
      this.data = {
        "labels": ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        "series":[this.getSocialChartData(20,40,6)]
      }
      this.type = 'Line';
      this.options = {
        showArea:false,
        low:0,
        fullWidth:true,
        chartPadding: {
            left:10,
            right:30,
            top:30
        }
      };
    }

    ngAfterViewInit() {
      
    }

    getSocialChartData(a,b,c) {

      var _return = [];
      for (var i = 0; i < c; i++) {
          _return.push(_.random(a,b));
      }
      return _return;

    }

    ngOnDestroy() {

    }
}