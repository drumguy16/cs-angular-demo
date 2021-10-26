import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindTrackTwoComponent } from './find-track-two.component';

describe('FindTrackTwoComponent', () => {
  let component: FindTrackTwoComponent;
  let fixture: ComponentFixture<FindTrackTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindTrackTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindTrackTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
