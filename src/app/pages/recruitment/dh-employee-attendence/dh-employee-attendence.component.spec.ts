import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DhEmployeeAttendenceComponent } from './dh-employee-attendence.component';

describe('DhEmployeeAttendenceComponent', () => {
  let component: DhEmployeeAttendenceComponent;
  let fixture: ComponentFixture<DhEmployeeAttendenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DhEmployeeAttendenceComponent]
    });
    fixture = TestBed.createComponent(DhEmployeeAttendenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
