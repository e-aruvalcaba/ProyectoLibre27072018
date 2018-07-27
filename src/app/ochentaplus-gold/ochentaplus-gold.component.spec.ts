import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OchentaplusGoldComponent } from './ochentaplus-gold.component';

describe('OchentaplusGoldComponent', () => {
  let component: OchentaplusGoldComponent;
  let fixture: ComponentFixture<OchentaplusGoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OchentaplusGoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OchentaplusGoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
