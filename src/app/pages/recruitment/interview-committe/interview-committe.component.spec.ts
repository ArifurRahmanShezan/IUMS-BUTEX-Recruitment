import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewCommitteComponent } from './interview-committe.component';

describe('InterviewCommitteComponent', () => {
  let component: InterviewCommitteComponent;
  let fixture: ComponentFixture<InterviewCommitteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterviewCommitteComponent]
    });
    fixture = TestBed.createComponent(InterviewCommitteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
