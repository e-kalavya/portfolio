import { CertificatesConfig } from './../../common/constants/certificates-config';
import { TranslateService } from '@ngx-translate/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { AllDeviceCompatiable } from './../../common/all-device-compatiable';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Chart } from 'chart.js';
import { AngularFirestore } from 'angularfire2/firestore';
import { MatRadioChange } from '@angular/material';

@Component({
  selector: 'app-profile-certifications',
  templateUrl: './profile-certifications.component.html',
  styleUrls: ['./profile-certifications.component.scss']
})
export class ProfileCertificationsComponent extends AllDeviceCompatiable implements OnInit {

  certficates = CertificatesConfig;
  chart: any;

  skills = {
      groups : [
          {
            name: 'Languages',
            settings: {
                labels: ['Reading', 'Writing', 'Speaking'],
                preferedChart: 'radar',
                languages: [{
                  label: 'Tamil',
                  backgroundColor: 'rgba(179,181,198,0.2)',
                  borderColor: 'rgba(179,181,198,1)',
                  pointBackgroundColor: 'rgba(179,181,198,1)',
                  pointBorderColor: '#fff',
                  pointHoverBackgroundColor: '#fff',
                  pointHoverBorderColor: 'rgba(179,181,198,1)',
                  data: [90, 80, 70]
              },
              {
                  label: 'Japanese',
                  backgroundColor: 'rgba(255,99,132,0.2)',
                  borderColor: 'rgba(255,99,132,1)',
                  pointBackgroundColor: 'rgba(255,99,132,1)',
                  pointBorderColor: '#fff',
                  pointHoverBackgroundColor: '#fff',
                  pointHoverBorderColor: 'rgba(255,99,132,1)',
                  data: [70, 50, 85]
              },
              {
                label: 'English',
                backgroundColor: 'rgba(49, 19, 26, 0.2)',
                borderColor: 'lightgreen',
                pointBackgroundColor: 'blue',
                pointBorderColor: 'blue',
                pointHoverBackgroundColor: 'blue',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: [80, 60, 60]
            }
            ]
            }
          },
          {
            name: 'Programming',
            settings: {}
          }
        ]
    };

  currentGroup: any;

  constructor(private changeDetectorRef: ChangeDetectorRef, private media: MediaMatcher,
    public i18n: TranslateService, private fireStore: AngularFirestore) {
    super(changeDetectorRef, media);
   }

  ngOnInit() {
      this.currentGroup = this.skills.groups[0];
      this.chart = {
        type: this.currentGroup.settings.preferedChart,
        data: {
            labels: this.currentGroup.settings.labels,
            datasets: this.currentGroup.settings.languages
        }
      };
      const skillCategories = this.fireStore.collection('/skill_categories').ref;
      this.fireStore.collection('/user_skills').valueChanges().subscribe((skills) => {
        skills.forEach( (skill: any) => {
            skillCategories.where('Category_Id', '==', skill.category).onSnapshot(categories => {
                categories.forEach(category => {
                    console.log(category.data());
                });
            });
        });
    });
  }

  updateScreen(radio: any) {
      this.chart = {
          type: radio.value.settings.preferedChart,
          data: {
              labels: radio.value.settings.labels,
              datasets: radio.value.settings.languages
          }
    };
  }
}




export class SkillNode {
    name: string;
    children: SkillNode[];
}
