import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UserManagementComponent } from './user-management.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
  {
    path:'',
    component:UserManagementComponent,
    children:[
      {
        path:'',
        redirectTo:'SignIn',
        pathMatch:'full'
      },
      {
        path:'SignIn',
        component:UserSignInComponent
      },
      {
        path:'SignUp',
        component:UserSignUpComponent
      }
    ]
  },
  {
    path:'HomePage',
    component:HomePageComponent,
  },
  {
    path:'Profile',
    component:UserProfileComponent
  },
  {
    path:'changepassword',
    component:ChangePasswordComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
