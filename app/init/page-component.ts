import {EventEmitter,Component,Input,OnInit,DynamicComponentLoader,Injector,ViewChild,AfterViewInit,Output,TemplateRef} from '@angular/core';
import {Router,ROUTER_DIRECTIVES}  from '@angular/router';
import {NgTemplateOutlet} from '@angular/common';
import {Banner1Component}  from '../pages/index';
//根据传入的数据生成对应的视图组件,视图事件,视图编辑组件,视图编辑视图


@Component({
    selector:'pagecomponent',
    template:'',
    directives:[ROUTER_DIRECTIVES],
    providers:[TemplateRef]
    })
export class  PageComponent implements  OnInit{

    @Input()
    public data;

    @Input()
    public component;


        constructor(private dcl:DynamicComponentLoader,
                    private injector:Injector,private router:Router){
        }

        ngOnInit(){}


}