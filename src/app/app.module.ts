import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';

//Bootstrap
import { AlertModule } from 'ng2-bootstrap';

//Storage
import { Ng2Webstorage } from 'ng2-webstorage';

//Typeahead - https://github.com/brinkjg/ng2-typeahead
// import { Typeahead } from 'ng2-typeahead';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

import { ClickOutsideDirective } from '../toolbar/search-autocomplete/clickinside.directive';

//Utilities
import * as _ from 'lodash';

//Modules
import { NAVIGATION_MODULE } from '../navigation';
import { TOOLBAR_MODULE } from '../toolbar';
import { LOGIN_MODULE } from '../login';
import { SIGNUP_MODULE } from '../signup';
import { DASHBOARD_MODULE } from '../dashboard';
import { MESSAGES_MODULE } from '../messages';
import { USERS_MODULE } from '../users';
import { SERVICES_MODULE } from '../services';
import { PAGE_NOT_FOUND_MODULE } from '../pagenotfound';

import { AuthGuard } from './auth-guard';

const BIQ_MODULES = [
  NAVIGATION_MODULE,
  TOOLBAR_MODULE,
  LOGIN_MODULE,
  SIGNUP_MODULE,
  DASHBOARD_MODULE,
  MESSAGES_MODULE,
  USERS_MODULE,
  PAGE_NOT_FOUND_MODULE
];

@NgModule({
  declarations: [
    AppComponent,
    ClickOutsideDirective,
    BIQ_MODULES
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES),

    //Libraries
    Ng2Webstorage,
    Ng2AutoCompleteModule,
    AlertModule.forRoot()

  ],
  providers: [
    SERVICES_MODULE,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
