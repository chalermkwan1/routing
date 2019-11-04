import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-error',
  template: `
    <h2>
      Page not FOUND!!!
    </h2>
  `,
  styles: []
})
export class PageErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
