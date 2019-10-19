import { BannerImage } from './../../common/dto/banner-image';
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { AllDeviceCompatiable } from '../../common/all-device-compatiable';
import { ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { BannerConfig } from '../../common/constants/banner-config';
// import { NgxCarousel } from 'ngx-carousel';
import { MatBottomSheet } from '@angular/material';
import { TranslateService, TranslatePipe, TranslateDirective, LangChangeEvent } from '@ngx-translate/core';
import { ViewChild, AfterViewInit, ElementRef, ViewChildren } from '@angular/core';
import { QueryList } from '@angular/core';
import { profileHomeIntroAnimation } from './../../animations/profile-home';
// import { NgxCarouselStore } from 'ngx-carousel/src/ngx-carousel/ngx-carousel.interface';
import { VisitorInfoComponent } from 'src/app/components/visitor-info/visitor-info.component';


@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['profile-home.component.scss'],
  animations: [ profileHomeIntroAnimation ]
})
export class ProfileHomeComponent extends AllDeviceCompatiable implements OnInit, AfterViewInit, AfterViewChecked {

  bannerConfig = BannerConfig.sort((a: BannerImage, b: BannerImage) => {
    if (a.bannerNo > b.bannerNo) {
      return 1;
    } else if (a.bannerNo < b.bannerNo) {
      return -1;
    } else {
      return 0;
    }
  });
  currentBanner: BannerImage;
  // myCarousel: NgxCarousel;
  carouselImageHeight = 0;
  @ViewChild('carouselRef') carouselRef: any;
  // @ViewChildren() carouselItems: QueryList<ElementRef>;

  constructor(private changeDetectorRef: ChangeDetectorRef, private media: MediaMatcher, 
    public i18n: TranslateService, private element: ElementRef, private visitorSheet: MatBottomSheet) {
    super(changeDetectorRef, media);
   }

  ngOnInit() {
    this.currentBanner = this.bannerConfig[0];
    /* this.myCarousel = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 500,
      interval: 5000,
      point: {
        visible: true,
        pointStyles: `
        .ngxcarouselPoint {
          list-style-type: none;
          text-align: center;
          padding: 3px;
          margin: 0;
          white-space: nowrap;
          overflow: auto;
          position: absolute;
          width: 100%;
          bottom: 10px;
          left: 0;
          box-sizing: border-box;
        }
        .ngxcarouselPoint li {
          display: inline-block;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.55);
          padding: 5px;
          margin: 0 3px;
          transition: .4s ease all;
        }
        .ngxcarouselPoint li.active {
            background: white;
            width: 10px;
        }
      `
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    }; */
    // console.log(this.carouselItems);
    // console.log(document.querySelector('.ngxcarousel .ngxcarousel-inner'));
    // console.log(this.carouselRef.el.nativeElement.offsetHeight);
  }

  ngAfterViewInit() {
  }
  
  openVistorInfoSheet() {
    this.visitorSheet.open(VisitorInfoComponent);
  }
  /* move(item: NgxCarouselStore) {
    this.currentBanner = this.bannerConfig[item.currentSlide];
  } */

  ngAfterViewChecked() {
    // this.element.nativeElement.querySelector('.home-content .intro-text p u').addEventListener('click', console.log('scad'));
    this.carouselImageHeight = this.carouselRef.el.nativeElement.offsetHeight;
    this.changeDetectorRef.detectChanges();
  }

}
