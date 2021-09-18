import { Component, OnInit } from '@angular/core';
import { JsonPropService } from 'src/app/services/json-prop.service';
import { Profile, PersonalProfileHelper } from 'src/app/models/profile';

@Component({
  selector: 'portfolio-profile-personal',
  templateUrl: './profile-personal.component.html',
  styleUrls: ['./profile-personal.component.scss']
})
export class ProfilePersonalComponent implements OnInit {
  profile: Profile;
  profileHelper: PersonalProfileHelper;
  constructor(private jsonPropService: JsonPropService) {}

  ngOnInit(): void {
    this.jsonPropService.find<Profile>('profile.personal').then(profile => {
      this.profile = profile;
      this.profileHelper = new PersonalProfileHelper(this.profile.personal);
    });
  }
}
