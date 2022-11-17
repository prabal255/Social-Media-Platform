import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'',
  component:AdminPanelComponent,
  children:[
    {
      path:'',
      redirectTo:'Dashboard',
      pathMatch:'full'
    },
    {
      path:'Dashboard',
      component:DashboardComponent
    },
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
