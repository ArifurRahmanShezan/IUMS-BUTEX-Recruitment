import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HRSeeShorlistedComponent } from './hr-see-shorlisted.component';

describe('HRSeeShorlistedComponent', () => {
  let component: HRSeeShorlistedComponent;
  let fixture: ComponentFixture<HRSeeShorlistedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HRSeeShorlistedComponent]
    });
    fixture = TestBed.createComponent(HRSeeShorlistedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
