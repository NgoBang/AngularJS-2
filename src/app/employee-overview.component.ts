import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
    selector: 'employee-overview-component',
    template: `<h3>Overview employee</h3>`
})
export class EmployeeOverviewComponent {
    public subscription: Subscription;
    public parentRouterId: number;
    constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
    ngOnInit() {
        this.subscription = this.activatedRoute.parent.params.subscribe(params => {
            this.parentRouterId = params['id'];
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
