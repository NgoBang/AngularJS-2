import { Component } from '@angular/core';

@Component({
    selector: 'my-tutorial',
    template: `
    <h2>{{title}}</h2>
    <h3 *ngIf="showLineIf">This ngIf directive line.</h3>
    <div [ngSwitch]="color">
        <p *ngSwitchCase="'red'">This is line color is red</p>
        <p *ngSwitchCase="'blue'">This is line color is blue</p>
        <p *ngSwitchCase="'green'">This is line color is green</p>
        <p *ngSwitchDefault>Invalid color</p>
    </div>
    <ul>
    <li *ngFor="let color of colors">{{color}}</li>
    </ul>
    `
})
export class TutorialComponent {
    public title = 'This is Tedu Angular2 Tutorial compponent';
    public showLineIf = false;
    public color = 'red';
    public colors:string[] = ["red","green","blue"];
    // tslint:disable-next-line:eofline
}