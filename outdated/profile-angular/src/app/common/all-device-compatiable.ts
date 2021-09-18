import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef } from '@angular/core';

export class AllDeviceCompatiable {

  query: MediaQueryList;
  landscape: MediaQueryList;
    private _mobileQueryListener: () => void;

    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
      this.query = media.matchMedia('(max-width: 600px)');
      this.landscape = media.matchMedia('(min-height: 400px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.query.addListener(this._mobileQueryListener);
      this.landscape.addListener(this._mobileQueryListener);
    }
}
