import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalTestsComponent } from './personal-tests.component';

describe('PersonalTestsComponent', () => {
  let component: PersonalTestsComponent;
  let fixture: ComponentFixture<PersonalTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalTestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
