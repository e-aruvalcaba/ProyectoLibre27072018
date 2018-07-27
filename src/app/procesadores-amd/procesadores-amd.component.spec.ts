import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesadoresAmdComponent } from './procesadores-amd.component';

describe('ProcesadoresAmdComponent', () => {
  let component: ProcesadoresAmdComponent;
  let fixture: ComponentFixture<ProcesadoresAmdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcesadoresAmdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesadoresAmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
