import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'navigation-component',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {
  
	pages:Array<any> = [];

	constructor(public router:Router, private authService:AuthenticationService, private navigationService:NavigationService) {

	}

	ngOnInit() {
		this.navigationService.get()
		.subscribe((result) => {
			this.pages = result;
		});
	}

	doLogout() {
		this.authService.logout();
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
