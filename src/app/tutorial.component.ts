import { Component } from '@angular/core';

@Component({
    selector: 'my-tutorial',
    template: `
    <h2>{{title}}</h2>
    `
})
export class TutorialComponent {
    public title = "This is Tedu Angular2 Tutorial compponent";

}