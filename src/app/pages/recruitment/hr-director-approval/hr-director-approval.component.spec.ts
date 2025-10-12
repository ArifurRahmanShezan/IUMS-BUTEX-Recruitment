import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrDirectorApprovalComponent } from './hr-director-approval.component';

describe('HrDirectorApprovalComponent', () => {
  let component: HrDirectorApprovalComponent;
  let fixture: ComponentFixture<HrDirectorApprovalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HrDirectorApprovalComponent]
    });
    fixture = TestBed.createComponent(HrDirectorApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
