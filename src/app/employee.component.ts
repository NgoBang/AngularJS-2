// tslint:disable-next-line:eofline
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';

@Component({
    selector: 'employee-list',
    templateUrl: 'app/employee.component.html'
    // tslint:disable-next-line:eofline
})

export class EmployeeListComponent implements OnInit {
    constructor(private employeeService: EmployeeService) {

    }
    ngOnInit() {
        this.employeeService.GetList().subscribe((response: any) => {
            this.employees = response;
        }, error => {
            console.log(error);
        });
    }

    public employees: any[];
    // tslint:disable-next-line:eofline
}