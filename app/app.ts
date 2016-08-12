import {COMMON_DIRECTIVES,CORE_DIRECTIVES,ControlContainer} from '@angular/common';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_DIRECTIVES,ActivatedRoute,Router} from '@angular/router';
import {Nav} from './init/nav';
import {Foot} from './init/foot';
import  {ToolBar}  from './init/toolbar';
import {Component,OnInit,ViewContainerRef} from '@angular/core';
import {AlertComponent,BUTTON_DIRECTIVES,ButtonCheckboxDirective,
    MODAL_DIRECTIVES,ButtonRadioDirective,
    DROPDOWN_DIRECTIVES,TAB_DIRECTIVES,
    BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';
import {FORM_DIRECTIVES} from '@angular/forms';
import {InputText,OrderList} from  'primeng/primeng';

import {Base}  from './base';
import { CollapseDirective}  from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    selector: 'my-app',
    template: `
<toolbar></toolbar>
<my-nav [data]="navData"></my-nav>
<router-outlet [data]="pages"></router-outlet>
<foot [data]="footData"></foot>
 `,
    directives: [Nav,Foot,ROUTER_DIRECTIVES,
        ToolBar,COMMON_DIRECTIVES,AlertComponent,
        BUTTON_DIRECTIVES,CORE_DIRECTIVES,
        MODAL_DIRECTIVES,FORM_DIRECTIVES,
        DROPDOWN_DIRECTIVES,TAB_DIRECTIVES,
        ButtonCheckboxDirective,ButtonRadioDirective,
        InputText,OrderList,
        CollapseDirective
    ],
    providers:[HTTP_PROVIDERS,ControlContainer],
    viewProviders:[BS_VIEW_PROVIDERS]
})
export class App extends Base implements  OnInit{
    get isEdit(){
        return window['isEdit'];
    }
    constructor(
        public route :ActivatedRoute,
        private router:Router,
        public viewContainerRef:ViewContainerRef){
        super();
        this.viewContainerRef = viewContainerRef;
    }

    public websiteData;
    public pages;
    public navData;
    public footData;
    public com='topBar';

    // 初始化网站静态数据
    ngOnInit(){
        this.websiteData = window['websiteData'];
        this.navData = this.websiteData.navbar;
        this.footData = this.websiteData.footbar;
        this.pages = this.websiteData.pages;
        //获取当前页面数据,并注入到对应到视图中
    }
}