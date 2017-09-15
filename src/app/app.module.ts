import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ReferencesComponent } from './references/references.component';
import { ExperienceComponent } from './experience/experience.component';
import { JumboheaderComponent } from './jumboheader/jumboheader.component';
import { OtherinterestsComponent } from './otherinterests/otherinterests.component';

@NgModule({
  declarations: [
    AppComponent,
    ReferencesComponent,
    ExperienceComponent,
    JumboheaderComponent,
    OtherinterestsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
