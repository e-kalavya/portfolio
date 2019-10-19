import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profile-address-on-map',
  templateUrl: './profile-address-on-map.component.html',
  styleUrls: ['./profile-address-on-map.component.css']
})
export class ProfileAddressOnMapComponent implements OnInit {

  homeGeoLoc: { latitude: number, longitude: number };


  constructor() { }

  ngOnInit() {
    this.homeGeoLoc = {
      latitude: 13.0512222,
      longitude: 80.06022222222222
    };
    /* navigator.geolocation.getCurrentPosition( (position) => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
    }); */
  }

}
