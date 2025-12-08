import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyRequestViewComponent } from './vacancy-request-view.component';

describe('VacancyRequestViewComponent', () => {
  let component: VacancyRequestViewComponent;
  let fixture: ComponentFixture<VacancyRequestViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VacancyRequestViewComponent]
    });
    fixture = TestBed.createComponent(VacancyRequestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
