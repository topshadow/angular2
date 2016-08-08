import {Component,Input,OnInit,ElementRef} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

import {Banner1Component,ProductList,ServiceContent,ArticleShow}  from '../pages/index';

import {Dragula,DragulaService}  from 'ng2-dragula/ng2-dragula';
//根据components数据迭代生成页面对应的组件,对应对应的页面函数,对应的页面的编辑页面,对应的页面的编辑页面的函数


import {DataTable,Draggable,Droppable,Column} from 'primeng/primeng';

import {OptionComponent,OPTIONCOMPONENTS,ComponentType}  from './index';

@Component({
    templateUrl:`app/init/page.html`,
    directives:[Banner1Component,
        ProductList,ServiceContent,
        ArticleShow,
        OptionComponent,
        Dragula,
        DataTable,Draggable,Droppable,Column
    ],
    providers:[],
    viewProviders:[DragulaService],
    styles:[`
.hide{
display: none;
}`]

})
export class Page implements OnInit{
    optionComponents:ComponentType[]=OPTIONCOMPONENTS;
    dragedComponentType:ComponentType;
    selectedComponentTypes: ComponentType[];
    availableComponentTypes:ComponentType[];
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

    }

    ngOnInit(){
        this.currentPath =  this.router.url.replace('/','');
        console.log('current page route path:',this.currentPath);
        var currentPage = window['pages'].find(page=>page.path==this.currentPath);
        console.log(currentPage);
        this.pageComponents = currentPage.components;
        console.log(this.pageComponents);
    }



    toggleOptionComponent(){
        window['$'](this.el.nativeElement).find('#optionPanel').toggleClass('hide');
    }

    dragStart(event,componentType:ComponentType){
            this.dragedComponentType = componentType;
    }
    // drop(event){
        // if(this.dragedComponentType){
        //     this.selectedComponentTypes.push(this.dragedComponentType);
        //     this.availableComponentTypes.splice( this.findIndex(this.dragedComponentType),1);
        //     this.dragedComponentType=null;
        // }
    // }
    // dragEnd(event){
    //
    // }


    findIndex(componentType:ComponentType){
        let index= -1;
        for(let i=0;i<this.availableComponentTypes.length;i++){
            if(componentType.name==this.availableComponentTypes[i].name){
                index=i;
                break;
            }
        }
        return index;
    }


}