import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentHeadTourApprovalComponent } from './department-head-tour-approval.component';

describe('DepartmentHeadTourApprovalComponent', () => {
  let component: DepartmentHeadTourApprovalComponent;
  let fixture: ComponentFixture<DepartmentHeadTourApprovalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentHeadTourApprovalComponent]
    });
    fixture = TestBed.createComponent(DepartmentHeadTourApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
