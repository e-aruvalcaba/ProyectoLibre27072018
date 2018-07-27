import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GabosComponent } from './gabos.component';

describe('GabosComponent', () => {
  let component: GabosComponent;
  let fixture: ComponentFixture<GabosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GabosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GabosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
