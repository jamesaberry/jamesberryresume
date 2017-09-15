import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'references-component',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css'],
  providers: [NgbCarouselConfig]
})
export class ReferencesComponent implements OnInit  {
  constructor(config: NgbCarouselConfig) {
    config.interval = 20000;
    config.wrap = true;
    config.keyboard = true;
  }
  ngOnInit() {
  }
}
