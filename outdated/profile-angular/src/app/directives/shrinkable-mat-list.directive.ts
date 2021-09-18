import { Directive, ElementRef, Input, OnInit, OnChanges } from '@angular/core';

@Directive({
  selector: '[appShrinkableMatList]'
})
export class ShrinkableMatListDirective implements OnInit, OnChanges {
  @Input() shrinkState: boolean;
  @Input() isMobile: boolean;
  @Input() isSideNavOpen: boolean;

  constructor(private element: ElementRef) {
   }

   ngOnInit() {
    this.element.nativeElement.querySelectorAll('.mat-nav-list .mat-list-item .mat-list-item-content .mat-list-text').forEach(element => {
      element.style.display = this.shrinkState ? 'none' : 'flex';
    });
  }

  ngOnChanges() {
    const sidenav = this.element.nativeElement;
    const sideNavContent = this.element.nativeElement.parentElement.querySelector('mat-sidenav-content');
    this.element.nativeElement.querySelectorAll('.mat-nav-list .mat-list-item .mat-list-item-content .mat-list-text').forEach(element => {
      element.style.display = this.shrinkState ? 'none' : 'flex';
    });
    if (sidenav.style.visibility === 'visible' && (this.element.nativeElement.style.width.indexOf('%') >= 0 || this.element.nativeElement.style.width.indexOf('px') >= 0)) {
      if (!this.isMobile) {
        sideNavContent.style.marginLeft = this.shrinkState ? '70px' : this.element.nativeElement.style.width;
      }
    } else if (!this.shrinkState) {
      sideNavContent.style.marginLeft = '0';
    }
   }

}
