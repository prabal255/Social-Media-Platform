import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LockScreenComponent } from './Conponents/lock-screen/lock-screen.component';
import { ResetPasswordComponent } from './Conponents/reset-password/reset-password.component';
import { SignInComponent } from './Conponents/sign-in/sign-in.component';
import { SignUpComponent } from './Conponents/sign-up/sign-up.component';

const routes: Routes = [
  {path:'',
  component:AuthComponent,
  children:[
    {
      path:'',
      redirectTo:'SignIn',
      pathMatch:'full'
    },
    {
      path:'SignIn',
      component:SignInComponent
    },
    {
      path:'SignUp',
      component:SignUpComponent
    },
    {
      path:'ForgotPassword',
      component:ResetPasswordComponent
    },
    {
      path:'LockScreen',
      component:LockScreenComponent
    }
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
