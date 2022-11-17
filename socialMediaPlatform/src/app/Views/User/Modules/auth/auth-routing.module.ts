import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';

const routes: Routes = [{
  path:'',
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
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
