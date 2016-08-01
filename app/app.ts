import {COMMON_DIRECTIVES,CORE_DIRECTIVES,NgControl,ControlContainer} from '@angular/common';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_DIRECTIVES,ActivatedRoute,Router} from '@angular/router';
import {Navbar} from './init/navbar';
import {Footbar} from './init/footbar';
import  {ToolBar}  from './init/toolbar';
import {Component,OnInit,ViewContainerRef} from '@angular/core';
import {AlertComponent,BUTTON_DIRECTIVES,ButtonCheckboxDirective,
    MODAL_DIRECTIVES,ButtonRadioDirective,
    DROPDOWN_DIRECTIVES,TAB_DIRECTIVES,
    BS_VIEW_PROVIDERS,modalConfigDefaults} from 'ng2-bootstrap/ng2-bootstrap';
import {FORM_DIRECTIVES} from '@angular/forms';

@Component({
    selector: 'my-app',
    template: `
<toolbar></toolbar>
<navbar [data]="navbarData"></navbar>
<router-outlet [data]="pages"></router-outlet>
<footbar [data]="footbarData"></footbar>
 `,
    directives: [Navbar,Footbar,ROUTER_DIRECTIVES,
        ToolBar,COMMON_DIRECTIVES,AlertComponent,
        BUTTON_DIRECTIVES,CORE_DIRECTIVES,
        MODAL_DIRECTIVES,FORM_DIRECTIVES,
        DROPDOWN_DIRECTIVES,TAB_DIRECTIVES,
        ButtonCheckboxDirective,ButtonRadioDirective],
    providers:[HTTP_PROVIDERS,ControlContainer],
    viewProviders:[BS_VIEW_PROVIDERS]
})
export class App  implements  OnInit{
    constructor(
        public route :ActivatedRoute,
        private router:Router,
        public viewContainerRef:ViewContainerRef){
        this.viewContainerRef = viewContainerRef;
    }

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