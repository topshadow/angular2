import {Component,Input} from '@angular/core';

@Component({
    selector:'foot',
    template:`
<h1>页脚</h1>`
    })
export class Foot{
    @Input()
    public data;

}