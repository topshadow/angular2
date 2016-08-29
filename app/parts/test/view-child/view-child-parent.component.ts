import {Component,ViewChild,OnInit,AfterViewInit,OnDestroy} from '@angular/core';
import {ViewChildChildComponent}  from './view-child-child.component';


@Component({
    selector:'view-child-parent',
    template:`
    <h1>子视图</h1>
    <a class="btn btn-default" (click)="childComponent.start()">开始计时</a>
    <a class="btn btn-default" (click)="childComponent.stop()">结束计时</a>
    <view-child-child></view-child-child>
    `    
})
export class ViewChildParentComponent implements OnInit,AfterViewInit,OnDestroy{
        @ViewChild(ViewChildChildComponent) childComponent:ViewChildChildComponent;

        seconds(){
            return 0;
        }

        ngOnInit(){

        }

        ngOnDestroy(){
            
        }

        ngAfterViewInit(){
            setTimeout(()=>{ this.seconds = ()=>this.childComponent.seconds},0);
        }



        
    

}
