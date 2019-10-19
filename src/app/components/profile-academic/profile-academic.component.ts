import { TranslateService } from '@ngx-translate/core';
import { AcademicConfig } from './../../common/constants/academic-config';
import { MediaMatcher } from '@angular/cdk/layout';
import { AllDeviceCompatiable } from './../../common/all-device-compatiable';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-profile-academic',
  templateUrl: './profile-academic.component.html',
  styleUrls: ['./profile-academic.component.css']
})
export class ProfileAcademicComponent extends AllDeviceCompatiable implements OnInit {

  acdemic = new AcademicConfig();

  constructor(private changeDetectorRef: ChangeDetectorRef, private media: MediaMatcher, public i18n: TranslateService) {
    super(changeDetectorRef, media);
   }

  ngOnInit() {
  }

}
