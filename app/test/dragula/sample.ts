import {Component,OnInit} from '@angular/core';

import {Dragula,DragulaService}  from 'ng2-dragula/ng2-dragula';


interface Part{
    name:string;
    component:string;
}

@Component({
    selector:'dragula-sample',
    templateUrl:`app/test/dragula/sample.html`,
    directives:[Dragula],
    providers:[DragulaService]
})
export class DragulaSample implements  OnInit{
    optionParts:Part[];
    draggedPart:Part;
    pageParts:Part[];

    constructor(private dragulaService: DragulaService) {
        dragulaService.setOptions('my-dragula', {
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
        this.optionParts=[{
            "component":"Banner1Component",
            "name":"产品展示"
        },
            {
                "component":"ProductList",
                "name":"产品列表"
            },
            {
                "component":"ServiceContent",
                "name":"服务内容"
            },
            {
                "component":"ArticleShow",
                "name":"文章列表"
            },
            {
                "component":"HotNews",
                "name":"热点新闻"
            }];
            this.pageParts=[{
                "component":"Banner1Component",
                "name":"产品展示"
            },
                {
                    "component":"ProductList",
                    "name":"产品列表"
                },
                {
                    "component":"ServiceContent",
                    "name":"服务内容"
                },
                {
                    "component":"ArticleShow",
                    "name":"文章列表"
                },
                {
                    "component":"HotNews",
                    "name":"热点新闻"
                }];
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
    }


    viewOptionParts(){
        console.log(this.optionParts);
    }
    viewPageParts(){
        console.log(this.pageParts);
    }
}