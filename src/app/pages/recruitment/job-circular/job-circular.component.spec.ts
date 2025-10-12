import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCircularComponent } from './job-circular.component';

describe('JobCircularComponent', () => {
  let component: JobCircularComponent;
  let fixture: ComponentFixture<JobCircularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobCircularComponent]
    });
    fixture = TestBed.createComponent(JobCircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
