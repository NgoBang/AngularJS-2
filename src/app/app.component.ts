import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{title | uppercase}}!</h1>
  <p>Date today: {{today| date:'shortDate' | uppercase}}</p>
  <p>Percent: {{percentNumber| percent:'4.3-5'}}</p>
  <p>Number: {{e | number:'3.1-5'}}</p>
  <p>{{obj | json}}
  <p>2 power 10 {{ 2 |  exponentialStrength:10}}</p>
  <ul>
    <li *ngFor="let i of collection | slice:1:3">{{i}}</li>
  </ul>
  <my-tutorial></my-tutorial>
  `,
})
export class AppComponent {
  title = 'Bang';
  public today = Date.now();
  public percentNumber = 1.3495;
  public e: number = 2.7123213876786;
  public obj: Object = {
    foo: 'bar',
    baz: 'qux',
    nested: {
      xyz: 3,
      numbers: [1, 2, 3, 4, 5, 6, 7]
    }
  };
  public collection: string[] = ['a', 'b', 'c', 'd'];
}
