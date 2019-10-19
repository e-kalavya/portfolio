import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileHomeComponent } from '../../../components/profile-home/profile-home.component';
import { ProfileComponent } from '../../../components/profile/profile.component';

export const appRoutes: Routes = [
  /* {
    path: '',
    redirectTo: '/profile',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    loadChildren: 'app/modules/profile/profile.module#ProfileModule',
    pathMatch: 'full'
  } */
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
