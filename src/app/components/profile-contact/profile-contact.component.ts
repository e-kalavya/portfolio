import { ContactConfig } from './../../common/constants/contact-config';
import { TranslateService } from '@ngx-translate/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { AllDeviceCompatiable } from './../../common/all-device-compatiable';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-profile-contact',
  templateUrl: './profile-contact.component.html',
  styleUrls: ['./profile-contact.component.css']
})
export class ProfileContactComponent extends AllDeviceCompatiable implements OnInit {

  contact = new ContactConfig();

  constructor(private changeDetectorRef: ChangeDetectorRef, private media: MediaMatcher, public i18n: TranslateService, private snackbar: MatSnackBar) {
    super(changeDetectorRef, media);
   }

  ngOnInit() {
  }

  clipboardCopied(data) {
    this.snackbar.open('Copied!', data, {duration: 2000});
  }

}
