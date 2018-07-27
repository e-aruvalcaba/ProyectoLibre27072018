import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpuamdComponent } from './gpuamd.component';

describe('GpuamdComponent', () => {
  let component: GpuamdComponent;
  let fixture: ComponentFixture<GpuamdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpuamdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpuamdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
