import {Component,OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router'
// import {DataService}  from './data.service';
import {Http,HTTP_PROVIDERS} from '@angular/http';
@Component({
    selector:'my-app',
    template:` <a [routerLink]="['/coma']">ComponentA</a>
    <a [routerLink]="['/comb']">ComponentB </a>
    <br>
    <router-outlet></router-outlet>
`,
    directives:[ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS]
})
export class AppComponent implements OnInit{
    // constructor(private dataService : DataService){
    //     dataService.getWebsiteData();
    //
    // }

    ngOnInit(){
        // this.dataService.getWebsiteData().subscribe(data=>console.log(data));
    }

}

