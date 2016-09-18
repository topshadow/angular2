import { Routes, RouterModule } from '@angular/router';
import {SignInComponent,SignUpComponent} from './parts/index';
import {PageComponent} from './page.component';

const appRoutes: Routes = [
    {
        path: "",
        redirectTo: "/sign-in",
        pathMatch: 'full'
    },
    {
        path: "sign-in",
        component: SignInComponent
    },{
        path:"sign-up",
        component:SignUpComponent
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

