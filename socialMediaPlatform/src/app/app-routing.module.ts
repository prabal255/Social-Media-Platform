import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {

    path: '',
redirectTo:"UserManagement",
pathMatch: 'full'
  },
  {
    path: 'UserManagement',
    loadChildren: () => import('./user-management/user-management.module').then(m => m.UserManagementModule)
  },
  {
    path: 'Admin',
    redirectTo:"Admin/Auth",
pathMatch: 'full'
  },
  {
    path: 'Admin/Auth',
    loadChildren: () => import('./Views/Modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'Admin/Panel',
    loadChildren: () => import('./Views/Modules/admin-panel/admin-panel.module').then(m => m.AdminPanelModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
