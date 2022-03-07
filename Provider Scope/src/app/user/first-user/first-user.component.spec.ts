import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstUserComponent } from './first-user.component';

describe('FirstUserComponent', () => {
  let component: FirstUserComponent;
  let fixture: ComponentFixture<FirstUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
