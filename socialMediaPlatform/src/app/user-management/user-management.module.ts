import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { UserManagementComponent } from './user-management.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HomepagenavbarComponent } from './homepagenavbar/homepagenavbar.component';
import { HomepageShortcutComponent } from './homepage-shortcut/homepage-shortcut.component';
import { HomepageRecentActivityComponent } from './homepage-recent-activity/homepage-recent-activity.component';
import { HomepageFollowingComponent } from './homepage-following/homepage-following.component';


@NgModule({
  declarations: [
    UserSignInComponent,
    UserSignUpComponent,
    UserManagementComponent,
    HomePageComponent,
    UserProfileComponent,
    ChangePasswordComponent,
    HomepagenavbarComponent,
    HomepageShortcutComponent,
    HomepageRecentActivityComponent,
    HomepageFollowingComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule
  ]
})
export class UserManagementModule { }
