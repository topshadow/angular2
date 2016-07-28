import { provideRouter, RouterConfig }  from '@angular/router';
import { AppComponent } from  './app.component';
import {ComponetA,ComponentB} from './other.component';
import {Http,Response,HTTP_PROVIDERS } from '@angular/http';
import {Component} from '@angular/core';







const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/coma',
        pathMatch: 'full'
    },
    {
        path:'coma',
        component:ComponetA
    },
    {
        path:'comb',
        component:ComponentB
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];