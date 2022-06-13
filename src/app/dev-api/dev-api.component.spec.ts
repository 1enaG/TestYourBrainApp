import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevApiComponent } from './dev-api.component';

describe('DevApiComponent', () => {
  let component: DevApiComponent;
  let fixture: ComponentFixture<DevApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
