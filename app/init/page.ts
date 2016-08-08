import {Component,Input,OnInit,ElementRef} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

import {Banner1Component,ProductList,ServiceContent,ArticleShow}  from '../pages/index';

import {PageComponent} from  './page-component/page-component';

import {Dragula,DragulaService}  from 'ng2-dragula/ng2-dragula';
//根据components数据迭代生成页面对应的组件,对应对应的页面函数,对应的页面的编辑页面,对应的页面的编辑页面的函数


@Component({
    template:`

<div *ngFor="let pageComponent of pageComponents" [dragula]="'drag-component'"   >
<div [ngSwitch]="pageComponent.component">
<banner-1-component  *ngSwitchCase="'Banner1Component'" [data]="pageComponent"  ></banner-1-component>
<product-list *ngSwitchCase="'ProductList'" [data]="pageComponent"  ></product-list>
<service-content *ngSwitchCase="'ServiceContent'" [data]="pageComponent"  ></service-content>
<article-show  *ngSwitchCase="'ArticleShow'" [data]="pageComponent"  ></article-show>
 </div>
 </div>
`,
    directives:[Banner1Component,
        ProductList,ServiceContent,
        ArticleShow,
        PageComponent,
        Dragula
    ],
    providers:[],
    viewProviders:[DragulaService]

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
    constructor(private router:Router,private route:ActivatedRoute,private dragulaService:DragulaService,private el:ElementRef){
        dragulaService.setOptions('drag-component',
            {

                direction: 'horizontal',
                copySortSource:true,
                removeOnSpill: false,
            });
        // dragulaService.drag.subscribe((value) => {
        //     this.onDrag(value.slice(1));
        // });
        // dragulaService.drop.subscribe((value) => {
        //     this.onDrop(value.slice(1));
        // });
        // dragulaService.over.subscribe((value) => {
        //     this.onOver(value.slice(1));
        // });
        // dragulaService.out.subscribe((value) => {
        //     this.onOut(value.slice(1));
        // });
    }

    ngOnInit(){
        this.currentPath =  this.router.url.replace('/','');
        console.log('current page route path:',this.currentPath);
        var currentPage = window['pages'].find(page=>page.path==this.currentPath);
        console.log(currentPage);
        this.pageComponents = currentPage.components;
        console.log(this.pageComponents);
    }

    private hasClass(el: any, name: string) {
        return new RegExp('(?:^|\s+)' + name + '(?:\s+|$)').test(el.className);
    }

    private addClass(el: any, name: string) {
        if (!this.hasClass(el, name)) {
            el.className = el.className ? [el.className, name].join(' ') : name;
        }
    }

    private removeClass(el: any, name: string) {
        if (this.hasClass(el, name)) {
            el.className = el.className.replace(new RegExp('(?:^|\s+)' + name + '(?:\s+|$)', 'g'), '');
        }
    }

    private onDrag(args) {
        let [e, el] = args;
        console.log('drag',e,el);
        this.removeClass(e, 'ex-moved');
    }

    private onDrop(args) {
        let [e, el] = args;
        console.log('drop',e,el);
        this.addClass(e, 'ex-moved');
    }

    private onOver(args) {
        let [e, el, container] = args;
        console.log('over',e,el);
        this.addClass(el, 'ex-over');
    }

    private onOut(args) {
        let [e, el, container] = args;
        console.log('onOut',e,el);

        this.removeClass(el, 'ex-over');
    }

}