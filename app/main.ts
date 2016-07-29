import {Component,OnInit} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {NgFor} from '@angular/common';
import {HTTP_PROVIDERS} from '@angular/http';
import {provideRouter,RouterConfig,ROUTER_DIRECTIVES,ActivatedRoute,Router} from '@angular/router';
import {Navbar} from './init/navbar';
import {Footbar} from './init/footbar';
import  {CommonFunc} from './core'



var common =new CommonFunc();

common.getJSON('website-data.json').then(data=> {
    window['websiteData']=data;
    window['route']  =common.parsePagesToRoute(data['pages']);

    bootstrap(App,[ [provideRouter(window['route'] )]  ])
        .catch(err => console.error(err));
});







@Component({
    selector: 'my-app',
    template: `
 <navbar [data]="navbarData"></navbar>
 <router-outlet ></router-outlet>
 <footbar [data]="footbarData"></footbar> 
`,
    directives: [NgFor,Navbar,Footbar,ROUTER_DIRECTIVES],
    providers:[HTTP_PROVIDERS]
})
export class App  implements  OnInit{
    constructor(
        private route :ActivatedRoute,
        private router:Router){}
    public websiteData ;
    public pages;
    public navbarData;
    public footbarData;
    // 初始化网站静态数据

     ngOnInit(){
         this.websiteData = window['websiteData'];
         this.navbarData = this.websiteData.navbar;
         this.footbarData = this.websiteData.footbar;
         this.pages = this.websiteData.pages;
         this.route.params.subscribe(params => {
             console.log(params); // (+) converts string 'id' to a number
         });
         //获取当前页面数据,并注入到对应到视图中



     }
}



