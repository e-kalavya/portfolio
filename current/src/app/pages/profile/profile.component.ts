import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Title } from '@angular/platform-browser';
import { JsonPropService } from 'src/app/services/json-prop.service';
import { Profile } from 'src/app/models/profile';

@Component({
  selector: 'portfolio-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: any;

  constructor(
    private titleService: Title,
    private jsonPropService: JsonPropService
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Profile');
    this.jsonPropService.find('profile').then(profile => {
      this.profile = profile;
      this.profile.description = this.profile.description.replace(
        '$1',
        (new Date().getFullYear() - this.profile.graduatedYear).toString()
      );
    });
    // this.profile = {
    //   name: 'Rajesh Sundaram',
    //   birthDate: new Date('06/03/1994'),
    //   emailId: 'tzrajesh7@gmail.com',
    //   nationality: 'Indian',
    //   skypeId: 'rajeshsundaram7',
    //   languages: ['Tamil', 'English', 'Japanese']
    // };
  }
}
