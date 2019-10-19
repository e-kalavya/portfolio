import { DeviceTypes } from './../../common/constants/device-types';
import { BannerImage } from './../../common/dto/banner-image';
import { ProfileVideoComponent } from './../profile-video/profile-video.component';
import { I18n } from './../../common/constants/i18n';
import { TranslateService, TranslatePipe, TranslateDirective, LangChangeEvent } from '@ngx-translate/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { AllDeviceCompatiable } from './../../common/all-device-compatiable';
import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { MatDialog, MatSelect } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { SideNavConfig } from '../../common/constants/side-nav-config';
import { Router } from '@angular/router';
import { ChatBotComponent } from '../chat-bot/chat-bot.component';
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { ProfileService } from './../../services/profile.service';
import { trigger, state, transition, style, stagger, query, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css', './profile-animations.component.scss'],
  animations: [
    trigger('AnimateOnFirstLoad', [
      transition('* => true',[
        // query('.header .mat-toolbar span', style({opacity: 0}), { optional: true}),
        query('.mat-sidenav-container .mat-sidenav div.allow-animate img.profile-sidenav-image', style({ opacity: 0}), { optional: true}),
        query('.mat-sidenav-container .mat-sidenav .mat-nav-list.allow-animate .mat-list-item', style({opacity: 0}), { optional: true}),
        /* query('.header .mat-toolbar span', stagger('200ms', animate('1s', keyframes([
          style({opacity: 0.5, transform: 'scale(1.5) translateX(20px)',offset: 0.3}),
          style({opacity: .9, transform: 'scale(0.8) translateX(-20px)',offset: .6}),
          style({opacity: 1, transform: 'scale(1)',offset: 1}),
        ]))), { optional: true}), */
        query('.mat-sidenav-container .mat-sidenav  div.allow-animate img.profile-sidenav-image', animate('1s',keyframes([
          style({opacity: 1, transform: 'scale(0.7)', offset: .2}),
          style({opacity: 1, transform: 'scale(0.5)', offset: .4}),
          style({opacity: 1, transform: 'scale(0.8)', offset: .7}),
          style({opacity: 1, transform: 'scale(1)', offset: 1})
        ])), { optional: true}) ,
        query('.mat-sidenav-container .mat-sidenav  .mat-nav-list.allow-animate .mat-list-item', stagger('200ms', animate('800ms', keyframes([
          style({opacity: 0.5, transform: 'scale(0.5) translateX(20px)',offset: 0.3}),
          style({opacity: .9, transform: 'scale(0.8) translateX(-20px)',offset: .6}),
          style({opacity: 1, transform: 'scale(1)',offset: 1}),
        ]))), { optional: true})
        
      ])
    ])
  ]
})
export class ProfileComponent extends AllDeviceCompatiable implements OnInit, AfterViewInit {

  changeToLanguage: string;
  i18nVal = I18n;
  sideNavMenu = SideNavConfig.homeMenu;
  isSideNavShrinked: boolean;
  sidenavstate: boolean;
  lang = I18n.languages.ja.key;
  isFirstTimeLoad: boolean;

  @ViewChild('sideNav') sideNav: ElementRef;
  @ViewChild('mainContent') mainContent: ElementRef;
  @ViewChild('langSelect') langSelect: MatSelect;

  constructor(private eleRef: ElementRef, private changeDetectorRef: ChangeDetectorRef, private media: MediaMatcher,
    public i18n: TranslateService, private dialog: MatDialog, private title: Title, public router: Router, public profileService: ProfileService) {
    super(changeDetectorRef, media);
    i18n.addLangs([I18n.languages.en.key, I18n.languages.ja.key]);
    i18n.setDefaultLang(I18n.languages.ja.key);
    i18n.currentLang = I18n.languages.ja.key;
    this.changeToLanguage = I18n.languages.en.value;
  }
  
  ngOnInit() {
    this.isFirstTimeLoad = true;
    this.isSideNavShrinked = false;
    this.i18n.onLangChange.subscribe((event: LangChangeEvent) => {
      if (event.lang === I18n.languages.ja.key) {
        this.changeToLanguage = I18n.languages.en.value;
      } else {
        this.changeToLanguage = I18n.languages.ja.value;
      }
      this.profileService.currentTitle.subscribe(title => {
        this.i18n.get(title).subscribe(val => this.title.setTitle(`${val}`));
      });
    });
  }

  ngAfterViewInit() {
    // hide currently selected lang from dropdown
    if(this.query.matches) {
      this.langSelect.optionSelectionChanges.subscribe((option) => {
        if(option.source['_selected']) {
          (<ElementRef>option.source['_element']).nativeElement.style.display= 'none';
        } else {
          (<ElementRef>option.source['_element']).nativeElement.style.display= 'flex';
        }
      });
    }
  }

  sidenavOpen(sidenavstate: boolean) {
    this.sidenavstate = sidenavstate;
  }

  screenSizeChanges() {
    if (this.sideNav['_opened']) {
      this.mainContent['_margins'].left = this.sideNav['_width'];
      if (this.query.matches && (this.isSideNavShrinked === false) ) {
        this.isSideNavShrinked = true;
      }
    }
  }

  resizeOverlayPane(state) {
    (<Element>this.langSelect.overlayDir.overlayRef['_pane']).classList.add('lang-overlay-pane');
   if(state) {
    }
  }

  /* showProfileVid(): void {
    const dialogRef = this.dialog.open(ProfileVideoComponent, {
      width: this.query.matches ? '100%' : '50%',
      height: '50%'
    });
  } */

  openBot(): void {
    const chatBotRef = this.dialog.open(ChatBotComponent, {
      width: this.query.matches ? '100%' : '400px',
      height: this.query.matches ?'80%' : '500px',
      panelClass: 'chat-bot-modal'
    });
  }

  changeLang(event) {
    if (event.checked) {
      this.i18n.use('ja');
    } else {
      this.i18n.use('en');
    }
  }

  denySideNavAnimation(event) {
    if(event.fromState != 'void') {
      this.isFirstTimeLoad = false;
    }
  }

}
