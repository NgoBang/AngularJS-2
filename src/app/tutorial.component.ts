import { Component } from '@angular/core';

@Component({
    selector: 'my-tutorial',
    template: `
    <h2>{{title}}</h2>
    <p [ngClass]="{classOne:cone, classTwo:ctwo}">This is ngClass apply style</p>
    <button (click)="toggle()">Toggle</button>
    <p [ngStyle]="{'font-style':style, 'font-size':size}">This pragraph will be apply to ngStyle</p>
    `,
    styles: [
        `
        .classOne{
            color: white;
        }
        .classTwo{
            background-color:black;
        }
        `
    ]
})
export class TutorialComponent {
    public cone: boolean = true;
    public ctwo = true;
    toggle() {
        this.cone = !this.cone;
        this.ctwo = !this.ctwo;
    }
    public style = "italic";
    public size = "30px";
    // tslint:disable-next-line:eofline
}