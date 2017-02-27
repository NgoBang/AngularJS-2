import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { EmployeeListComponent } from './employee.component';
import { NotFoundComponent } from './notFound.component';

const routing: Routes = [
    {
        path: '',
        redirectTo: 'employees',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: 'employees',
        component: EmployeeListComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
// tslint:disable-next-line:eofline
export const appRoutes = RouterModule.forRoot(routing);