import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SelectButton } from 'primeng/selectbutton';
import { MediaMatcher } from '@angular/cdk/layout';
import { AllDeviceCompatiable } from './../../common/all-device-compatiable';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lang-select',
  templateUrl: './lang-select.component.html',
  styleUrls: ['./lang-select.component.css']
})
export class LangSelectComponent extends AllDeviceCompatiable implements OnInit {

  langsDeskTop: any;
  langsMobile: any;
  currentlang: string;

  constructor(private changeDetectorRef: ChangeDetectorRef, private media: MediaMatcher, public i18n: TranslateService) {
    super(changeDetectorRef, media);
   }

  ngOnInit() {
    this.currentlang = this.i18n.currentLang;
    this.langsDeskTop = [
      {
        label: 'English',
        value: 'en'
      },
      {
        label: '日本語',
        value: 'ja'
      }
    ];
    this.langsMobile = [
      {
        name: 'English',
        flag: 'flag_india.png'
      },      
      {
        name: '日本語',
        flag: 'flag_japan.png',
      }
    ];
  }

  changLang(event) {
    this.i18n.use(event.value);
  }

}
