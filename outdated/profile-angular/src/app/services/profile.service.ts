import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class ProfileService {

  private pageTitleCode: BehaviorSubject<string>;

  constructor() {
    this.pageTitleCode = new BehaviorSubject<string>('sideMenu.home.home');
  }

  setTitle(titleCode: string) {
    this.pageTitleCode.next(titleCode);
  }

  get currentTitle() {
    return this.pageTitleCode;
  }

}
