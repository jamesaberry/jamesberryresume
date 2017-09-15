import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherinterestsComponent } from './otherinterests.component';

describe('OtherinterestsComponent', () => {
  let component: OtherinterestsComponent;
  let fixture: ComponentFixture<OtherinterestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherinterestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherinterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
