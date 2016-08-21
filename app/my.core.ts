
import {Http} from '@angular/http';
import {Routes,RouterConfig} from '@angular/router';
import {PageComponent} from './init/page.component';


export function myHttp(url){ 
 return window['$'].ajax({type:'GET',url:url});
}


export  class CommonTool{
   routes : RouterConfig =[
        {
            path: '',
            redirectTo: '/index',
            pathMatch: 'full'
        },
        {
            path:'index',
            component:PageComponent
        }
    ];




}