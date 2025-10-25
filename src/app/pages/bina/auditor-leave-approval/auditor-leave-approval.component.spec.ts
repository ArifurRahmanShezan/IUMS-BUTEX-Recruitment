import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditorLeaveApprovalComponent } from './auditor-leave-approval.component';

describe('AuditorLeaveApprovalComponent', () => {
  let component: AuditorLeaveApprovalComponent;
  let fixture: ComponentFixture<AuditorLeaveApprovalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuditorLeaveApprovalComponent]
    });
    fixture = TestBed.createComponent(AuditorLeaveApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
