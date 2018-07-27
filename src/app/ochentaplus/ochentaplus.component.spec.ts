import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OchentaplusComponent } from './ochentaplus.component';

describe('OchentaplusComponent', () => {
  let component: OchentaplusComponent;
  let fixture: ComponentFixture<OchentaplusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OchentaplusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OchentaplusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
