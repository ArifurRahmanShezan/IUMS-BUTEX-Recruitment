import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfTrialComponent } from './pdf-trial.component';

describe('PdfTrialComponent', () => {
  let component: PdfTrialComponent;
  let fixture: ComponentFixture<PdfTrialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PdfTrialComponent]
    });
    fixture = TestBed.createComponent(PdfTrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
