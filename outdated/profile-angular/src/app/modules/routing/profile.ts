import { NihongoAnkiComponent } from './../../components/nihongo-anki/nihongo-anki.component';
import { ProfileProjectsComponent } from './../../components/profile-projects/profile-projects.component';
import { ProfileCertificationsComponent } from './../../components/profile-certifications/profile-certifications.component';
import { ProfileContactComponent } from './../../components/profile-contact/profile-contact.component';
import { ProfileAcademicComponent } from './../../components/profile-academic/profile-academic.component';
import { Routes } from '@angular/router';
import { ProfileComponent } from '../../components/profile/profile.component';
import { ProfileExperienceComponent } from '../../components/profile-experience/profile-experience.component';
import { ProfileHomeComponent } from '../../components/profile-home/profile-home.component';

export const ProfileRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: ProfileHomeComponent
    },
    {
        path: 'projects',
        children: [
          {
            path: '',
            component: ProfileProjectsComponent
          },
          {
            path: 'nihongoanki',
            component: NihongoAnkiComponent
          }
        ]
    },
    {
        path: 'certifications',
        component: ProfileCertificationsComponent
    },
    {
        path: 'academic',
        component: ProfileAcademicComponent
    },
    {
        path: 'contact',
        component: ProfileContactComponent
    },
    {
        path: '**',
        component: ProfileExperienceComponent
    }
];
