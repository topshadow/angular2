import {Component,OnInit,OnChanges} from '@angular/core';

@Component({
    selector:'local-variable-parent',
    template:`
    <local-variable-child #timercount></local-variable-child>
    
    <a class="btn btn-default" (click)="timercount.start()">开始计时</a>
    <a class="btn btn-default" (click)="timercount.stop()">结束计时</a>
    <h1>{{timercount.message}}</h1>
    `
})
export class LocalVariablePranetComponent{

}