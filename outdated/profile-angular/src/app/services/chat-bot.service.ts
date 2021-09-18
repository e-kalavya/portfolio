import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
// import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class ChatBotService {

  private botUrl = 'dialogflow-uytjwd@myprofile-dab38.iam.gserviceaccount.com';
  private token = environment.dialogFlowConfig.askMeBotToken;

  // constructor(private http: Http) { }

  public getResponse(query: string) {
    const data = {
      query : query,
      lang: 'en',
      sessionId: '12345'
    };
    // return this.http
    //   .post(`${this.botUrl}`, data, { headers: this.getHeaders() })
    //   .map(res => {
    //     console.log(res);
    //     return res.json();
    //   });
  }

  public getHeaders() {
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${this.token}`);
    return headers;
  }


}
