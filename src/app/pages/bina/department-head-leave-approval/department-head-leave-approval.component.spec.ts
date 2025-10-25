import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentHeadLeaveApprovalComponent } from './department-head-leave-approval.component';

describe('DepartmentHeadLeaveApprovalComponent', () => {
  let component: DepartmentHeadLeaveApprovalComponent;
  let fixture: ComponentFixture<DepartmentHeadLeaveApprovalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentHeadLeaveApprovalComponent]
    });
    fixture = TestBed.createComponent(DepartmentHeadLeaveApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
