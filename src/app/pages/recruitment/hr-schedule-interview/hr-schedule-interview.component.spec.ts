import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HRScheduleInterviewComponent } from './hr-schedule-interview.component';

describe('HRScheduleInterviewComponent', () => {
  let component: HRScheduleInterviewComponent;
  let fixture: ComponentFixture<HRScheduleInterviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HRScheduleInterviewComponent]
    });
    fixture = TestBed.createComponent(HRScheduleInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
