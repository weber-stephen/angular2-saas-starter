import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard-component',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  
	private pages:Array<any> = [
		{
			label:'Dashboard',
			route:'dashboard'
		},
		{
			label:'Report History',
			route:'report-history'
		},
		{
			label:'Portfolio',
			route:'portfolio'
		},
		{
			label:'Alerts',
			route:'alerts'
		}
	];

	constructor(public router:Router) {

	}

	ngOnInit() {

	}

	ngOnDestroy() {

	}

}
