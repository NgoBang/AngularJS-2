import { Component } from '@angular/core';

@Component({
    selector: 'my-tutorial',
    template: `
    <h2>This is Tedu Angular2 Tutorial</h2>
    <h3 [class.redColor]="applyClass">Apply class</h3>
    <h1 [class.changeSize] = "applySize">This is size Text</h1>
    <h4 [style.color]="blueColor?'blue':'orange'">Apply style</h4>
    <p [style.font-size]="font?'160%':'100%'">Kích thước phông</p>
    `,
    styles: [`.redColor{
        color:red;
    }
    .changeSize{
        font-size:150%;
    }
    `]
})
export class TutorialComponent {
    public applyClass = true;
    public applySize = true;
    public blueColor = false;
    public font = false;
}