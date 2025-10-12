import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyRequestComponent } from './vacancy-request.component';

describe('VacancyRequestComponent', () => {
  let component: VacancyRequestComponent;
  let fixture: ComponentFixture<VacancyRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VacancyRequestComponent]
    });
    fixture = TestBed.createComponent(VacancyRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
