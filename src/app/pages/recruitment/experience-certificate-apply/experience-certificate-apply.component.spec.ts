import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceCertificateApplyComponent } from './experience-certificate-apply.component';

describe('ExperienceCertificateApplyComponent', () => {
  let component: ExperienceCertificateApplyComponent;
  let fixture: ComponentFixture<ExperienceCertificateApplyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperienceCertificateApplyComponent]
    });
    fixture = TestBed.createComponent(ExperienceCertificateApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
