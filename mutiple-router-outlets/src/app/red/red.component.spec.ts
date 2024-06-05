import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedComponent } from './red.component';

describe('RedComponent', () => {
  let component: RedComponent;
  let fixture: ComponentFixture<RedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
