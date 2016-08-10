import {Component,Input,OnInit,ElementRef} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

import {Banner1Component,ProductList,ServiceContent,ArticleShow,HotNews}  from '../pages/index';

import {Dragula,DragulaService}  from 'ng2-dragula/ng2-dragula';
//根据components数据迭代生成页面对应的组件,对应对应的页面函数,对应的页面的编辑页面,对应的页面的编辑页面的函数


import {DataTable,Draggable,Droppable,Column,OrderList,PickList} from 'primeng/primeng';


import {PartService,Part,OptionGroup}  from '../part-service';




@Component({
    templateUrl:`app/init/page.html`,
    directives:[Banner1Component,
        ProductList,ServiceContent,
        ArticleShow,
        Dragula,
        DataTable,Draggable,Droppable,Column,
        OrderList,PickList,HotNews
    ],
    providers:[PartService],
    viewProviders:[DragulaService],
    styleUrls:[`app/init/page.css`]
})
export class Page implements OnInit{


    optionGroups:OptionGroup[];
    pageParts:Part[];

    showOptionPartsPanel:boolean=false;

    @Input()
    public data;


    @Input()
    public componentType;



    constructor(private router:Router,private route:ActivatedRoute,private dragulaService:DragulaService,private el:ElementRef,public partService:PartService){
        dragulaService.setOptions('canDrag', {
            removeOnSpill: true
        });
        dragulaService.drag.subscribe((value) => {
            console.log(`drag: ${value[0]}`);
            this.onDrag(value.slice(1));
        });
        dragulaService.drop.subscribe((value) => {
            console.log(`drop: ${value[0]}`);
            this.onDrop(value.slice(1));
        });
        dragulaService.over.subscribe((value) => {
            console.log(`over: ${value[0]}`);
            this.onOver(value.slice(1));
        });
        dragulaService.out.subscribe((value) => {
            console.log(`out: ${value[0]}`);
            this.onOut(value.slice(1));
        });
    }

    ngOnInit(){
        var currentPath =  this.router.url.replace('/','');
        this.pageParts = this.partService.getCurrentPageParts(currentPath);
        this.optionGroups = this.partService.getStaticOptionGroups();
    }


    onDrag(args) {
        let [e, el] = args;
        console.log('onDrag->  e:',e,'el:',el);

        // do something
    }

    onDrop(args) {
        let [e, el] = args;
        console.log('onDrop->e:',e,'el:',el);

        // do something
    }

    onOver(args) {
        let [e, el, container] = args;
        console.log('onOver->e:',e,'el:',el,'container:',container);

        // do something
    }

    onOut(args) {
        let [e, el, container] = args;
        console.log('onOut->e:',e,'el:',el,container);
        // do something
        this.optionGroups =this.partService.getStaticOptionGroups();
    }


    viewOptionParts(){
        console.log(this.optionGroups);
    }
    viewPageParts(){
        console.log(this.pageParts);
    }

    toggleOptionPartsPanel(){
        this.showOptionPartsPanel=!this.showOptionPartsPanel;
    }

}