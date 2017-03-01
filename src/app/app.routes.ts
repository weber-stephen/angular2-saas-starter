import { RouterModule, Routes }   from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MessagesComponent } from '../messages/messages.component';
import { UsersComponent } from '../users/users.component';
import { TablesComponent } from '../tables/tables.component';
import { FormsComponent } from '../forms/forms.component';
import { ModalsComponent } from '../modals/modals.component';
import { WizardComponent } from '../wizard/wizard.component';
import { PageNotFoundComponent } from '../pagenotfound/pagenotfound.component';

import { AuthGuard } from './auth-guard';

export const APP_ROUTES:Routes = [
  { path: 'login',component: LoginComponent },
  { path: 'signup',component: SignupComponent },

  { path: '',component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'messages',component: MessagesComponent, canActivate: [AuthGuard] },
  { path: 'users',component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'tables',component: TablesComponent, canActivate: [AuthGuard] },
  { path: 'forms',component: FormsComponent, canActivate: [AuthGuard] },
  { path: 'modals',component: ModalsComponent, canActivate: [AuthGuard] },
  { path: 'wizard',component: WizardComponent, canActivate: [AuthGuard] },
  
  { path: '**', component: PageNotFoundComponent }
];