import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpuintelComponent } from './gpuintel.component';

describe('GpuintelComponent', () => {
  let component: GpuintelComponent;
  let fixture: ComponentFixture<GpuintelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpuintelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpuintelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
