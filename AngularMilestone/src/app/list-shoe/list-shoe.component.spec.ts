import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListShoeComponent } from './list-shoe.component';

describe('ListShoeComponent', () => {
  let component: ListShoeComponent;
  let fixture: ComponentFixture<ListShoeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListShoeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListShoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
