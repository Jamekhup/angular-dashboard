import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductclassComponent } from './productclass.component';

describe('ProductclassComponent', () => {
  let component: ProductclassComponent;
  let fixture: ComponentFixture<ProductclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductclassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
