import { TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ReferencesComponent } from './references/references.component';
import { ExperienceComponent } from './experience/experience.component';
import { JumboheaderComponent } from './jumboheader/jumboheader.component';
import { OtherinterestsComponent } from './otherinterests/otherinterests.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ReferencesComponent,
        ExperienceComponent,
        JumboheaderComponent,
        OtherinterestsComponent
      ],
      imports: [
        BrowserModule,
        NgbModule.forRoot(),
        BrowserAnimationsModule,
        MdButtonModule,
        MdCheckboxModule
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
