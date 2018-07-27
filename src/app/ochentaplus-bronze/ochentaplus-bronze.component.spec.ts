import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OchentaplusBronzeComponent } from './ochentaplus-bronze.component';

describe('OchentaplusBronzeComponent', () => {
  let component: OchentaplusBronzeComponent;
  let fixture: ComponentFixture<OchentaplusBronzeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OchentaplusBronzeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OchentaplusBronzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
