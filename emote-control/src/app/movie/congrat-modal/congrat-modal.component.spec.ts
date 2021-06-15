import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongratModalComponent } from './congrat-modal.component';

describe('CongratModalComponent', () => {
  let component: CongratModalComponent;
  let fixture: ComponentFixture<CongratModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongratModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongratModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
