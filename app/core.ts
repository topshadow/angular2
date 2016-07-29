import {Component,Injectable} from  '@angular/core';
import {Headers,Http,Response} from '@angular/http';
import { provideRouter, RouterConfig }  from '@angular/router';

import { Observable }     from 'rxjs/Observable';
import {Page} from './init/page';
import {App} from './main';




@Injectable()
export class CommonFunc{
    routes : RouterConfig =[
        {
            path: '',
            redirectTo: '/index',
            pathMatch: 'full'
        }
    ];

    getJSON(url) {
        var promise = new Promise(function(resolve, reject){
        var client = new XMLHttpRequest();
        client.open("GET", url);
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.setRequestHeader("Accept", "application/json");
        client.send();

        function handler() {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        }

    });
    return promise;
};

    parsePagesToRoute(pages){
        for(var i=0;i<pages.length;i++){
            this.routes.push(
                {
                    path:pages[i].path,
                    component:Page
                }
            );
   }
        return this.routes;
    }


}



