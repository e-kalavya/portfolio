import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAddressOnMapComponent } from './profile-address-on-map.component';

describe('ProfileAddressOnMapComponent', () => {
  let component: ProfileAddressOnMapComponent;
  let fixture: ComponentFixture<ProfileAddressOnMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileAddressOnMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAddressOnMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
