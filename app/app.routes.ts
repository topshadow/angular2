import { provideRouter, RouterConfig }  from '@angular/router';
import { AppComponent } from  './app.component';

const routes: RouterConfig = [
    {
        path: 'app',
        component: AppComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];