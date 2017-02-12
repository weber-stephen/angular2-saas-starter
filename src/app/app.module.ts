import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';

//Bootstrap - https://valor-software.com/ng2-bootstrap/
import { AlertModule } from 'ng2-bootstrap';

//Storage - https://github.com/PillowPillow/ng2-webstorage
import { Ng2Webstorage } from 'ng2-webstorage';

//Chartist - https://github.com/willsoto/angular2-chartist
import { ChartistModule } from 'angular2-chartist';

//Datatables - https://swimlane.gitbooks.io/ngx-datatable/
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

//NG2 Validators - https://github.com/yuyang041060120/ng2-validation
import { CustomFormsModule } from 'ng2-validation'

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
import { TABLE_MODULE } from '../tables';
import { FORMS_MODULE } from '../forms';
import { WIZARD_MODULE } from '../wizard';
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
  TABLE_MODULE,
  FORMS_MODULE,
  WIZARD_MODULE,
  PAGE_NOT_FOUND_MODULE
];

@NgModule({
  declarations: [
    AppComponent,
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
    ChartistModule,
    NgxDatatableModule,
    CustomFormsModule,
    AlertModule.forRoot()

  ],
  providers: [
    SERVICES_MODULE,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
