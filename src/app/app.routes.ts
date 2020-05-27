import { DashboardComponent } from './components/dashboard/dashboard.component';
import { _404Component } from './components/404/404.component';

export const routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: '**',
        component: _404Component,
    },
];