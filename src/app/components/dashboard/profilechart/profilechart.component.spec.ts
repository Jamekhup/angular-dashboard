import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilechartComponent } from './profilechart.component';

describe('ProfilechartComponent', () => {
  let component: ProfilechartComponent;
  let fixture: ComponentFixture<ProfilechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilechartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
