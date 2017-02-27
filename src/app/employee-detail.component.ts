import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
    selector: 'employee-detail-component',
    templateUrl: 'app/employee-detail.component.html'
})
export class EmployeeDetailComponent implements OnInit, OnDestroy {
    public _id: number;
    public subscription: Subscription;
    public employee: any;
    constructor(private router: Router, private activetedRoute: ActivatedRoute) { }
    ngOnInit() {
        this.subscription = this.activetedRoute.params.subscribe(params => {
            this._id = params['id'];
        });
    }
    GoToEmployee() {
        // tslint:disable-next-line:quotemark
        this.router.navigate(["employees"]);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
