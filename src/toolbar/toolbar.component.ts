import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';
import { NavigationService } from '../services/navigation.service';

import { SearchAutocompleteComponent } from './search-autocomplete/search-autocomplete.component';

@Component({
  selector: 'toolbar-component',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy {
  
    pages:Array<any> = [];
  
    constructor(public router:Router, private auth:AuthenticationService, private navigationService:NavigationService) {

    }

    ngOnInit() {

      this.navigationService.get()
      .subscribe((result) => {
        this.pages = result;
      });

    }

    isUserLoggedIn() {
        return this.auth.getUser();
    }

    private getCurrentRoute() {
      return this.router.url;
    }

    private onPageSelect(page:any) {

      this.router.navigateByUrl(page.route);

    }

    doLogout() {
      this.auth.logout();
      this.router.navigate(['/login']);
    }

    doSearchSubmit() {
      
    }

    ngOnDestroy() {

    }

}
