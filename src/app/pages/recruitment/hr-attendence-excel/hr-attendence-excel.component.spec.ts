import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HRAttendenceExcelComponent } from './hr-attendence-excel.component';

describe('HRAttendenceExcelComponent', () => {
  let component: HRAttendenceExcelComponent;
  let fixture: ComponentFixture<HRAttendenceExcelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HRAttendenceExcelComponent]
    });
    fixture = TestBed.createComponent(HRAttendenceExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
