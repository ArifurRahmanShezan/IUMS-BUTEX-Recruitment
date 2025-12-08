import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyRequestApprovalComponent } from './vacancy-request-approval.component';

describe('VacancyRequestApprovalComponent', () => {
  let component: VacancyRequestApprovalComponent;
  let fixture: ComponentFixture<VacancyRequestApprovalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VacancyRequestApprovalComponent]
    });
    fixture = TestBed.createComponent(VacancyRequestApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
