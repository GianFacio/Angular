import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayShoeComponent } from './display-shoe.component';

describe('DisplayShoeComponent', () => {
  let component: DisplayShoeComponent;
  let fixture: ComponentFixture<DisplayShoeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayShoeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayShoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
