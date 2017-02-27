import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'home-component',
    template: `<h1>This is home component</h1>
    <button (click)="GoToEmployee()">Go to employees</button>`
})
export class HomeComponent {
    constructor(private router: Router) { }
    GoToEmployee() {
        // tslint:disable-next-line:quotemark
        this.router.navigate(["employees"]);
    }
}
