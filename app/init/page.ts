import {Component,Input,OnInit} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

import {Banner1Component,ProductList,ServiceContent,ArticleShow}  from '../pages/index';

import {PageComponent} from  './page-component/page-component';
//根据components数据迭代生成页面对应的组件,对应对应的页面函数,对应的页面的编辑页面,对应的页面的编辑页面的函数


@Component({
    template:`

<div *ngFor="let pageComponent of pageComponents" >
<div [ngSwitch]="pageComponent.component">
<banner-1-component  *ngSwitchCase="'Banner1Component'" [data]="pageComponent"></banner-1-component>
 <product-list *ngSwitchCase="'ProductList'" [data]="pageComponent" ></product-list>
 <service-content *ngSwitchCase="'ServiceContent'" [data]="pageComponent"></service-content>
 <article-show *ngSwitchCase="'ArticleShow'"  [data]="pageComponent" ></article-show>
 </div>
 </div>
`,
    directives:[Banner1Component,
        ProductList,ServiceContent,
        ArticleShow,
        PageComponent
    ],
    providers:[]
})
export class Page implements OnInit{
    @Input()
    public data;

    @Input()
    public pageComponent;

    @Input()
    public componentType;

    openEditComponent(){}

    @Input()
    public pageComponents;

    public currentPath;
    constructor(private router:Router,private route:ActivatedRoute){}

    ngOnInit(){
        this.currentPath =  this.router.url.replace('/','');
        console.log('current page route path:',this.currentPath);
        var currentPage = window['pages'].find(page=>page.path==this.currentPath);
        console.log(currentPage);
        this.pageComponents = currentPage.components;
        console.log(this.pageComponents);

    }
}