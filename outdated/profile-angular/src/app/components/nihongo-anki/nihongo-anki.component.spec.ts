import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NihongoAnkiComponent } from './nihongo-anki.component';

describe('NihongoAnkiComponent', () => {
  let component: NihongoAnkiComponent;
  let fixture: ComponentFixture<NihongoAnkiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NihongoAnkiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NihongoAnkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
