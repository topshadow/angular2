import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {NgFor} from '@angular/common';
// import {HTTP_PROVIDERS, Http} from '@angular/http';
import {DataService} from './data.service';
import {OnInit} from '@angular/core';
import {provideRouter,RouterConfig} from '@angular/router';

@Component({
    selector: 'my-app',

    template: `
<h1>凡科建站</h1>  `,
    directives: [NgFor],
    providers:[DataService]
})
export class App  implements  OnInit{
     routes : RouterConfig=[];



    constructor(private dataService:DataService){}
       async ngOnInit(){
        var websiteData = await this.dataService.getWebsiteData();
            console.log(websiteData);
           for(var i=0;i<websiteData.length;i++){
               var page = websiteData[i];
               this.routes.push({path:page.path,component:require(page.component) });
        }
            console.log(this.routes);

       }






    people: Object[];

    active:boolean = false;
    toggleActiveState() {
        this.active = !this.active;
    }
}

bootstrap(App)
    .catch(err => console.error(err));
