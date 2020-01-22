import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";
import { SignupComponent } from "./signup/signup.component";
import { AccountdetailsComponent } from "./accountdetails/accountdetails.component";
import {MatRadioModule} from '@angular/material/radio';

import {
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatIconModule
} from "@angular/material";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [LoginComponent, SignupComponent, AccountdetailsComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,MatNativeDateModule,MatIconModule
  ],
  providers:[MatNativeDateModule]
})
export class LoginModule {}
