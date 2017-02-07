import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'navigation-component',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {
  
	pages:Array<any> = [
		{
			label:'Dashboard',
			route:'/'
		},
		{
			label:'Messages',
			route:'/messages'
		},
		{
			label:'Users',
			route:'/users'
		}
	];

	constructor(public router:Router, private auth:AuthenticationService) {

	}

	ngOnInit() {

	}

	doLogout() {
		this.auth.logout();
		this.router.navigate(['/login']);
	}

	private getCurrentRoute() {
		return this.router.url;
	}

	private onPageSelect(page:any) {

		this.router.navigateByUrl(page.route);

	}

	ngOnDestroy() {

	}

}
