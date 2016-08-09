import {Component,Input,OnInit,ElementRef} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

import {Banner1Component,ProductList,ServiceContent,ArticleShow,HotNews}  from '../pages/index';

import {Dragula,DragulaService}  from 'ng2-dragula/ng2-dragula';
//根据components数据迭代生成页面对应的组件,对应对应的页面函数,对应的页面的编辑页面,对应的页面的编辑页面的函数


import {DataTable,Draggable,Droppable,Column,OrderList,PickList} from 'primeng/primeng';

import {OptionComponent,OPTIONCOMPONENTS,ComponentType}  from './index';





@Component({
    templateUrl:`app/init/page.html`,
    directives:[Banner1Component,
        ProductList,ServiceContent,
        ArticleShow,
        OptionComponent,
        Dragula,
        DataTable,Draggable,Droppable,Column,
        OrderList,PickList,HotNews
    ],
    providers:[],
    viewProviders:[DragulaService],
    styles:[`
.hide{
display: none;
}`]
})
export class Page implements OnInit{

    availableComponentType: ComponentType[]=OPTIONCOMPONENTS;

    // set availableComponentType(componentTypes:ComponentType[]){
    //     console.log('change ');
    //     this._availableComponentType = componentTypes;
    // }
    //
    // get availableComponentType(){
    //     return this._availableComponentType;
    // }

    selectedComponentType: ComponentType[];

    draggedComponentType: ComponentType;

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
    constructor(private router:Router,private route:ActivatedRoute,private dragulaService:DragulaService,private el:ElementRef){}

    ngOnInit(){
        this.currentPath =  this.router.url.replace('/','');
        console.log('current page route path:',this.currentPath);
        var currentPage = window['pages'].find(page=>page.path==this.currentPath);
        console.log(currentPage);
        this.pageComponents = currentPage.components;
        console.log(this.pageComponents);
        this.selectedComponentType = this.pageComponents;
        this.availableComponentType=OPTIONCOMPONENTS;
    }




    toggleOptionComponent(){
        window['$'](this.el.nativeElement).find('#optionPageComponent').toggleClass('hide');
    }

}