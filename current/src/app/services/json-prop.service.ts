import { Injectable } from '@angular/core';
import { ApiHelperService } from './api-helper.service';

@Injectable({
  providedIn: 'root'
})
export class JsonPropService {
  constructor(private apiHelper: ApiHelperService) {}

  async find<T>(path: string): Promise<T> {
    const res = await this.apiHelper.get('assets/data/profile.json');
    return Promise.resolve(this.findPropInObj(res, path));
  }

  private findPropInObj<T>(obj: any, path: string): T {
    const propsInOrder = path.split('.');
    let i = 0;
    do {
      obj = obj[propsInOrder[i++]];
    } while (obj !== undefined && propsInOrder.length < i);
    return obj;
  }
}
