import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAcademicComponent } from './profile-academic.component';

describe('ProfileAcademicComponent', () => {
  let component: ProfileAcademicComponent;
  let fixture: ComponentFixture<ProfileAcademicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileAcademicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAcademicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
