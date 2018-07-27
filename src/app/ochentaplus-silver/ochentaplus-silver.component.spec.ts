import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OchentaplusSilverComponent } from './ochentaplus-silver.component';

describe('OchentaplusSilverComponent', () => {
  let component: OchentaplusSilverComponent;
  let fixture: ComponentFixture<OchentaplusSilverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OchentaplusSilverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OchentaplusSilverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
