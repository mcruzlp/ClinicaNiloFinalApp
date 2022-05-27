import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppntsComponent } from './appnts.component';

describe('AppntsComponent', () => {
  let component: AppntsComponent;
  let fixture: ComponentFixture<AppntsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppntsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppntsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
