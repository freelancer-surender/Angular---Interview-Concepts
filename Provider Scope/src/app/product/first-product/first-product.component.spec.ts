import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstProductComponent } from './first-product.component';

describe('FirstProductComponent', () => {
  let component: FirstProductComponent;
  let fixture: ComponentFixture<FirstProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
