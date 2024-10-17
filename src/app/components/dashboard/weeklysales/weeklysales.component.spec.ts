import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklysalesComponent } from './weeklysales.component';

describe('WeeklysalesComponent', () => {
  let component: WeeklysalesComponent;
  let fixture: ComponentFixture<WeeklysalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeeklysalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklysalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
