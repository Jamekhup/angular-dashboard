import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersatisfactionComponent } from './customersatisfaction.component';

describe('CustomersatisfactionComponent', () => {
  let component: CustomersatisfactionComponent;
  let fixture: ComponentFixture<CustomersatisfactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomersatisfactionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersatisfactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
