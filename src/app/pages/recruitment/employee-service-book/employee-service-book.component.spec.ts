import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeServiceBookComponent } from './employee-service-book.component';

describe('EmployeeServiceBookComponent', () => {
  let component: EmployeeServiceBookComponent;
  let fixture: ComponentFixture<EmployeeServiceBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeServiceBookComponent]
    });
    fixture = TestBed.createComponent(EmployeeServiceBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
