import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiHelperService {
  constructor(private http: HttpClient) {}

  async get(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe(
        res => {
          resolve(res);
        },
        error => reject(error)
      );
    });
  }
}
