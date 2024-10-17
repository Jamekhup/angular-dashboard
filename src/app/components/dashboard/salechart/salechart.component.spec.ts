import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalechartComponent } from './salechart.component';

describe('SalechartComponent', () => {
  let component: SalechartComponent;
  let fixture: ComponentFixture<SalechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalechartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
