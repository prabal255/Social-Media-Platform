import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SignInComponent } from './Conponents/sign-in/sign-in.component';
import { SignUpComponent } from './Conponents/sign-up/sign-up.component';
import { ResetPasswordComponent } from './Conponents/reset-password/reset-password.component';
import { LockScreenComponent } from './Conponents/lock-screen/lock-screen.component';


@NgModule({
  declarations: [
    AuthComponent,
    SignInComponent,
    SignUpComponent,
    ResetPasswordComponent,
    LockScreenComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
