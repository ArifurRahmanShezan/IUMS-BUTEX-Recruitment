import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeparmentHeadLeaveManagementComponent } from './deparment-head-leave-management.component';

describe('DeparmentHeadLeaveManagementComponent', () => {
  let component: DeparmentHeadLeaveManagementComponent;
  let fixture: ComponentFixture<DeparmentHeadLeaveManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeparmentHeadLeaveManagementComponent]
    });
    fixture = TestBed.createComponent(DeparmentHeadLeaveManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
