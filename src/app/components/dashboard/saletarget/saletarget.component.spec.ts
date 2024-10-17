import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaletargetComponent } from './saletarget.component';

describe('SaletargetComponent', () => {
  let component: SaletargetComponent;
  let fixture: ComponentFixture<SaletargetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaletargetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaletargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
