import {Component,Input,OnInit} from '@angular/core';

//根据传入的数据生成对应的视图组件,视图事件,视图编辑组件,视图编辑视图


@Component({
    selector:'pagecomponent',
    template:`<component></component>`,
    directives:[this.component]
    })
export class  PageComponent implements  OnInit{

        @Input()
        public data;

        private component:any;

        constructor(){
            this.component = require(this.data.component.path)['component'];
        }
        ngOnInit(){
            console.log('pageComponent',this.data);
        }

}