import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { SignupComponent } from './signup/signup.component';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';

const routes: Routes = [{ path: '', component: LoginComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'account', component: AccountdetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
