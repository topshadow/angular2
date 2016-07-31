import {Component,OnInit} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {NgFor} from '@angular/common';
import {HTTP_PROVIDERS} from '@angular/http';
import {provideRouter,RouterConfig,ROUTER_DIRECTIVES,ActivatedRoute,Router} from '@angular/router';
import {Navbar} from './init/navbar';
import {Footbar} from './init/footbar';
import  {CommonFunc} from './core'
import {Logger} from './logger';
import  {TopBar}  from './init/topbar';
import {DynamicComponentLoader,Injector} from '@angular/core';


var common =new CommonFunc();

common.getJSON('website-data.json').then(data=> {
    window['websiteData']=data;
    window['route']  =common.parsePagesToRoute(data['pages']);
    window['pages'] = data['pages'];
    window['isEdit'] =true;
    bootstrap(App,[ [provideRouter(window['route'])]  ])
        .catch(err => console.error(err));
});
@Component({
    selector: 'my-app',
    template: `
 <topbar></topbar>
  <navbar [data]="navbarData"></navbar>
  <router-outlet [data]="pages"></router-outlet>
  <footbar [data]="footbarData"></footbar>
 `,
    directives: [NgFor,Navbar,Footbar,ROUTER_DIRECTIVES,TopBar],
    providers:[HTTP_PROVIDERS]
})
export class App  implements  OnInit{
    constructor(
        private route :ActivatedRoute,
        private router:Router){}
        public websiteData;
        public pages;
        public navbarData;
        public footbarData;
        public com='topbar';
        // 初始化网站静态数据
        ngOnInit(){
            this.websiteData = window['websiteData'];
            this.navbarData = this.websiteData.navbar;
            this.footbarData = this.websiteData.footbar;
            this.pages = this.websiteData.pages;
            //获取当前页面数据,并注入到对应到视图中

      }
}

// @Component({
//     selector: 'child-component',
//     template: 'Child'
// })
// class ChildComponent {
// }
// @Component({
//     selector: 'my-app',
//     template: 'Parent (<child id="child"></child>)'
// })
// class MyApp {
//     constructor(dcl: DynamicComponentLoader, injector: Injector) {
//         dcl.loadAsRoot(ChildComponent, '#child', injector);
//     }
// }
// bootstrap(MyApp);
