import { Routes, RouterModule } from '@angular/router';
import {SignInComponent} from './parts/index';
import {PageComponent} from './page.component';

const appRoutes: Routes = [
    {
        path: "",
        redirectTo: "/index",
        pathMatch: 'full'
    },
    {
        path: "sign-in",
        component: SignInComponent
    },
    {
        path: ':path',
        component: PageComponent,
        pathMatch: 'full'
    }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);

