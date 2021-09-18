import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParticleComponent } from './components/particle/particle.component';
import { HomeComponent } from './pages/home/home.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RootComponent } from './components/root/root.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SkillsComponent } from './pages/profile/skills/skills.component';
import { MatChipsModule } from '@angular/material/chips';
import { CdkTreeModule } from '@angular/cdk/tree';
import { ProfilePersonalComponent } from './components/profile-personal/profile-personal.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'profile',
    component: ProfileComponent,
    pathMatch: 'full'
  },
  {
    path: 'contact',
    component: ContactComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ParticleComponent,
    HomeComponent,
    ToolbarComponent,
    RootComponent,
    ContactComponent,
    ProfileComponent,
    SkillsComponent,
    ProfilePersonalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    HttpClientModule,
    CdkTreeModule,
    MatListModule,
    MatChipsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule {}
