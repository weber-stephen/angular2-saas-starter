import { Component } from '@angular/core';

import { NavigationComponent } from '../navigation/navigation.component';

import { AuthenticationService } from '../services/authentication.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

    constructor(private auth:AuthenticationService) {

    }

    isUserLoggedIn() {
        return this.auth.getUser();
    }
  
}
