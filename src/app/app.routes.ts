import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { EmployeeListComponent } from './employee.component';
import { NotFoundComponent } from './notFound.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeeProjectsComponent } from './employee-projects.component';
import { EmployeeOverviewComponent } from './employee-overview.component';
import { LoginComponent } from './login.component';
import { CheckLoginGuard } from './guards/check-login.guard';
import { CheckSaveFormGuard } from './guards/check-save-form.guard';

const routing: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'employees',
        component: EmployeeListComponent,
        canActivate: [CheckLoginGuard]
    },
    {
        path: 'employee-detail/:id',
        component: EmployeeDetailComponent,
        canDeactivate: [CheckSaveFormGuard],
        children: [
            {
                path: '',
                redirectTo: 'overview',
                pathMatch: 'full'
            },
            {
                path: 'overview',
                component: EmployeeOverviewComponent
            },
            {
                path: 'projects',
                component: EmployeeProjectsComponent
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
// tslint:disable-next-line:eofline
export const appRoutes = RouterModule.forRoot(routing);