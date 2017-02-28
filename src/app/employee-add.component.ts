import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from './services/employee.service';
@Component({
    selector: 'employee-add-component',
    templateUrl: 'app/employee-add.component.html'
})
export class EmployeeAddComponent implements OnInit {
    public _id: number;
    public employee: any;
    constructor(private router: Router, private activatedRoute: ActivatedRoute, public employeeService: EmployeeService) { }

    ngOnInit() {
        this.employee = {};
    }
    GoToEmployee() {
        // tslint:disable-next-line:quotemark
        this.router.navigate(["employees"]);
    }
    SaveForm() {
        this.employeeService.Add(this.employee).subscribe(response => {
            if (response) {
                alert('Add success');
                this.router.navigate(['/employees']);
            }
        });
    }
}
