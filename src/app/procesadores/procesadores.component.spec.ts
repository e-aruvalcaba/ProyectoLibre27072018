import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesadoresComponent } from './procesadores.component';

describe('ProcesadoresComponent', () => {
  let component: ProcesadoresComponent;
  let fixture: ComponentFixture<ProcesadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcesadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
