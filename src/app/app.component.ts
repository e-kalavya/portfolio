import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProfileService } from './../app/services/profile.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private title: Title, private profileService: ProfileService,public i18n: TranslateService) {
  }

  ngOnInit() {
    this.profileService.currentTitle.subscribe(val => {
      this.i18n.get(val).subscribe(val => this.title.setTitle(`${val}`));
    });
  }
}
