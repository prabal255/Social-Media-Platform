import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { UserManagementComponent } from './user-management.component';


@NgModule({
  declarations: [
    UserSignInComponent,
    UserSignUpComponent,
    UserManagementComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule
  ]
})
export class UserManagementModule { }
