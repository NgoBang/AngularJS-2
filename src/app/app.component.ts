import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{name}}</h1>
  <img [src]="image"/>
  <my-tutorial></my-tutorial>
  <input type="text" [value]="gt"/>
  `,
})
export class AppComponent {
  name = 'Bang';

  //property binding
  public image = 'http://lorempixel.com/300/300';
  public gt = 'Wellcome angular 2 for beginner';
}
