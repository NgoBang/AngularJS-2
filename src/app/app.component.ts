import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{name}}</h1>
  <h4>App Main component</h4>
  <my-tutorial></my-tutorial>
  `,
  styles:['h4 {color: blue;}']
})
export class AppComponent { name = 'Bang'; }
