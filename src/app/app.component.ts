import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{name}}</h1>
  <my-tutorial></my-tutorial>
  <button (click)="OnClick(name.value)">Click me</button>
  <input type="text" #name/>
  `,
})
export class AppComponent {
  name = 'Bang';
  
  OnClick(value){
    console.log(value);
  }
}
