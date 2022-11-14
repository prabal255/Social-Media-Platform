import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminManagementRoutingModule } from './admin-management-routing.module';
import { AdminSignUpComponent } from './admin-sign-up/admin-sign-up.component';
import { AdminSignInComponent } from './admin-sign-in/admin-sign-in.component';


@NgModule({
  declarations: [
    AdminSignUpComponent,
    AdminSignInComponent
  ],
  imports: [
    CommonModule,
    AdminManagementRoutingModule
  ]
})
export class AdminManagementModule { }
