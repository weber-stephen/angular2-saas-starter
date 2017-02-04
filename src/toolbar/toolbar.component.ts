import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service'

@Component({
  selector: 'toolbar-component',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy {
  
    constructor(public router:Router, private auth:AuthenticationService) {

    }

    ngOnInit() {

    }

    isUserLoggedIn() {
        return this.auth.getUser();
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
