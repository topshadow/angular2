import {Injectable} from  '@angular/core';
import {RouterConfig }  from '@angular/router';
import {Page} from './init/page';
import {TestApp}  from './test/test';

@Injectable()
export class CommonFunc{
    routes : RouterConfig =[
        {
            path: '',
            redirectTo: '/index',
            pathMatch: 'full'
        },
        {
            path:'test',
            component:TestApp
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



