import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {NgFor} from '@angular/common';
// import {HTTP_PROVIDERS, Http} from '@angular/http';
// import {DataService} from './data.service';
import {OnInit} from '@angular/core';
import {provideRouter,RouterConfig} from '@angular/router';
import {Navbar} from './init/navbar';
import {Footbar} from './init/footbar';

@Component({
    selector: 'my-app',
    template: `
<navbar [data]="navbarData"></navbar>
<router-outlet></router-outlet>
<footbar></footbar>
`,
    directives: [NgFor,Navbar,Footbar],
    // providers:[DataService]
})
export class App  implements  OnInit{
     routes : RouterConfig=[];
    navbarData = {name:'导航栏名字',content:'导航栏内容'};


        ngOnInit(){}

    // constructor(private dataService:DataService){}
    //    async ngOnInit(){
    //     var websiteData = await this.dataService.getWebsiteData();
            // console.log(websiteData);
           // for(var i=0;i<websiteData.length;i++){
           //     var page = websiteData[i];
               // this.routes.push({path:page.path,component:require(page.component) });
        // }
        //     console.log(this.routes);
       // }

}

bootstrap(App)
    .catch(err => console.error(err));
