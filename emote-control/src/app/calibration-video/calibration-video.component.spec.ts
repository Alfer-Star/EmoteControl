import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalibrationVideoComponent } from './calibration-video.component';

describe('CalibrationVideoComponent', () => {
  let component: CalibrationVideoComponent;
  let fixture: ComponentFixture<CalibrationVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalibrationVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalibrationVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
