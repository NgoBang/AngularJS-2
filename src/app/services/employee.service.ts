import { Injectable } from '@angular/core';

@Injectable()

export class EmployeeService {
    GetList(): any[] {
        let employees: any[] = [
            {
                Id: 1,
                Name: 'Ngô Trí Bằng'
            },
            {
                Id: 2,
                Name: 'Nguyễn Thị Hương'
            },
            {
                Id: 3,
                Name: 'Trần Văn Hải'
            }
        ];
        return employees;
    }
}