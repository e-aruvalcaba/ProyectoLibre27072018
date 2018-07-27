import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesadoresIntelComponent } from './procesadores-intel.component';

describe('ProcesadoresIntelComponent', () => {
  let component: ProcesadoresIntelComponent;
  let fixture: ComponentFixture<ProcesadoresIntelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcesadoresIntelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesadoresIntelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
