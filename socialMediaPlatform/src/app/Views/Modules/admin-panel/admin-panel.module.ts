import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { AdminPanelComponent } from './admin-panel.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LeftNavbarComponent } from './Components/left-navbar/left-navbar.component';
import { TopNavbarComponent } from './Components/top-navbar/top-navbar.component';


@NgModule({
  declarations: [
    AdminPanelComponent,
    DashboardComponent,
    LeftNavbarComponent,
    TopNavbarComponent
  ],
  imports: [
    CommonModule,
    AdminPanelRoutingModule
  ]
})
export class AdminPanelModule { }
