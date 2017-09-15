import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumboheaderComponent } from './jumboheader.component';

describe('JumboheaderComponent', () => {
  let component: JumboheaderComponent;
  let fixture: ComponentFixture<JumboheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumboheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumboheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
