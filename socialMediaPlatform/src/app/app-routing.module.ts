import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserSignInComponent } from './user-management/user-sign-in/user-sign-in.component';

const routes: Routes = [
  {
    path: '',
redirectTo:"User/Auth",
pathMatch: 'full'
  },
  {
    path: 'User',
redirectTo:"User/Auth",
pathMatch: 'full'
  },
  {
    path: 'User/Auth',
    loadChildren: () => import('./Views/User/Modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'User/Panel',
    loadChildren: () => import('./Views/User/Modules/user-panel/user-panel.module').then(m => m.UserPanelModule)
  },
  {
    path: 'Admin',
    redirectTo:"Admin/Auth",
pathMatch: 'full'
  },
  {
    path: 'Admin/Auth',
    loadChildren: () => import('./Views/Admin/Modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'Admin/Panel',
    loadChildren: () => import('./Views/Admin/Modules/admin-panel/admin-panel.module').then(m => m.AdminPanelModule)
  }
  // ,{
  //   path:'PreSignIn',
  //   component:UserManagementComponent
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
