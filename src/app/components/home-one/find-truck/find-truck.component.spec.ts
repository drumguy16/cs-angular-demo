import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindTruckComponent } from './find-truck.component';

describe('FindTruckComponent', () => {
  let component: FindTruckComponent;
  let fixture: ComponentFixture<FindTruckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindTruckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindTruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
