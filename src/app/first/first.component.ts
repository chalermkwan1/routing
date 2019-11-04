import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  template: `
    <h2>
        I definitely understand NOTHING!
    </h2>
  `,
  styles: []
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
