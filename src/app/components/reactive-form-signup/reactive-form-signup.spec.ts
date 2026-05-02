import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormSignup } from './reactive-form-signup';

describe('ReactiveFormSignup', () => {
  let component: ReactiveFormSignup;
  let fixture: ComponentFixture<ReactiveFormSignup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormSignup],
    }).compileComponents();

    fixture = TestBed.createComponent(ReactiveFormSignup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
