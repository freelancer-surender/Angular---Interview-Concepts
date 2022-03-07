import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondUserComponent } from './second-user.component';

describe('SecondUserComponent', () => {
  let component: SecondUserComponent;
  let fixture: ComponentFixture<SecondUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
